/* Mobile navigation.
   The old build simply hid the nav under 900px with no replacement, so a phone
   had no way to reach any page except by guessing the URL. */
(function () {
    "use strict";

    function init() {
        var toggle = document.querySelector(".menu-toggle");
        var nav = document.querySelector("header nav");
        if (!toggle || !nav) return;

        function close() {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = "☰";
        }

        toggle.addEventListener("click", function (event) {
            event.stopPropagation();
            var open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            toggle.textContent = open ? "✕" : "☰";
        });

        /* Tapping elsewhere or following a link closes it, otherwise the panel
           sits open on top of the page you just navigated to. */
        document.addEventListener("click", function (event) {
            if (!nav.contains(event.target) && event.target !== toggle) close();
        });
        nav.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", close);
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") close();
        });
        window.addEventListener("resize", function () {
            if (window.innerWidth > 900) close();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
