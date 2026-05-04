const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.security": "Seguridad IA",
    "nav.method": "Método",
    "nav.cases": "Casos de uso",
    "nav.contact": "Contacto",
    "cta.call": "Agenda una llamada",
    "hero.eyebrow": "DevSecOps · Cloud · Kubernetes · Agentic AI · Secure RAG · LLMOps · MLOps",
    "hero.title": "Secure Delivery & Agentic AI Operations. <span>Secure by Design.</span>",
    "hero.text": "Mantenemos el core de X-Ops: DevSecOps, cloud, Kubernetes, pipelines seguros, automatización y formación técnica. Lo ampliamos con agentificación empresarial, agentes IA seguros, RAG gobernado, LLMOps, MLOps, AIOps y seguridad de IA.",
    "cta.diagnostic": "Solicitar diagnóstico",
    "cta.services": "Ver servicios",
    "dashboard.security": "Seguridad",
    "dashboard.agents": "Agentes seguros",
    "dashboard.infrastructure": "Infraestructura",
    "dashboard.monitoring": "monitorización",
    "pill.automation": "⚡ Automatización segura",
    "pill.training": "🎓 Formación técnica",
    "pill.agents": "◆ Agentes IA seguros",
    "pill.rag": "⌕ RAG gobernado",
    "pill.llmops": "⟳ LLMOps & MLOps",
    "problem.eyebrow": "El problema",
    "problem.title": "La deuda operativa ahora también incluye IA.",
    "problem.delivery.title": "Delivery frágil",
    "problem.delivery.text": "Pipelines sin controles, secretos expuestos, contenedores inseguros, cloud mal gobernado e infraestructura difícil de escalar.",
    "problem.ai.title": "IA sin arquitectura",
    "problem.ai.text": "Chatbots, prompts y agentes desconectados de la operación real, sin observabilidad, versionado ni gobierno.",
    "problem.rag.title": "RAG y agentes sin seguridad",
    "problem.rag.text": "Bases vectoriales con documentos sensibles, agentes con permisos excesivos y riesgo de prompt injection o fuga de datos.",
    "services.eyebrow": "Servicios",
    "services.title": "El stack completo: delivery seguro, cloud, automatización e IA agentificada.",
    "services.audit.title": "Auditoría DevSecOps",
    "services.audit.text": "Detectamos riesgos en CI/CD, dependencias, secretos, contenedores, IaC, cloud e infraestructura.",
    "services.pipelines.title": "Pipelines seguros",
    "services.pipelines.text": "Diseñamos flujos CI/CD con quality gates, SAST, SCA, IaC scanning, container scanning, SBOM y firma de artefactos.",
    "services.cloud.title": "Cloud & Kubernetes",
    "services.cloud.text": "Arquitectura, hardening, despliegue, observabilidad y operación de entornos cloud, Kubernetes e infraestructura como código.",
    "services.automation.title": "Automatización segura",
    "services.automation.text": "Automatizamos workflows, runbooks, alertas, integraciones, reporting y procesos técnicos con control y trazabilidad.",
    "services.training.title": "Training para equipos",
    "services.training.text": "Workshops prácticos en DevSecOps, cloud, Kubernetes, seguridad, automatización, IA aplicada, LLMOps y MLOps.",
    "services.agentic.title": "Agentificación empresarial",
    "services.agentic.text": "Diseñamos agentes IA, copilotos internos y workflows multiagente conectados a procesos, datos, APIs y herramientas internas.",
    "services.secure_agents.title": "Secure AI Agents",
    "services.secure_agents.text": "Securizamos agentes IA con threat modeling, control de permisos, sandboxing, guardrails, auditoría y trazabilidad.",
    "services.rag.title": "Secure RAG",
    "services.rag.text": "Diseñamos RAG empresarial con control de acceso, clasificación documental, trazabilidad de fuentes y protección contra fugas de datos.",
    "services.llmops.title": "LLMOps",
    "services.llmops.text": "Operamos flujos LLM con evaluación, observabilidad, prompt registry, guardrails, testing, control de costes y red teaming.",
    "services.mlops.title": "MLOps & Model Governance",
    "services.mlops.text": "Pipelines ML, model registry, dataset versioning, drift monitoring, despliegue seguro y gobierno del ciclo de vida del modelo.",
    "services.ai_security.title": "AI Security & Governance",
    "services.ai_security.text": "Auditorías de IA, LLM red teaming, políticas internas, evaluación de proveedores, seguridad de embeddings y gobierno de riesgos.",
    "services.strategy.title": "Estrategia tecnológica",
    "services.strategy.text": "Roadmaps, arquitectura empresarial, priorización de casos de uso, CTO advisory y planes de implementación con entregables claros.",
    "security.eyebrow": "Seguridad IA + SecDevOps",
    "security.title": "Securizamos el delivery tradicional y la nueva superficie de ataque de la IA.",
    "security.layer1.title": "Delivery Layer",
    "security.layer1.text": "Controles en código, dependencias, secretos, contenedores, IaC, artefactos, CI/CD y despliegues.",
    "security.layer2.title": "Platform Layer",
    "security.layer2.text": "Hardening cloud, Kubernetes, observabilidad, redes, identidades, permisos, logging y respuesta operativa.",
    "security.layer3.title": "Agent & RAG Layer",
    "security.layer3.text": "Tool calling seguro, sandboxing, permisos mínimos, clasificación documental, DLP, trazabilidad y defensa contra prompt injection.",
    "security.layer4.title": "LLM & Model Layer",
    "security.layer4.text": "Guardrails, evaluación continua, red teaming, prompt registry, model registry, drift monitoring y gobierno del ciclo de vida.",
    "method.eyebrow": "Método",
    "method.title": "X-Ops SecureOps & Agentic Framework.",
    "method.step1.title": "Diagnóstico",
    "method.step1.text": "Analizamos delivery, cloud, seguridad, automatización, datos, IA y procesos para detectar brechas y oportunidades.",
    "method.step2.title": "Arquitectura",
    "method.step2.text": "Diseñamos la arquitectura DevSecOps, cloud, agentic AI, RAG, LLMOps, MLOps, integración y gobierno.",
    "method.step3.title": "Seguridad",
    "method.step3.text": "Aplicamos threat modeling, hardening, permisos, guardrails, quality gates, trazabilidad y políticas de seguridad.",
    "method.step4.title": "Implementación",
    "method.step4.text": "Construimos pipelines, infraestructura, agentes, conectores, automatizaciones, dashboards y flujos LLM.",
    "method.step5.title": "Operación",
    "method.step5.text": "Desplegamos, observamos y medimos seguridad, calidad, costes, latencia, rendimiento y salud operativa.",
    "method.step6.title": "Evolución",
    "method.step6.text": "Transferimos conocimiento e iteramos plataformas, agentes, prompts, datasets, modelos, workflows y controles.",
    "results.eyebrow": "Resultados",
    "results.title": "Resultados que generamos.",
    "results.risk.title": "Menos riesgo",
    "results.risk.text": "Menos vulnerabilidades, mejores controles, agentes más seguros, RAG gobernado y cumplimiento continuo.",
    "results.speed.title": "Más velocidad",
    "results.speed.text": "Pipelines más rápidos, automatización real, agentes operativos y procesos menos manuales.",
    "results.control.title": "Más control",
    "results.control.text": "Observabilidad, evaluación, versionado, trazabilidad y gobierno para delivery, cloud, IA, LLMs y modelos ML.",
    "bottom.title": "¿Listo para evolucionar tus operaciones sin perder lo que ya funciona?",
    "bottom.text": "Empezamos con un diagnóstico de DevSecOps, cloud, automatización e IA para identificar riesgos, quick wins y una hoja de ruta realista.",
    "bottom.cta": "Hablar con X-Ops Consulting",
    "footer.privacy": "Privacidad"
  },
  en: {
    "nav.services": "Services",
    "nav.security": "AI Security",
    "nav.method": "Method",
    "nav.cases": "Use cases",
    "nav.contact": "Contact",
    "cta.call": "Book a call",
    "hero.eyebrow": "DevSecOps · Cloud · Kubernetes · Agentic AI · Secure RAG · LLMOps · MLOps",
    "hero.title": "Secure Delivery & Agentic AI Operations. <span>Secure by Design.</span>",
    "hero.text": "We keep the X-Ops core: DevSecOps, cloud, Kubernetes, secure pipelines, automation, and technical training. We extend it with enterprise agentification, secure AI agents, governed RAG, LLMOps, MLOps, AIOps, and AI security.",
    "cta.diagnostic": "Request diagnostic",
    "cta.services": "View services",
    "dashboard.security": "Security",
    "dashboard.agents": "Secure agents",
    "dashboard.infrastructure": "Infrastructure",
    "dashboard.monitoring": "monitoring",
    "pill.automation": "⚡ Secure automation",
    "pill.training": "🎓 Technical training",
    "pill.agents": "◆ Secure AI agents",
    "pill.rag": "⌕ Governed RAG",
    "pill.llmops": "⟳ LLMOps & MLOps",
    "problem.eyebrow": "The problem",
    "problem.title": "Operational debt now includes AI.",
    "problem.delivery.title": "Fragile delivery",
    "problem.delivery.text": "Pipelines without controls, exposed secrets, insecure containers, poorly governed cloud, and infrastructure that is hard to scale.",
    "problem.ai.title": "AI without architecture",
    "problem.ai.text": "Chatbots, prompts, and agents disconnected from real operations, without observability, versioning, or governance.",
    "problem.rag.title": "RAG and agents without security",
    "problem.rag.text": "Vector stores with sensitive documents, over-permissioned agents, and risk of prompt injection or data leakage.",
    "services.eyebrow": "Services",
    "services.title": "The full stack: secure delivery, cloud, automation, and agentic AI.",
    "services.audit.title": "DevSecOps Audit",
    "services.audit.text": "We detect risks across CI/CD, dependencies, secrets, containers, IaC, cloud, and infrastructure.",
    "services.pipelines.title": "Secure pipelines",
    "services.pipelines.text": "We design CI/CD flows with quality gates, SAST, SCA, IaC scanning, container scanning, SBOMs, and artifact signing.",
    "services.cloud.title": "Cloud & Kubernetes",
    "services.cloud.text": "Architecture, hardening, deployment, observability, and operation of cloud, Kubernetes, and infrastructure-as-code environments.",
    "services.automation.title": "Secure automation",
    "services.automation.text": "We automate workflows, runbooks, alerts, integrations, reporting, and technical processes with control and traceability.",
    "services.training.title": "Team training",
    "services.training.text": "Hands-on workshops in DevSecOps, cloud, Kubernetes, security, automation, applied AI, LLMOps, and MLOps.",
    "services.agentic.title": "Enterprise agentification",
    "services.agentic.text": "We design AI agents, internal copilots, and multi-agent workflows connected to processes, data, APIs, and internal tools.",
    "services.secure_agents.title": "Secure AI Agents",
    "services.secure_agents.text": "We secure AI agents with threat modeling, permission control, sandboxing, guardrails, auditability, and traceability.",
    "services.rag.title": "Secure RAG",
    "services.rag.text": "We design enterprise RAG with access control, document classification, source traceability, and data leakage protection.",
    "services.llmops.title": "LLMOps",
    "services.llmops.text": "We operate LLM flows with evaluation, observability, prompt registry, guardrails, testing, cost control, and red teaming.",
    "services.mlops.title": "MLOps & Model Governance",
    "services.mlops.text": "ML pipelines, model registry, dataset versioning, drift monitoring, secure deployment, and model lifecycle governance.",
    "services.ai_security.title": "AI Security & Governance",
    "services.ai_security.text": "AI audits, LLM red teaming, internal policies, vendor assessment, embedding security, and risk governance.",
    "services.strategy.title": "Technology strategy",
    "services.strategy.text": "Roadmaps, enterprise architecture, use-case prioritization, CTO advisory, and implementation plans with clear deliverables.",
    "security.eyebrow": "AI Security + SecDevOps",
    "security.title": "We secure traditional delivery and the new AI attack surface.",
    "security.layer1.title": "Delivery Layer",
    "security.layer1.text": "Controls across code, dependencies, secrets, containers, IaC, artifacts, CI/CD, and deployments.",
    "security.layer2.title": "Platform Layer",
    "security.layer2.text": "Cloud and Kubernetes hardening, observability, networks, identities, permissions, logging, and operational response.",
    "security.layer3.title": "Agent & RAG Layer",
    "security.layer3.text": "Secure tool calling, sandboxing, least privilege, document classification, DLP, traceability, and prompt injection defense.",
    "security.layer4.title": "LLM & Model Layer",
    "security.layer4.text": "Guardrails, continuous evaluation, red teaming, prompt registry, model registry, drift monitoring, and lifecycle governance.",
    "method.eyebrow": "Method",
    "method.title": "X-Ops SecureOps & Agentic Framework.",
    "method.step1.title": "Diagnostic",
    "method.step1.text": "We analyze delivery, cloud, security, automation, data, AI, and processes to identify gaps and opportunities.",
    "method.step2.title": "Architecture",
    "method.step2.text": "We design the DevSecOps, cloud, agentic AI, RAG, LLMOps, MLOps, integration, and governance architecture.",
    "method.step3.title": "Security",
    "method.step3.text": "We apply threat modeling, hardening, permissions, guardrails, quality gates, traceability, and security policies.",
    "method.step4.title": "Implementation",
    "method.step4.text": "We build pipelines, infrastructure, agents, connectors, automations, dashboards, and LLM flows.",
    "method.step5.title": "Operation",
    "method.step5.text": "We deploy, observe, and measure security, quality, cost, latency, performance, and operational health.",
    "method.step6.title": "Evolution",
    "method.step6.text": "We transfer knowledge and iterate platforms, agents, prompts, datasets, models, workflows, and controls.",
    "results.eyebrow": "Results",
    "results.title": "Outcomes we generate.",
    "results.risk.title": "Less risk",
    "results.risk.text": "Fewer vulnerabilities, stronger controls, safer agents, governed RAG, and continuous compliance.",
    "results.speed.title": "More speed",
    "results.speed.text": "Faster pipelines, real automation, operational agents, and fewer manual processes.",
    "results.control.title": "More control",
    "results.control.text": "Observability, evaluation, versioning, traceability, and governance for delivery, cloud, AI, LLMs, and ML models.",
    "bottom.title": "Ready to evolve your operations without losing what already works?",
    "bottom.text": "We start with a DevSecOps, cloud, automation, and AI diagnostic to identify risks, quick wins, and a realistic roadmap.",
    "bottom.cta": "Talk to X-Ops Consulting",
    "footer.privacy": "Privacy"
  }
};

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      return undefined;
    }
  }
};

