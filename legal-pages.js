(() => {
  const options = document.querySelectorAll("[data-lang-option]");
  const query = new URLSearchParams(window.location.search).get("lang");
  let saved = null;
  try { saved = window.localStorage.getItem("xops-language"); } catch {}
  const lang = ["es", "en"].includes(query) ? query : (["es", "en"].includes(saved) ? saved : (navigator.language?.startsWith("en") ? "en" : "es"));
  function updateLanguage(value) {
    document.documentElement.lang = value;
    options.forEach((option) => {
      const active = option.dataset.langOption === value;
      option.dataset.active = String(active);
      option.setAttribute("aria-pressed", String(active));
    });
    try { window.localStorage.setItem("xops-language", value); } catch {}
  }
  options.forEach((option) => option.addEventListener("click", () => updateLanguage(option.dataset.langOption)));
  updateLanguage(lang);
})();
