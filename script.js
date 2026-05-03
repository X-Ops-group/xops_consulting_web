const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.method": "Método",
    "nav.cases": "Casos de uso",
    "nav.contact": "Contacto",
    "cta.call": "Agenda una llamada",
    "hero.eyebrow": "DevSecOps · Cloud · Secure Automation",
    "hero.title": "Convierte tu delivery en una operación <span>segura, automatizada y escalable.</span>",
    "hero.text": "Ayudamos a startups, scaleups y equipos técnicos a diseñar e implementar pipelines seguros, automatización confiable e infraestructura preparada para crecer.",
    "cta.diagnostic": "Solicitar diagnóstico",
    "cta.services": "Ver servicios",
    "dashboard.security": "Seguridad",
    "dashboard.deployments": "Despliegues",
    "dashboard.infrastructure": "Infraestructura",
    "dashboard.nodes": "nodos",
    "dashboard.observability": "Observabilidad",
    "dashboard.alerts": "Alertas",
    "pill.training": "🎓 Formación técnica",
    "services.eyebrow": "Servicios",
    "services.title": "Consultoría práctica para operar con seguridad y velocidad.",
    "services.audit.title": "Auditoría DevSecOps",
    "services.audit.text": "Detectamos riesgos en CI/CD, dependencias, secretos, contenedores e infraestructura.",
    "services.pipelines.title": "Pipelines seguros",
    "services.pipelines.text": "Diseñamos e implementamos flujos CI/CD con controles, quality gates y automatización.",
    "services.cloud.title": "Cloud & Kubernetes",
    "services.cloud.text": "Arquitectura, hardening y despliegue de entornos escalables y observables.",
    "services.training.title": "Training para equipos",
    "services.training.text": "Workshops y formación práctica para elevar el nivel operativo y de seguridad.",
    "method.eyebrow": "Método",
    "method.title": "Tres pasos. Sin humo. Con entregables claros.",
    "method.step1.title": "Diagnóstico",
    "method.step1.text": "Analizamos tu operación actual y detectamos brechas, fricción y riesgos.",
    "method.step2.title": "Plan de acción",
    "method.step2.text": "Diseñamos una hoja de ruta priorizada con impacto rápido y sostenible.",
    "method.step3.title": "Implementación",
    "method.step3.text": "Implementamos, automatizamos y transferimos conocimiento al equipo.",
    "results.eyebrow": "Resultados",
    "results.title": "Resultados que generamos.",
    "results.risk.title": "Menos riesgo",
    "results.risk.text": "Menos vulnerabilidades, mejores controles y cumplimiento continuo.",
    "results.speed.title": "Más velocidad",
    "results.speed.text": "Pipelines más rápidos y confiables que aceleran tu time to market.",
    "results.control.title": "Más control",
    "results.control.text": "Observabilidad y automatización para operar con confianza.",
    "bottom.title": "¿Listo para profesionalizar tus operaciones?",
    "bottom.text": "Empezamos con una sesión de diagnóstico y una propuesta clara para avanzar sin humo.",
    "bottom.cta": "Hablar con X-Ops Consulting",
    "footer.privacy": "Privacidad"
  },
  en: {
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.cases": "Use cases",
    "nav.contact": "Contact",
    "cta.call": "Book a call",
    "hero.eyebrow": "DevSecOps · Cloud · Secure Automation",
    "hero.title": "Turn your delivery into a <span>secure, automated, scalable operation.</span>",
    "hero.text": "We help startups, scaleups, and technical teams design and implement secure pipelines, reliable automation, and infrastructure ready to grow.",
    "cta.diagnostic": "Request diagnostic",
    "cta.services": "View services",
    "dashboard.security": "Security",
    "dashboard.deployments": "Deployments",
    "dashboard.infrastructure": "Infrastructure",
    "dashboard.nodes": "nodes",
    "dashboard.observability": "Observability",
    "dashboard.alerts": "Alerts",
    "pill.training": "🎓 Technical training",
    "services.eyebrow": "Services",
    "services.title": "Practical consulting to operate with security and speed.",
    "services.audit.title": "DevSecOps Audit",
    "services.audit.text": "We detect risks across CI/CD, dependencies, secrets, containers, and infrastructure.",
    "services.pipelines.title": "Secure pipelines",
    "services.pipelines.text": "We design and implement CI/CD flows with controls, quality gates, and automation.",
    "services.cloud.title": "Cloud & Kubernetes",
    "services.cloud.text": "Architecture, hardening, and deployment of scalable, observable environments.",
    "services.training.title": "Team training",
    "services.training.text": "Hands-on workshops and training to raise operational and security maturity.",
    "method.eyebrow": "Method",
    "method.title": "Three steps. No fluff. Clear deliverables.",
    "method.step1.title": "Diagnostic",
    "method.step1.text": "We analyze your current operation and identify gaps, friction, and risks.",
    "method.step2.title": "Action plan",
    "method.step2.text": "We design a prioritized roadmap with fast and sustainable impact.",
    "method.step3.title": "Implementation",
    "method.step3.text": "We implement, automate, and transfer knowledge to your team.",
    "results.eyebrow": "Results",
    "results.title": "Outcomes we generate.",
    "results.risk.title": "Less risk",
    "results.risk.text": "Fewer vulnerabilities, stronger controls, and continuous compliance.",
    "results.speed.title": "More speed",
    "results.speed.text": "Faster, more reliable pipelines that accelerate your time to market.",
    "results.control.title": "More control",
    "results.control.text": "Observability and automation to operate with confidence.",
    "bottom.title": "Ready to professionalize your operations?",
    "bottom.text": "We start with a diagnostic session and a clear proposal to move forward without noise.",
    "bottom.cta": "Talk to X-Ops Consulting",
    "footer.privacy": "Privacy"
  }
};

const languageToggle = document.querySelector(".language-toggle");
const languageOptions = document.querySelectorAll("[data-lang-option]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });
  languageOptions.forEach((option) => {
    option.dataset.active = String(option.dataset.langOption === lang);
  });
  localStorage.setItem("xops-language", lang);
};

languageToggle?.addEventListener("click", () => {
  const current = localStorage.getItem("xops-language") || "es";
  setLanguage(current === "es" ? "en" : "es");
});

const preferredLanguage = localStorage.getItem("xops-language") || (navigator.language?.startsWith("en") ? "en" : "es");
setLanguage(preferredLanguage);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