const languageToggle = document.querySelector(".language-toggle");
const languageOptions = document.querySelectorAll("[data-lang-option]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const setLanguage = (lang) => {
  const normalizedLang = translations[lang] ? lang : "es";
  const dictionary = translations[normalizedLang];

  document.documentElement.lang = normalizedLang;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  languageOptions.forEach((option) => {
    const isActive = option.dataset.langOption === normalizedLang;
    option.dataset.active = String(isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  languageToggle?.setAttribute("aria-label", normalizedLang === "es" ? "Selector de idioma" : "Language selector");
  safeStorage.set("xops-language", normalizedLang);
};

const chooseLanguage = (event) => {
  const option = event.currentTarget;
  const lang = option?.dataset?.langOption;
  if (!lang) return;
  event.preventDefault();
  event.stopPropagation();
  setLanguage(lang);
};

languageOptions.forEach((option) => {
  option.addEventListener("click", chooseLanguage);
  option.addEventListener("pointerup", chooseLanguage);
  option.addEventListener("touchend", chooseLanguage, { passive: false });
  option.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      chooseLanguage(event);
    }
  });
});

const queryLanguage = new URLSearchParams(window.location.search).get("lang");
const storedLanguage = safeStorage.get("xops-language");
const browserLanguage = navigator.language?.startsWith("en") ? "en" : "es";
setLanguage(translations[queryLanguage] ? queryLanguage : storedLanguage || browserLanguage);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
