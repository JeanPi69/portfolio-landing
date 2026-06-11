export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      statusLabel: "System Ready",
      headline: "Frontend Developer building scalable web and mobile applications",
      headlineAccent: "with Angular and Ionic.",
      body: "Frontend Developer with experience building fintech platforms, CRM systems, and mobile applications using Angular, Ionic, TypeScript, and RxJS. Focused on scalable architecture, REST API integrations, and creating performant user experiences for web and mobile environments.",
      ctaProjects: "Explore Projects",
      ctaContact: "Ping Server",
      ctaCV: "Download CV",
      systemStatus: "System Status",
      coreStack: "Core Stack",
      statusItems: [
        { label: "Status",       value: "ONLINE",          highlight: true  },
        { label: "Location",     value: "Remote / Global", highlight: false },
        { label: "Availability", value: "Open to Offers",  highlight: false },
        { label: "Response",     value: "&lt; 24h",        highlight: false },
      ],
    },
    skills: {
      sectionTitle: "Technical Matrix",
      categories: [
        { title: "Frontend Systems"      },
        { title: "Backend Infrastructure" },
        { title: "Tooling"      },
      ],
    },
    experience: {
      sectionTitle: "Execution History",
      jobs: [
        {
          title:       "Frontend Developer",
          company:     "@ Billex",
          period:      "Sep 2023 — PRESENT",
          description: "Developing and maintaining a fintech CRM system with multiple operational modules for internal users.",
          bullets: [
            "Built and improved modules for operations, executives, providers, and accounting workflows.",
            "Reduced average operational processing time from 55 minutes to 35 minutes by optimizing user flows and frontend performance.",
            "Implemented role-based access control and permission systems for different user profiles.",
            "Developed a mobile application using Ionic and Angular for platform users.",
            "Integrated REST APIs with authentication, session handling, and permission validation.",
            "Managed reactive data flows using RxJS.",
            "Provided technical support and continuous improvements based on user feedback."
          ],
        },
        {
          title:       "Mobile Application Developer (Freelance)",
          company:     "@ Dermatology Conference App - Central America",
          period:      "2025",
          description: "Developed a mobile application for an international dermatology conference.",
          bullets:     [
            "Implemented event scheduling and speaker management.",
            "Integrated Google Maps for event location tracking.",
            "Built features for file and photo sharing between users.",
            "Designed a user-friendly mobile experience using Ionic and Angular."
          ],
        },
        {
          title:      "Web Developer (Freelance)",
          company:    "@ Dermatology Conference App - Lima",
          period:     "2025",
          description: "Created a web application for a dermatology conference in Lima, Peru.",
          bullets:    [
            "Built a real-time interactive quiz application (Kahoot-style) for live audience participation.",
            "Created a web platform displaying dynamic photo galleries using API-based content."
          ]
        },
        {
          title:       "General Manager",
          company:     "@ Distribuidora Xavi S.A.C.",
          period:      "2020 — 2022",
          description: "Managed operations of a snack distribution company during the COVID-19 period.",
          bullets:     [
            "Oversaw logistics, suppliers, and daily operations.",
            "Coordinated distribution processes for wholesale markets.",
            "Maintained business continuity during a critical period."
          ]
        },
        {
          "title":       "Frontend Developer Intern",
          "company":     "@ Billex",
          "period":      "2021 - 2023",
          "description": "Started as a frontend intern, contributing to CRM modules and gaining experience in Angular and API integration.",
          "bullets":     []
        }
      ],
    },
    projects: {
      sectionTitle:    "Deployment Output",
      filterLabel:     "QUERY_TAGS:",
      loadMore:        "Load More Projects",
      emptyTitle:      "0 Results Returned",
      emptyBody:       "yielded no architectural constructs within the current repository parameters.",
      resetQuery:      "Reset Query",
      statusLabel:     "STATUS: NULL_SET",
      liveDeploy:               "Live Deploy",
      source:                   "Source",
      privateRepoStatus:        "Repository Status: Private Repository",
      privateRepoMessage:       "This project contains proprietary business logic and client-specific implementations that cannot be publicly disclosed.",
      privateLiveStatus:        "Live Access Restricted",
      privateLiveMessage:       "For security and NDA compliance, the live environment for this system cannot be publicly accessed. Please contact me directly for a private demo.",
      projectList: [
        {
          title:           "Alta Montaña ERP",
          category:        "Enterprise Resource Planning",
          description:     "Business management platform for bicycle sales, workshop operations, inventory, payroll, and financial administration.",
          fullDescription: "Alta Montaña ERP is a comprehensive business management platform developed for a bicycle sales and maintenance company. The system centralizes critical business operations including payroll management, attendance tracking, salary deductions, inventory control, workshop management, sales operations, financial records, and electronic invoicing. The platform was designed to replace disconnected manual processes with a unified solution that improves operational visibility, streamlines workflows, and provides better control across multiple business areas.",
          imageAlt:        "ERP dashboard for bicycle sales, workshop operations, inventory, payroll, and financial management.",
          specs: [
            { title: "Human Resources",    description: "Payroll management, attendance tracking, lateness deductions, and employee administration." },
            { title: "Inventory Control",  description: "Stock management for bicycles, spare parts, and workshop supplies." },
            { title: "Workshop Operations", description: "Service orders, maintenance tracking, and workshop workflow management." },
            { title: "Sales & Billing",    description: "Electronic invoicing, sales receipts, notes of sale, and financial transaction management." },
          ],
          status: "Production",
        },
        {
          title:           "Gestores Empresas",
          category:        "Business Services Platform",
          description:     "Corporate website developed for a business consulting and financial advisory company, focused on service presentation, lead generation, and digital presence.",
          fullDescription: "Gestores Empresas is a corporate website developed for a company specialized in business consulting, financial advisory, accounting services, and tax management. The platform was designed to strengthen the company's digital presence, clearly communicate its services, and improve customer acquisition through a modern and responsive user experience. The project focused on delivering a professional corporate identity while optimizing accessibility, responsiveness, and conversion-oriented navigation.",
          imageAlt:        "Corporate website for business consulting, accounting, and financial advisory services.",
          specs: [
            { title: "Corporate Presence",    description: "Professional digital platform designed to showcase business and financial advisory services." },
            { title: "Lead Generation",       description: "Structured service presentation and contact flows focused on customer acquisition." },
            { title: "Responsive Experience", description: "Optimized user experience across desktop, tablet, and mobile devices." },
            { title: "SEO Foundation",        description: "Built with search engine visibility and accessibility best practices in mind." },
          ],
          status: "Production",
        },
        {
          title:           "Angular CRM Platform",
          category:        "CRM Platform",
          description:     "Modern CRM application built with Angular 20, featuring authentication, role-based access control, Kanban workflows, dashboards, and reactive state management.",
          fullDescription: "Mini Personal CRM is a portfolio project developed to showcase modern Angular architecture and frontend engineering practices. The application centralizes customer management, sales tracking, task organization, and user administration within a responsive business-oriented interface. The project focuses on scalability, maintainability, and modern Angular patterns, including standalone components, signals, lazy loading, role-based authentication, and reactive data flows using RxJS.",
          imageAlt:        "Angular CRM dashboard with contacts, Kanban sales pipeline, analytics, authentication, and role-based access control.",
          specs: [
            { title: "Authentication",       description: "JWT authentication, route guards, HTTP interceptors, and role-based access control." },
            { title: "CRM Workflows",        description: "Contacts, deals, tasks, Kanban pipelines, and business workflow management." },
            { title: "Modern Angular",       description: "Built with Angular 20 using Signals, Standalone Components, OnPush strategy, and lazy loading." },
            { title: "Analytics Dashboard",  description: "Interactive charts and business metrics using Chart.js and reactive data flows." },
          ],
          status: "Live Demo",
        },
      ],
    },
    explorations: {
      sectionTitle: "Current Explorations",
      items: [
        {
          title: "React & Next.js",
          description: "Learning modern React ecosystem to expand opportunities in global frontend roles.",
        },
        {
          title: "Frontend Testing",
          description: "Learning Jest and Cypress to improve application reliability, maintainability, and deployment confidence.",
        },
        {
          title: "AI-Powered Applications",
          description: "Exploring LLM integrations, AI agents, and intelligent workflows for modern business applications.",
        },
        {
          title: "Software Architecture",
          description: "Improving application scalability through modular design, clean architecture, and maintainable frontend patterns.",
        },
      ],
    },
    contact: {
      sectionTitle: "Establish Connection",
      subtitle:     "System ready to receive input. Reach out for technical collaborations, architecture consultation, or general inquiries.",
      labelName:    "Identity",
      labelEmail:   "Return Address",
      labelMessage: "Payload",
      placeholderName:    "ENTER_NAME",
      placeholderEmail:   "ENTER_EMAIL",
      placeholderMessage: "ENTER_MESSAGE_DATA",
      submitIdle:         "Transmit Data",
      submitSending:      "Transmitting...",
      successTitle:       "Message Transmitted Successfully",
      successSubtitle:    "Packet received and acknowledged by host.",
      successLines: [
        "Handshake initiated",
        "Encrypting payload",
        "Transmitting data",
        "Verifying checksum",
      ],
      successTerminated: "Connection terminated gracefully.",
      sendAnother:       "Send Another Message",
      errorName:    "Name required",
      errorEmail:   "Email required",
      errorEmailInvalid: "Invalid email address",
      errorMessage: "Message required",
      errorSend: "Transmission failed. Try again."
    },
    footer: {
      copyright: "© 2026 ARCHITECT_OS. BUILT FOR PRECISION.",
    },
  },

  es: {
    nav: {
      about:      "Inicio",
      skills:     "Habilidades",
      experience: "Experiencia",
      projects:   "Proyectos",
      contact:    "Contacto",
    },
    hero: {
      statusLabel: "Sistema Listo",
      headline:    "Desarrollador frontend que construye aplicaciones web y móviles escalables",
      headlineAccent: "con Angular y Ionic.",
      body: "Desarrollador frontend con experiencia en la creación de aplicaciones utilizando Angular, Ionic y TypeScript. He desarrollado sistemas CRM con control de acceso basado en roles y aplicaciones móviles para plataformas fintech, priorizando el rendimiento, la usabilidad y una arquitectura limpia. Cuento con experiencia en la integración de API REST, la gestión de flujos de autenticación y la programación reactiva con RxJS. Me apasiona crear productos escalables y ofrecer experiencias de usuario de alta calidad en entornos remotos.",
      ctaProjects: "Explorar Proyectos",
      ctaContact:  "Ping al Servidor",
      ctaCV:       "Descargar CV",
      systemStatus: "Estado del Sistema",
      coreStack:    "Stack Principal",
      statusItems: [
        { label: "Estado",        value: "EN LÍNEA",          highlight: true  },
        { label: "Ubicación",     value: "Remoto / Global",   highlight: false },
        { label: "Disponibilidad", value: "Abierto a Ofertas", highlight: false },
        { label: "Respuesta",     value: "&lt; 24h",          highlight: false },
      ],
    },
    skills: {
      sectionTitle: "Matriz Técnica",
      categories: [
        { title: "Sistemas Frontend"       },
        { title: "Infraestructura Backend" },
        { title: "DevOps & Herramientas"  },
      ],
    },
    experience: {
      sectionTitle: "Execution History",
      jobs: [
        {
          title:       "Desarrollador Frontend",
          company:     "@ Billex",
          period:      "Sep 2023 — PRESENTE",
          description: "Desarrollar y mantener un sistema CRM fintech con múltiples módulos operativos para usuarios internos.",
          bullets: [
            "Desarrollé y mejoré módulos para operaciones, ejecutivos, proveedores y flujos de trabajo contables.",
            "Reduje el tiempo promedio de procesamiento operativo de 55 a 35 minutos optimizando los flujos de usuario y el rendimiento del frontend.",
            "Implementé sistemas de control de acceso y permisos basados ​​en roles para diferentes perfiles de usuario.",
            "Desarrollé una aplicación móvil con Ionic y Angular para usuarios de la plataforma.",
            "Integré API REST con autenticación, gestión de sesiones y validación de permisos.",
            "Gestioné flujos de datos reactivos con RxJS.",
            "Brindé soporte técnico y mejoras continuas basadas en los comentarios de los usuarios."
          ],
        },
        {
          title:       "Desarrollador de aplicaciones móviles (Freelance)",
          company:     "@ Aplicación para congreso de dermatología - Centroamérica",
          period:      "2025",
          description: "Desarrollé una aplicación móvil para una conferencia internacional de dermatología.",
          bullets:     [
            "Implementé la programación de eventos y la gestión de ponentes.",
            "Integré Google Maps para el seguimiento de la ubicación de los eventos.",
            "Desarrollé funciones para compartir archivos y fotos entre usuarios.",
            "Diseñé una experiencia móvil intuitiva utilizando Ionic y Angular."
          ],
        },
        {
          title:      "Desarrollador Web (Freelance)",
          company:    "@ Aplicación para congresos de dermatología - Lima",
          period:     "2025",
          description: "Creé una aplicación web para un congreso de dermatología en Lima, Perú.",
          bullets:    [
            "Desarrollé una aplicación interactiva de cuestionarios en tiempo real (al estilo Kahoot) para la participación del público en directo.",
            "Creé una plataforma web que muestra galerías de fotos dinámicas utilizando contenido basado en API."
          ]
        },
        {
          title:       "Gerente General",
          company:     "@ Distribuidora Xavi S.A.C.",
          period:      "2020 — 2022",
          description: "Gestioné las operaciones de una empresa de distribución de snacks durante el período de la COVID-19.",
          bullets:     [
            "Supervisó la logística, los proveedores y las operaciones diarias.",
            "Coordinó los procesos de distribución para los mercados mayoristas.",
            "Mantuvo la continuidad del negocio durante un período crítico."
          ]
        },
        {
          "title":       "Becario desarrollador frontend",
          "company":     "@ Billex",
          "period":      "2021 - 2023",
          "description": "Comencé como becario de desarrollo frontend, contribuyendo a los módulos de CRM y adquiriendo experiencia en Angular e integración de API.",
          "bullets":     []
        }
      ],
    },
    projects: {
      sectionTitle:    "Resultados de Despliegue",
      filterLabel:     "FILTROS:",
      loadMore:        "Cargar Más Proyectos",
      emptyTitle:      "0 Resultados Encontrados",
      emptyBody:       "no produjo construcciones arquitectónicas en los parámetros del repositorio actual.",
      resetQuery:      "Restablecer Filtros",
      statusLabel:     "ESTADO: SIN_RESULTADOS",
      liveDeploy:               "Ver En Vivo",
      source:                   "Código",
      privateRepoStatus:        "Estado del Repositorio: Repositorio Privado",
      privateRepoMessage:       "Este proyecto contiene lógica de negocio propietaria e implementaciones específicas del cliente que no pueden ser divulgadas públicamente.",
      privateLiveStatus:        "Acceso en Vivo Restringido",
      privateLiveMessage:       "Por razones de seguridad y cumplimiento de NDA, el entorno en vivo de este sistema no puede ser accedido públicamente. Contactame directamente para una demo privada.",
      projectList: [
        {
          title:           "Alta Montaña ERP",
          category:        "Planificación de Recursos Empresariales",
          description:     "Plataforma de gestión empresarial para venta de bicicletas, operaciones de taller, inventario, nómina y administración financiera.",
          fullDescription: "Alta Montaña ERP es una plataforma integral de gestión empresarial desarrollada para una empresa de venta y mantenimiento de bicicletas. El sistema centraliza operaciones críticas de negocio que incluyen gestión de nómina, control de asistencia, deducciones salariales, control de inventario, gestión de taller, operaciones de ventas, registros financieros y facturación electrónica. La plataforma fue diseñada para reemplazar procesos manuales desconectados con una solución unificada que mejora la visibilidad operativa, optimiza los flujos de trabajo y proporciona mejor control en múltiples áreas de negocio.",
          imageAlt:        "Panel de ERP para venta de bicicletas, operaciones de taller, inventario, nómina y gestión financiera.",
          specs: [
            { title: "Recursos Humanos",      description: "Gestión de nómina, control de asistencia, deducciones por tardanza y administración de empleados." },
            { title: "Control de Inventario", description: "Gestión de stock para bicicletas, repuestos y suministros de taller." },
            { title: "Operaciones de Taller", description: "Órdenes de servicio, seguimiento de mantenimiento y gestión del flujo de trabajo del taller." },
            { title: "Ventas y Facturación",  description: "Facturación electrónica, boletas de venta, notas de venta y gestión de transacciones financieras." },
          ],
          status: "Producción",
        },
        {
          title:           "Gestores Empresas",
          category:        "Plataforma de Servicios Empresariales",
          description:     "Sitio web corporativo desarrollado para una empresa de consultoría empresarial y asesoría financiera, enfocado en presentación de servicios, generación de leads y presencia digital.",
          fullDescription: "Gestores Empresas es un sitio web corporativo desarrollado para una empresa especializada en consultoría empresarial, asesoría financiera, servicios contables y gestión tributaria. La plataforma fue diseñada para fortalecer la presencia digital de la empresa, comunicar claramente sus servicios y mejorar la captación de clientes mediante una experiencia de usuario moderna y responsiva. El proyecto se centró en entregar una identidad corporativa profesional optimizando la accesibilidad, la responsividad y la navegación orientada a la conversión.",
          imageAlt:        "Sitio web corporativo para consultoría empresarial, contabilidad y servicios de asesoría financiera.",
          specs: [
            { title: "Presencia Corporativa",   description: "Plataforma digital profesional diseñada para exhibir servicios empresariales y de asesoría financiera." },
            { title: "Generación de Leads",     description: "Presentación estructurada de servicios y flujos de contacto enfocados en la captación de clientes." },
            { title: "Experiencia Responsiva",  description: "Experiencia de usuario optimizada para escritorio, tablet y dispositivos móviles." },
            { title: "Base SEO",                description: "Construido con visibilidad en motores de búsqueda y buenas prácticas de accesibilidad." },
          ],
          status: "Producción",
        },
        {
          title:           "Angular CRM Platform",
          category:        "Plataforma CRM",
          description:     "Aplicación CRM moderna construida con Angular 20, con autenticación, control de acceso basado en roles, flujos Kanban, dashboards y gestión de estado reactiva.",
          fullDescription: "Mini Personal CRM es un proyecto de portafolio desarrollado para mostrar arquitectura Angular moderna y prácticas de ingeniería frontend. La aplicación centraliza la gestión de clientes, seguimiento de ventas, organización de tareas y administración de usuarios en una interfaz responsiva orientada a negocios. El proyecto se enfoca en escalabilidad, mantenibilidad y patrones modernos de Angular, incluyendo componentes standalone, signals, lazy loading, autenticación basada en roles y flujos de datos reactivos con RxJS.",
          imageAlt:        "Panel CRM Angular con contactos, pipeline de ventas Kanban, analíticas, autenticación y control de acceso basado en roles.",
          specs: [
            { title: "Autenticación",       description: "Autenticación JWT, guardas de rutas, interceptores HTTP y control de acceso basado en roles." },
            { title: "Flujos CRM",          description: "Contactos, oportunidades, tareas, pipelines Kanban y gestión de flujos de trabajo empresariales." },
            { title: "Angular Moderno",     description: "Construido con Angular 20 usando Signals, Componentes Standalone, estrategia OnPush y lazy loading." },
            { title: "Panel de Analíticas", description: "Gráficos interactivos y métricas de negocio usando Chart.js y flujos de datos reactivos." },
          ],
          status: "Demo en Vivo",
        },
      ],
    },
    explorations: {
      sectionTitle: "Exploraciones Actuales",
      items: [
        {
          title: "React & Next.js",
          description: "Aprendiendo el ecosistema moderno de React para ampliar oportunidades en roles frontend globales.",
        },
        {
          title: "Testing Frontend",
          description: "Aprendiendo Jest y Cypress para mejorar la confiabilidad, mantenibilidad y confianza en el despliegue de aplicaciones.",
        },
        {
          title: "Aplicaciones con IA",
          description: "Explorando integraciones de LLM, agentes de IA y flujos de trabajo inteligentes para aplicaciones de negocio modernas.",
        },
        {
          title: "Arquitectura de Software",
          description: "Mejorando la escalabilidad de aplicaciones mediante diseño modular, arquitectura limpia y patrones de frontend mantenibles.",
        },
      ],
    },
    contact: {
      sectionTitle: "Establecer Conexión",
      subtitle:     "Sistema listo para recibir datos. Contáctame para colaboraciones técnicas, consultoría de arquitectura o consultas generales.",
      labelName:    "Identidad",
      labelEmail:   "Dirección de Retorno",
      labelMessage: "Mensaje",
      placeholderName:    "INTRODUCE_NOMBRE",
      placeholderEmail:   "INTRODUCE_EMAIL",
      placeholderMessage: "INTRODUCE_MENSAJE",
      submitIdle:         "Enviar Mensaje",
      submitSending:      "Enviando...",
      successTitle:       "Mensaje Transmitido Exitosamente",
      successSubtitle:    "Paquete recibido y confirmado por el host.",
      successLines: [
        "Iniciando protocolo",
        "Cifrando datos",
        "Transmitiendo mensaje",
        "Verificando suma de comprobación",
      ],
      successTerminated: "Conexión terminada correctamente.",
      sendAnother:       "Enviar Otro Mensaje",
      errorName:    "Nombre requerido",
      errorEmail:   "Email requerido",
      errorEmailInvalid: "Dirección de email inválida",
      errorMessage: "Mensaje requerido",
      errorSend: "Error al enviar el mensaje. Inténtalo nuevamente."
    },
    footer: {
      copyright: "© 2026 ARCHITECT_OS. CONSTRUIDO CON PRECISIÓN.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations.en;
