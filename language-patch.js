(function () {
  var translations = {
    es: {
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
      "results.risk.title": "Menos riesgo",
      "results.risk.text": "Menos vulnerabilidades, mejores controles, agentes más seguros, RAG gobernado y cumplimiento continuo.",
      "results.speed.title": "Más velocidad",
      "results.speed.text": "Pipelines más rápidos, automatización real, agentes operativos y procesos menos manuales.",
      "results.control.title": "Más control",
      "results.control.text": "Observabilidad, evaluación, versionado, trazabilidad y gobierno para delivery, cloud, IA, LLMs y modelos ML."
    },
    en: {
      "services.audit.title": "DevSecOps Audit",
      "services.audit.text": "We detect risks across CI/CD, dependencies, secrets, containers, IaC, cloud and infrastructure.",
      "services.pipelines.title": "Secure pipelines",
      "services.pipelines.text": "We design CI/CD flows with quality gates, SAST, SCA, IaC scanning, container scanning, SBOM and artifact signing.",
      "services.cloud.title": "Cloud & Kubernetes",
      "services.cloud.text": "Architecture, hardening, deployment, observability and operation of cloud, Kubernetes and infrastructure-as-code environments.",
      "services.automation.title": "Secure automation",
      "services.automation.text": "We automate workflows, runbooks, alerts, integrations, reporting and technical processes with control and traceability.",
      "services.training.title": "Team training",
      "services.training.text": "Hands-on workshops in DevSecOps, cloud, Kubernetes, security, automation, applied AI, LLMOps and MLOps.",
      "services.agentic.title": "Enterprise agentification",
      "services.agentic.text": "We design AI agents, internal copilots and multi-agent workflows connected to processes, data, APIs and internal tools.",
      "services.secure_agents.title": "Secure AI Agents",
      "services.secure_agents.text": "We secure AI agents with threat modeling, permission control, sandboxing, guardrails, auditability and traceability.",
      "services.rag.title": "Secure RAG",
      "services.rag.text": "We design enterprise RAG with access control, document classification, source traceability and data leakage protection.",
      "services.llmops.title": "LLMOps",
      "services.llmops.text": "We operate LLM flows with evaluation, observability, prompt registry, guardrails, testing, cost control and red teaming.",
      "services.mlops.title": "MLOps & Model Governance",
      "services.mlops.text": "ML pipelines, model registry, dataset versioning, drift monitoring, secure deployment and model lifecycle governance.",
      "services.ai_security.title": "AI Security & Governance",
      "services.ai_security.text": "AI audits, LLM red teaming, internal policies, vendor assessment, embedding security and risk governance.",
      "services.strategy.title": "Technology strategy",
      "services.strategy.text": "Roadmaps, enterprise architecture, use-case prioritization, CTO advisory and implementation plans with clear deliverables.",
      "method.step1.title": "Diagnostic",
      "method.step1.text": "We analyze delivery, cloud, security, automation, data, AI and processes to identify gaps and opportunities.",
      "method.step2.title": "Architecture",
      "method.step2.text": "We design the DevSecOps, cloud, agentic AI, RAG, LLMOps, MLOps, integration and governance architecture.",
      "method.step3.title": "Security",
      "method.step3.text": "We apply threat modeling, hardening, permissions, guardrails, quality gates, traceability and security policies.",
      "method.step4.title": "Implementation",
      "method.step4.text": "We build pipelines, infrastructure, agents, connectors, automations, dashboards and LLM flows.",
      "method.step5.title": "Operation",
      "method.step5.text": "We deploy, observe and measure security, quality, costs, latency, performance and operational health.",
      "method.step6.title": "Evolution",
      "method.step6.text": "We transfer knowledge and iterate platforms, agents, prompts, datasets, models, workflows and controls.",
      "results.risk.title": "Less risk",
      "results.risk.text": "Fewer vulnerabilities, stronger controls, safer agents, governed RAG and continuous compliance.",
      "results.speed.title": "More speed",
      "results.speed.text": "Faster pipelines, real automation, operational agents and fewer manual processes.",
      "results.control.title": "More control",
      "results.control.text": "Observability, evaluation, versioning, traceability and governance for delivery, cloud, AI, LLMs and ML models."
    }
  };

  function applyPatch(lang) {
    var dictionary = translations[lang] || translations.es;
    Object.keys(dictionary).forEach(function (key) {
      var nodes = document.querySelectorAll('[data-i18n="' + key + '"]');
      nodes.forEach(function (node) {
        node.innerHTML = dictionary[key];
      });
    });
  }

  function currentLang() {
    var docLang = document.documentElement.getAttribute('lang');
    if (docLang === 'en' || docLang === 'es') return docLang;
    try {
      var stored = localStorage.getItem('xops-language');
      if (stored === 'en' || stored === 'es') return stored;
    } catch (error) {}
    return 'es';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () { applyPatch(currentLang()); }, 0);
  });

  document.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('[data-lang-option]') : null;
    if (!button) return;
    var lang = button.getAttribute('data-lang-option') || currentLang();
    setTimeout(function () { applyPatch(lang); }, 0);
  }, false);

  window.xopsLanguagePatch = applyPatch;
}());
