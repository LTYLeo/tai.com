/* ==========================================================================
   Chinese copy for every page.

   Only Chinese is stored. The English lives in the HTML and is restored from
   there when the reader switches back, so a phrase can never exist in two
   versions that disagree.

   Keys are grouped by page: nav.*, hero.*, news.*, and per-article prefixes.
   ========================================================================== */

window.TAI_I18N = {
    zh: {
        /* ── Shared ─────────────────────────────────────────────── */
        "tagline": "构建智能的未来",
        "learn_more": "了解更多 →",
        "read_more": "阅读全文 →",
        "back": "← 返回",
        "badge.new": "新",

        /* ── Navigation ─────────────────────────────────────────── */
        "nav.home": "首页",
        "nav.products": "产品",
        "nav.research": "研究",
        "nav.news": "动态",
        "nav.leadership": "领导层",
        "nav.support": "支持",

        /* ── Home ───────────────────────────────────────────────── */
        "hero.title": "构建智能的未来。",
        "hero.body": "TAI Research 探索并研发服务于人类的人工智能系统。我们面向公众提供 AI 服务，也为社区构建、开源并发布研究预览。",
        "hero.cta1": "体验 Sigma",
        "hero.cta2": "浏览研究",

        "latest.label": "最新开源发布",
        "latest.badge": "首个安全模型",
        "latest.desc": "一个轻量的文本安全分类器 —— TAI Guardian 系列的首个模型。为 AI 对齐与内容安全从零构建。",

        "products.title": "产品",
        "products.sub": "从研究中落地的部署与演示。",
        "products.sigma": "展示 GTC 系列模型的对话式网站。你可以用账号访问不同模型，也可以直接开始使用。",
        "products.sigma_series": "领域专家模型：Sigma 五子棋、Sigma 绘画、Sigma 证明等。",
        "products.guardian": "面向内容审核与对齐的 AI 安全模型系列。从 GTC-Guard-0 开始，我们自底向上构建安全能力。",
        "products.view_all": "查看全部产品 →",

        "research.title": "研究",
        "research.sub": "公开的研究项目、论文与开源发布。",
        "research.gtc": "Generative Trained Core 家族 —— 从 GTC-1 到 GTC-2.5。模型卡与权重见 Hugging Face。",
        "research.tfmf": "我们的后训练模型线：基于成熟开源基础做适配与增强，而不是从零重造。",
        "research.guardian": "以安全为先的文本审核模型系列。GTC-Guard-0 是首个基线分类器，为可解释性与轻量部署而设计。",
        "research.view_all": "查看全部研究 →",

        "news.title": "动态",
        "news.view_all": "查看全部动态 →",
        "news.shift.title": "一次战略调整：从模型迭代，到基础研究",
        "news.shift.desc": "GTC 进入维护模式。我们的模型工作将由 TFMF 延续，核心精力转向长期基础研究。",
        "news.gtc25.title": "🚀 GTC-2.5 与 GTC-2.5 mini 发布 —— 基础已定",
        "news.gtc25.desc": "我们很高兴宣布发布 GTC-2.5（4 亿参数）与 GTC-2.5 mini（6400 万参数）。这标志着「预览」时代的结束，以及更成熟的、面向产品的阶段开始。",
        "news.gtc25o.title": "🔄 GTC-2.5o 预览 —— 以全模态理解拓展边界",
        "news.gtc25o.desc": "我们兴奋地推出 GTC-2.5o，GTC 家族首个真正的多模态成员 —— 在统一模型中整合文本、图像与音频理解。",

        "dev.title": "开发者",
        "dev.sub": "工具、API 文档、SDK 与示例，帮助你集成我们的模型。",
        "dev.guard_api": "轻量安全分类器。可作为 LLM 应用的前置过滤。",
        "dev.get_started": "开始使用",
        "dev.oss_title": "开源",
        "dev.oss_desc": "全部公开仓库、模型卡与权重。欢迎贡献。",
        "dev.platform_title": "开发者平台",
        "dev.platform_desc": "API 密钥、用量面板与 TFMF 试玩场。",
        "dev.open": "打开",

        "support.title": "支持我们",
        "support.sub": "TAI Research 是一个学生组建的研究团队。你的支持帮助我们获取算力、加速研究。",
        "support.patron_title": "赞助者 — Pro",
        "support.patron_desc": "月度支持计划，获得更多额度与提前预览。",
        "support.afdian": "在爱发电支持",
        "support.contact_title": "联系我们",
        "support.email": "发邮件",

        /* ── News list page ─────────────────────────────────────── */
        "newspage.title": "动态",
        "newspage.sub": "来自 TAI Research 的最新进展、发布与公告。",

        /* ── Products page ──────────────────────────────────────── */
        "prodpage.title": "产品",
        "prodpage.sub": "我们的研究与工程落地成的产品与演示。",

        /* ── Research page ──────────────────────────────────────── */
        "respage.title": "研究",
        "respage.sub": "公开的研究工作、模型与开源发布。",

        /* ── Leadership page ────────────────────────────────────── */
        "leadpage.title": "领导层",
        "leadpage.sub": "引领 TAI Research 愿景、战略与长期基础研究的执行团队。",

        /* ── Strategic shift article ────────────────────────────── */
        "shift.title": "一次战略调整：从模型迭代，到基础研究",
        "shift.meta": "2026-09-15 · TAI Research",
        "shift.p1": "TAI Research 创立于一个简单的信念：智能应当可及，创新不应受年龄或规模的限制。过去一段时间里，我们在 GTC 这个名称下，训练并发布了一系列模型。它们验证了我们的训练链路，教会了我们如何交付产品，也为我们带来了第一批真实用户。它们完成了自己的使命。",
        "shift.p2": "但在这个过程中，我们也学到了重要的一课。在当前的格局下，做一个更好的基座模型，所需要的资源远远超出一个小型研究团队所能承担的范围。算力、数据、人才，都集中在少数人手中。按照他们的规则竞争，意味着跑一场我们赢不了的比赛 —— 更重要的是，那并不是我们该跑的比赛。",
        "shift.p3": "所以我们决定做一次主动的调整。",

        "shift.h.gtc": "GTC 系列：进入维护模式",
        "shift.p.gtc": "GTC 系列会继续存在，但它不再是我们关注的焦点。我们可能偶尔发布小的更新，但不会再开启新的版本号。这个系列已经完成了它的任务 —— 它证明了我们能造。现在，是时候去做更难的事了。",

        "shift.h.tfmf": "TFMF：新的模型线",
        "shift.p.tfmf1": "从现在起，我们的模型产品将统一归入 TFMF 系列。与 GTC 不同，TFMF 不再从零构建基座模型，而是基于成熟的开源基础，通过后训练、适配和产品集成，让它变得更好用。",
        "shift.p.tfmf2": "TFMF 会分代际演进：TFMF、TFMF 2、TFMF 3，以此类推。每一代都是能力、效率和实用性上的一步前进，而不是重复造轮子。",

        "shift.h.focus": "我们真正的重心：长期基础研究",
        "shift.p.focus1": "从基座模型的竞争中退后一步，是为了向前迈进到一个更有意义的方向。我们正在把核心精力转向长期基础研究 —— 那些还没有被挤满、还没有被解决、还没有被真正理解的领域。这些项目需要耐心、深度思考，以及在没有即时回报的情况下持续探索的意愿。它们才是 TAI Research 存在的理由。",
        "shift.p.focus2": "这些研究方向的具体内容，我们暂时无法分享。我们能说的是：它们指向真正重要的问题，而且需要时间。我们不追求速胜。我们在寻找下一个范式。",

        "shift.h.users": "这对我们的用户意味着什么",
        "shift.p.users": "如果你在使用我们的产品，今天几乎没有什么变化。你依赖的模型仍然可用，你使用的平台仍然正常。变化的是我们下一步的精力投向 —— 投向那些更深处的工作，它们最终会带来下一代智能，以及建立在其上的产品。",

        "shift.h.why": "关于我们为什么这样做",
        "shift.p.why1": "在这个领域里，追逐榜单、发布模型、优化关注度，都是很诱人的。我们做过其中一些。但关注度不等于进步。真正的进步，来自提出别人还没有提出的问题 —— 并且愿意花数年时间去寻找答案。",
        "shift.p.why2": "这就是我们选择做的事。",
        "shift.p.why3": "我们是一个小团队。我们没有无限的资源。但我们有一样重要的东西：选择自己道路的自由，以及走下去的耐心。",
        "shift.p.thanks": "感谢你与我们同行。",


        /* ── Products page ─────────────────────────────────────── */
        "prod.sigma": "展示 GTC 系列模型的对话式网站。可直接使用，也可登录以保留历史。",
        "prod.guardian": "AI 安全模型系列：GTC-Guard-0 轻量文本分类器，用于内容审核。",
        "prod.gtc": "Generative Trained Core 家族：GTC-1、GTC-2、GTC-2.5 与 GTC-2.5V（视觉语言）。现已进入维护模式。",
        "prod.tfmf": "我们的后训练模型线，通过开发者平台提供服务。TFMF 按代际演进，而不是从零重造。",

        /* ── Research page ─────────────────────────────────────── */
        "res.shift.desc": "GTC 进入维护模式；我们的模型工作由 TFMF 延续，核心精力转向长期基础研究。",
        "res.tfmf.desc": "基于成熟开源基础的后训练模型线。通过开发者平台交付，按代际演进：TFMF、TFMF 2、TFMF 3。",
        "res.gtc25.desc": "4 亿参数、可用于生产的基座模型，以及轻量的 6400 万参数开源版本。验证了从数据到部署的完整训练链路。",
        "res.gtc25o.desc": "GTC 家族首个真正的多模态模型。视觉与音频编码器配合 0.1B 主干，支持图像描述、VQA、音频理解与跨模态推理。",
        "res.gtc25v.desc": "TAI Research 首个视觉语言模型。6400 万参数，视觉编码器加纯解码主干：图像描述、VQA 与文字识别。",
        "res.gtc25p.desc": "首个对话式基座模型。6400 万参数，基于 MiniMind 构建，展示对话、知识检索与代码生成能力。",
        "res.guard.desc": "轻量文本安全分类器，TAI Guardian 系列的首个模型，为 AI 对齐与内容安全而构建。",

        /* ── Leadership page ───────────────────────────────────── */


        /* ── Leadership page ───────────────────────────────────── */
        "lead.name0": "李天祎",
        "lead.role0": "创始人兼首席执行官（CEO）",
        "lead.bio0": "主导 TAI Research 的整体愿景与战略。负责长期基础研究，并推动公司的技术方向。",
        "lead.name1": "王正明",
        "lead.role1": "首席技术官（CTO）",
        "lead.bio1": "主导技术开发与工程执行。负责长期基础研究，以及支撑所有 TAI 项目的技术基础设施。",
        "lead.name2": "杨元硕",
        "lead.role2": "首席研究官（CRO）",
        "lead.bio2": "主导研究战略与模型开发。负责长期基础研究，包括模型训练、数据集处理与 GTC 系列。",
        "lead.name3": "陆昱",
        "lead.role3": "首席产品官（CPO）",
        "lead.bio3": "主导产品开发与设计，将研究成果转化为可用的产品与平台。",
        "lead.name4": "段咏成",
        "lead.role4": "人力资源",
        "lead.bio4": "主导团队建设、人才招聘与组织发展。",
        "lead.name5": "王效一",
        "lead.role5": "软件工程副总裁",
        "lead.bio5": "主导软件架构、开发规范与技术治理。",

        /* ── News list entries ─────────────────────────────────── */
        "news.shift.title": "一次战略调整：从模型迭代，到基础研究",
        "news.shift.desc": "GTC 进入维护模式。我们的模型工作将由 TFMF 延续，核心精力转向长期基础研究。",
        "news.n0.title": "🚀 GTC-2.5 与 GTC-2.5 mini 发布 —— 基础已定",
        "news.n0.desc": "我们很高兴发布 GTC-2.5 —— 目前最成熟、可用于生产的基座模型，以及面向社区的轻量开源版本 GTC-2.5 mini。",
        "news.n1.title": "🔄 GTC-2.5o 预览 —— 以全模态理解拓展边界",
        "news.n1.desc": "GTC 家族首个真正的多模态成员，在统一模型中整合文本、图像与音频理解。",
        "news.n2.title": "🖼️ GTC-2.5V 预览发布 —— TAI Research 首个视觉语言基座模型",
        "news.n2.desc": "我们的首个视觉语言模型，让模型能够看懂图像。",
        "news.n3.title": "🚀 GTC-2.5 预览发布 —— TAI Research 首个对话式基座模型",
        "news.n3.desc": "我们的首个对话式基座模型，也是后续 GTC-2.5 正式版的基础。",
        "news.n4.title": "🔥 GTC-Guard-0 发布 —— TAI Guardian 首个安全模型",
        "news.n4.desc": "TAI Guardian 系列的首个模型，一个轻量的文本安全分类器。",
        "news.n5.title": "Introducing Sigma！",
        "news.n5.desc": "经过一段休整，我们回来了。TAI Sigma Chat 更名为 Sigma。",
        "news.n6.title": "ESFT GTC-2 开源",
        "news.n6.desc": "沉寂一段时间后回归。权重与仓库已发布。",
        "news.n7.title": "Introducing Sigma Gobang 2！",
        "news.n7.desc": "上一版 Turbo 太慢，于是我们做了 Sigma Gobang 2。",
        "news.n8.title": "Introducing ESFT GTC-2！",
        "news.n8.desc": "基于 GTC-2 的早期监督微调版本，对话表现更好。",
        "news.n9.title": "Sigma Gobang Turbo 上线",
        "news.n9.desc": "改进了 Sigma 五子棋的算法，推出 Turbo 版本。",
        "news.n10.title": "Sigma 五子棋上线",
        "news.n10.desc": "现在可以在线玩 Sigma 五子棋了。",
        "news.n11.title": "面向开发者新增两个模型：GTC-2 Large mini 与 GTC-2 Large",
        "news.n11.desc": "可在 Hugging Face 下载这两个模型。",
        "news.n12.title": "TAI Sigma Chat 支持账号登录与对话记录",
        "news.n12.desc": "无需账号即可自由体验，也可以注册登录以保存对话。",
        "news.n13.title": "GTC-2 Large 基座模型发布",
        "news.n13.desc": "权重与仓库已发布，演示站开放公测。",
        "news.n14.title": "多模型切换上线",
        "news.n14.desc": "现在可以选择不同模型分别体验。",
        "news.n15.title": "Introducing TAI Sigma Chat！",
        "news.n15.desc": "立即开始使用我们的模型。",
    },

    /* Page titles, which have no element to carry a data-i18n attribute. */
    titles: {
        en: {
            "index": "TAI Research — Building the Future of Intelligence",
            "news": "News — TAI Research",
            "products": "Products — TAI Research",
            "research": "Research — TAI Research",
            "leadership": "Leadership — TAI Research",
            "shift": "A Strategic Shift — TAI Research",
            "gtc25": "GTC-2.5 — TAI Research",
            "gtc25o": "GTC-2.5o — TAI Research",
            "gtc25p": "GTC-2.5 Preview — TAI Research",
            "gtc25v": "GTC-2.5V Preview — TAI Research",
            "gtcseries": "GTC Series — TAI Research"
        },
        zh: {
            "index": "TAI Research — 构建智能的未来",
            "news": "动态 — TAI Research",
            "products": "产品 — TAI Research",
            "research": "研究 — TAI Research",
            "leadership": "领导层 — TAI Research",
            "shift": "一次战略调整 — TAI Research",
            "gtc25": "GTC-2.5 — TAI Research",
            "gtc25o": "GTC-2.5o — TAI Research",
            "gtc25p": "GTC-2.5 预览 — TAI Research",
            "gtc25v": "GTC-2.5V 预览 — TAI Research",
            "gtcseries": "GTC 系列 — TAI Research"
        }
    }
};
