/* =========================================================================
   "THE FEATURE" — behavior. Vanilla JS, no build. Accessible + RTL-aware.
   Theme · EN/ع(RTL) · copy-email · nav state · orbit spin · light parallax.
   ========================================================================= */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var yearEl = $("#year"); if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Toast ---------- */
  var toastEl = $("#toast"), toastT;
  function toast(msg) { if (!toastEl) return; toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 2200); }

  /* ---------- Copy email ---------- */
  var EMAIL = "yasserwork123@gmail.com";
  function copyEmail() {
    var done = function () { toast(t("toast.copied") + " " + EMAIL); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done).catch(fb); else fb();
    function fb() { try { var ta = document.createElement("textarea"); ta.value = EMAIL; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); done(); } catch (e) { window.location.href = "mailto:" + EMAIL; } }
  }
  var cb = $("#copy-email"); if (cb) cb.addEventListener("click", copyEmail);

  /* ---------- Theme ---------- */
  function theme() { return root.getAttribute("data-theme") || "light"; }
  function setTheme(v) { root.setAttribute("data-theme", v); try { localStorage.setItem("cp-theme", v); } catch (e) {} $("#toggle-theme").setAttribute("aria-pressed", String(v === "dark")); }
  $("#toggle-theme").addEventListener("click", function () { setTheme(theme() === "dark" ? "light" : "dark"); });
  $("#toggle-theme").setAttribute("aria-pressed", String(theme() === "dark"));

  /* ---------- i18n ---------- */
  var AR = {
    "skip": "تخطَّ إلى المحتوى",
    "nav.work": "الأعمال", "nav.numbers": "الأرقام", "nav.story": "القصة", "nav.exp": "الخبرات", "nav.cta": "وظّفني", "nav.contact": "تواصل",
    "folio.left": "العدد الخاص — ياسر أحمد رأفت", "folio.mid": "العدد ٠١", "folio.right": "القاهرة · حُدّث ٢٠٢٦",
    "cover.hello": "أهلًا — أنا", "cover.r1": "مهندس ذكاء اصطناعي أول", "cover.r2": "مهندس أنظمة", "cover.r3": "فل-ستاك",
    "cover.aside": "أبني الأجزاء الصعبة من <b>البرمجيات المستقلّة</b> — وأُثبِتها حيّة، من الطرف إلى الطرف.",
    "cover.resume": "حمّل السيرة", "cover.work": "شاهد الأعمال", "cover.hint": "صورتك ← assets/yasser.jpg",
    "work.title": "المقالات الرئيسية", "work.sub": "أنظمة صُمّمت وأُطلقت في الإنتاج — مرويّة كما تفعل مجلة.",
    "cf.cap": "شكل ٠١ — وقت تشغيل الوكيل", "cf.meta": "المؤسّس وكبير المهندسين · 2023 ← الآن",
    "cf.lede": "منصّة تطوير وكيلة: استورد أي مستودع Git ويقوم وكيل LLM مستقل بقراءته وتعديله وتشغيله وإطلاقه داخل صناديق Docker معزولة — ضمن منظومة سوق ونظام تعلّم ومدفوعات ليُشارَك العمل ويُباع ويُدرَّس ويُفوَّض.",
    "cf.pull": "الوكيل يملك كل قرار؛ والخلفية مجرد مُنفِّذ بدائي لا يذكر لغةً ولا إطارًا ولا مسار ملف.",
    "cf.more": "+ MCP · pgvector · SSE · OpenRouter", "cf.expand": "اقرأ المعمارية",
    "pt.cap": "شكل ٠٢ — تدريب النماذج الرائدة", "pt.meta": "Alignerr · Outlier / Scale AI · 2024 ← الآن", "pt.title": "تدريب النماذج الرائدة (post-training)",
    "pt.lede": "قُدتُ حملات RLHF وDPO وSFT واسعة عبر أبرز النماذج الرائدة، وتدريبًا لاحقًا موجّهًا لضبط Claude Code — الاستدلال متعدد الخطوات وموثوقية الأدوات وسياق المستودع. أدرتُ أكثر من 2000 مساهم خبير، وضبط fast-apply لـ Cursor، ونموذج r1-1776 من Perplexity، وحملات SWE-bench Verified / SEAL.",
    "pt.pull": "حكم المهندسين الكبار، مُحوَّلًا إلى بيانات تدريب عالية الإشارة للنماذج التي يستخدمها الجميع.", "pt.more": "RLHF · DPO · SFT · SWE-bench · SEAL",
    "cl.cap": "شكل ٠٣ — منصّة فورية", "cl.meta": "مهندس فل-ستاك · 2025 ← 2026", "cl.title": "Clove — منصّة مطاعم",
    "cl.lede": "منصّة إنتاجية كاملة على Render مع GitHub Actions CI/CD: محادثة فورية Socket.io (محفوظة بالكامل)، محرك ولاء محفّز، لوحة إدارة، تتبّع GPS حيّ، ووصول بيانات آمن ومتزامن.", "cl.more": "Zustand · MySQL · Express",
    "num.title": "الإثباتات", "num.sub": "من أعمال مُطلَقة وحملات نماذج رائدة — مقيسة لا مُقدَّرة.",
    "n.1": "أكثر من 2000 مساهم خبير قُدتُهم عبر حملات RLHF / DPO / SFT",
    "n.2": "تسريع استدلال في نموذج fast-apply من Cursor", "n.2c": "أكثر من 1000 رمز/ث · تفوّق على GPT-4 / 4o",
    "n.3": "أكثر من 40 ألف موجّه تفضيلي متعدد اللغات لـ r1-1776", "n.3c": "100% غير خاضع للرقابة مقابل 85% · مع حفظ النتائج",
    "n.4": "تحسين دقة المهام من SFT على SWE-bench Verified / SEAL", "n.4c": "−40% زمن المعالجة · −35% عيوب التوسيم",
    "n.5": "نسبة إنجاز عبر أكثر من 50 طالبًا دُرِّبوا", "n.6": "4 عائلات من النماذج الرائدة", "n.6c": "GPT-4o/4.5 · Claude 3.5/4 · Gemini 2.x · Llama 3/4",
    "story.title": "مهندس يُطلق العمل كاملًا",
    "story.p1": "منذ ثلاث سنوات أبني الأجزاء التي يتجنّبها الأغلب في البرمجيات المستقلّة — أنظمة تشغيل وكيلة سيادية، وتنسيق صناديق معزولة، وطبقات استرجاع وذاكرة، ومنظومة المدفوعات حولها.",
    "story.p2": "وإلى جانب ذلك، قُدتُ التدريب اللاحق الذي يجعل النماذج الرائدة موثوقة في هذا العمل. أهتمّ بأنظمة صادقة عن حالتها.",
    "story.note": "— وألتزم بقاعدة واحدة.", "story.quote": "لا شيء يكتمل حتى يُثبَت حيًّا، من الطرف إلى الطرف.",
    "f.1": "المقر", "f.2": "التعليم", "f.2v": "بكالوريوس هندسة حاسبات", "f.3": "التركيز", "f.3v": "الأنظمة الوكيلة · التدريب اللاحق", "f.4": "أيضًا", "f.4v": "معتمد Redis · ICPC ٢٠٢٢",
    "exp.title": "السجل المهني",
    "e1.r": "المؤسّس وكبير المهندسين", "e1.n": "بنيتُ وأطلقتُ منصّة وكيلة حيّة من الطرف إلى الطرف — التشغيل والصناديق والاسترجاع والذاكرة وMCP والتجارة.",
    "e2.r": "مهندس ذكاء — تقييم رائد وتدريب لاحق", "e2.n": "تدريب لاحق لضبط Claude Code؛ تصميم معايير وحلقات تفضيل للمختبرات الرائدة.",
    "e3.r": "قائد التدريب اللاحق لنماذج اللغة", "e3.n": "قُدتُ أكثر من 2000 مساهم في RLHF/DPO/SFT عبر GPT وClaude وGemini وLlama؛ حملات Cursor وPerplexity وSWE-bench.",
    "e4.r": "مهندس برمجيات فل-ستاك", "e4.n": "أطلقتُ منصّة إنتاجية كاملة: محادثة فورية، محرك ولاء، لوحة إدارة، وتتبّع GPS حيّ.",
    "e5.r": "مدرّب هندسة برمجيات", "e5.n": "درّبتُ أكثر من 50 طالبًا في Python وJavaScript؛ بنيتُ تصحيحًا آليًا (+30% كفاءة، 95% إنجاز).",
    "e6.r": "بكالوريوس هندسة حاسبات",
    "folio.back": "الغلاف الأخير — تواصل معي", "contact.title": "لنصنع شيئًا يستحقّ الإطلاق.",
    "contact.sub": "أتولّى عددًا محدودًا من المشاريع عالية الأثر — أنظمة وكيلة، وتدريب لاحق، وتطوير فل-ستاك إنتاجي. إن كان هذا يناسبك، تواصل معي. أردّ خلال يوم.",
    "contact.copy": "انسخ البريد", "contact.resume": "حمّل السيرة",
    "toast.copied": "نُسخ:", "toast.lang": "تم التبديل إلى العربية"
  };
  var EN_EXTRA = { "toast.copied": "Copied", "toast.lang": "Switched to English" };
  function t(k) { if (root.lang === "ar" && AR[k] != null) return AR[k]; if (EN_EXTRA[k] != null) return EN_EXTRA[k]; return k; }
  var origText = {}, origHTML = {};
  $$("[data-i18n]").forEach(function (el) { origText[el.getAttribute("data-i18n")] = el.textContent; });
  $$("[data-i18n-html]").forEach(function (el) { origHTML[el.getAttribute("data-i18n-html")] = el.innerHTML; });
  function applyLang(lang) {
    var ar = lang === "ar";
    root.lang = ar ? "ar" : "en"; root.dir = ar ? "rtl" : "ltr";
    try { localStorage.setItem("cp-lang", lang); } catch (e) {}
    $("[data-lang-label]").textContent = ar ? "ع" : "EN";
    $$("[data-i18n]").forEach(function (el) { var k = el.getAttribute("data-i18n"); el.textContent = ar ? (AR[k] != null ? AR[k] : origText[k]) : origText[k]; });
    $$("[data-i18n-html]").forEach(function (el) { var k = el.getAttribute("data-i18n-html"); el.innerHTML = ar ? (AR[k] != null ? AR[k] : origHTML[k]) : origHTML[k]; });
  }
  $("#toggle-lang").addEventListener("click", function () { var next = root.lang === "ar" ? "en" : "ar"; applyLang(next); toast(t("toast.lang")); });
  (function () { var l = "en"; try { l = localStorage.getItem("cp-lang") || "en"; } catch (e) {} if (l === "ar") applyLang("ar"); })();

  /* ---------- Nav ---------- */
  var mast = $("#mast");
  function onScroll() { mast.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  var navLinks = $$(".mast nav a");
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) navLinks.forEach(function (a) { a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)); }); }); }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Smooth scroll ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { var id = a.getAttribute("href"); if (id.length > 1) { var el = document.querySelector(id); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); history.replaceState(null, "", id); } } });
  });

  /* ---------- Light parallax on the portrait ---------- */
  if (!reduce) {
    var media = $(".cover-media"); var ticking = false;
    if (media) window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { var y = Math.min(window.scrollY, 700); media.style.transform = "translateY(" + (y * -0.04) + "px)"; ticking = false; });
    }, { passive: true });
  }

  /* ---------- Keyboard: E copy, T theme ---------- */
  document.addEventListener("keydown", function (e) {
    var el = e.target; if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "e" || e.key === "E") copyEmail(); else if (e.key === "t" || e.key === "T") setTheme(theme() === "dark" ? "light" : "dark");
  });
})();
