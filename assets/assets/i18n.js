/* ==========================================================================
   TAI Research — language switching

   The English text stays in the HTML. That is deliberate:

   - the page reads correctly with JavaScript off, and for a search engine;
   - there is no second copy of the English to drift out of sync, which is the
     usual way a two-language site rots.

   Each translatable element carries data-i18n="key". The Chinese dictionary is
   the only one stored. Switching back to English restores the original text
   captured at load, so nothing has to be duplicated and nothing can disagree.
   ========================================================================== */

(function () {
    "use strict";

    var STORAGE_KEY = "tai.lang";
    var HTML_LANG = { en: "en", zh: "zh-CN" };

    /* Original text, captured before anything is replaced. */
    var originals = new WeakMap();

    /** Which language to start in: a saved choice, else the browser, else English. */
    function initialLanguage() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "zh" || saved === "en") return saved;
        } catch (e) {
            /* Private mode, or storage disabled. Fall through to detection. */
        }
        var nav = (navigator.language || "en").toLowerCase();
        return nav.indexOf("zh") === 0 ? "zh" : "en";
    }

    function dict() {
        return (window.TAI_I18N && window.TAI_I18N.zh) || {};
    }

    /** Apply a language to every marked element on the page. */
    function apply(lang) {
        var zh = dict();

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            if (!originals.has(el)) originals.set(el, el.textContent);
            var key = el.getAttribute("data-i18n");
            if (lang === "zh" && Object.prototype.hasOwnProperty.call(zh, key)) {
                el.textContent = zh[key];
            } else {
                el.textContent = originals.get(el);
            }
        });

        /* For copy that contains inline markup - links, emphasis - replacing
           textContent would strip it, so the dictionary may carry HTML here.
           It is authored by us, not by a user, which is what makes this safe. */
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            if (!originals.has(el)) originals.set(el, el.innerHTML);
            var key = el.getAttribute("data-i18n-html");
            if (lang === "zh" && Object.prototype.hasOwnProperty.call(zh, key)) {
                el.innerHTML = zh[key];
            } else {
                el.innerHTML = originals.get(el);
            }
        });

        /* Attribute translation: data-i18n-attr="placeholder:key,title:key" */
        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            if (!el.dataset.i18nAttrOriginal) {
                el.dataset.i18nAttrOriginal = el.getAttribute("data-i18n-attr");
            }
            el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
                var bits = pair.split(":");
                if (bits.length !== 2) return;
                var attr = bits[0].trim();
                var key = bits[1].trim();
                if (!el.dataset["orig_" + attr]) {
                    el.dataset["orig_" + attr] = el.getAttribute(attr) || "";
                }
                if (lang === "zh" && Object.prototype.hasOwnProperty.call(zh, key)) {
                    el.setAttribute(attr, zh[key]);
                } else {
                    el.setAttribute(attr, el.dataset["orig_" + attr]);
                }
            });
        });

        document.documentElement.setAttribute("lang", HTML_LANG[lang] || lang);

        document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
            var isActive = btn.getAttribute("data-lang-btn") === lang;
            btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        /* The document title has no element to hang an attribute on, so it is
           looked up by the page name on <body data-page>. Assigning the whole
           titles[lang] table here instead put "[object Object]" in the tab,
           which is exactly what an object coerced to a string looks like. */
        var page = document.body && document.body.getAttribute("data-page");
        if (page && window.TAI_I18N && window.TAI_I18N.titles) {
            var table = window.TAI_I18N.titles[lang];
            if (table && table[page]) document.title = table[page];
        }
    }

    function set(lang) {
        apply(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    function init() {
        document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                set(btn.getAttribute("data-lang-btn"));
            });
        });
        apply(initialLanguage());
    }

    /* Exposed so a page can force a language if it ever needs to. */
    window.TAI_SET_LANG = set;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
