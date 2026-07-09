import type { CvContentByLocale } from "@/types/cv";

export const cvContent: CvContentByLocale = {
    "pt-BR": {
        header: {
            name: "Eduardo Teodoro",
            title: "Desenvolvedor Backend Java Sênior",
            specialization: [
                "SAP Commerce Cloud",
                "Integrações Enterprise",
                "APIs REST",
                "Automação com IA",
            ],
            location: "Cosmópolis, SP - Brasil",
            email: "teodoro.edu@hotmail.com",
            links: [
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/epteodoro/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/GHEPT",
                },
            ],
        },

        summary: {
            title: "Resumo Profissional",
            text: "Senior Backend Java Developer com experiência em desenvolvimento de soluções para plataformas SAP Commerce Cloud em ambientes enterprise de alta criticidade. Atua na implementação de integrações, APIs REST e funcionalidades para operações de e-commerce de grande escala no setor de Telecom. Fundador da Teo Logic Solutions, onde desenvolve produtos que unem engenharia de software, inteligência operacional e inteligência artificial para apoiar a evolução de negócios.",
        },
        skills: {
            title: "Competências Técnicas",
            levelGuideLabel: "Como interpretar os níveis?",

            levelDefinitions: {
                specialist: {
                    label: "Especialista",
                    description:
                        "Lidera tecnicamente, resolve problemas complexos, toma decisões e orienta outros profissionais.",
                },
                advanced: {
                    label: "Avançado",
                    description:
                        "Atua com autonomia, implementa soluções completas e resolve a maioria dos problemas sem apoio.",
                },
                intermediate: {
                    label: "Intermediário",
                    description:
                        "Utiliza com segurança no dia a dia, mas depende de consulta ou apoio em cenários mais complexos.",
                },
                basic: {
                    label: "Básico",
                    description:
                        "Possui experiência inicial ou conhecimento prático, mas ainda não atua com autonomia profissional.",
                },
            },

            categories: [
                {
                    title: "Backend & APIs",
                    skills: [
                        { name: "Java", level: "specialist" },
                        {
                            name: "Spring MVC / Framework / Boot",
                            level: "advanced",
                        },
                        { name: "REST APIs", level: "specialist" },
                        { name: "Arquitetura de APIs", level: "specialist" },
                        {
                            name: "Integração de Sistemas",
                            level: "specialist",
                        },
                    ],
                },
                {
                    title: "Enterprise Commerce",
                    skills: [
                        {
                            name: "SAP Commerce Cloud (Hybris)",
                            level: "specialist",
                        },
                        { name: "APIGEE", level: "advanced" },
                    ],
                },
                {
                    title: "Dados & Plataformas",
                    skills: [
                        { name: "SQL", level: "advanced" },
                        { name: "PostgreSQL", level: "intermediate" },
                        { name: "MySQL", level: "intermediate" },
                        { name: "Supabase", level: "advanced" },
                    ],
                },
                {
                    title: "Engenharia & Operações",
                    skills: [
                        { name: "Git", level: "advanced" },
                        { name: "Linux", level: "advanced" },
                        { name: "Docker", level: "intermediate" },
                        { name: "Kibana", level: "intermediate" },
                        {
                            name: "Swagger / OpenAPI",
                            level: "intermediate",
                        },
                        { name: "Postman", level: "advanced" },
                        { name: "Troubleshooting", level: "advanced" },
                        {
                            name: "Arquitetura de Soluções",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "IA & Automação",
                    skills: [
                        { name: "OpenAI API", level: "intermediate" },
                        { name: "Agentes de IA", level: "intermediate" },
                    ],
                },
            ],
        },

        experience: {
            title: "Experiência Profissional",

            items: [
                {
                    company: "Hitss Brasil",
                    role: "Backend Sênior Hybris (Consultor)",
                    period: "out/2025 — atual",
                    context: "Projeto Claro | Contratação via Ultracon",
                    highlights: [
                        "Desenvolve e sustenta soluções backend em SAP Commerce Cloud (Hybris) para operações enterprise de e-commerce de alta escala e criticidade.",
                        "Implementa e mantém APIs OCC e Storefront, integrações com sistemas externos e serviços internos.",
                        "Atua em fluxos críticos de pedidos e processos de negócio, incluindo Order Process e orquestração entre sistemas.",
                        "Realiza manipulação e análise de dados utilizando ImpEx e FlexibleSearch, além de scripts Groovy para suporte operacional e intervenções técnicas.",
                        "Investiga e soluciona incidentes e problemas técnicos por meio da análise de logs e troubleshooting com Kibana.",
                        "Atua em ambientes SAP Commerce Cloud CCV2 utilizando HAC, Backoffice e Postman como parte das atividades de desenvolvimento e sustentação.",
                    ],
                },
                {
                    company: "Teo Logic Solutions",
                    role: "Founder & Product Engineer",
                    period: "out/2025 — atual",
                    highlights: [
                        "Funda e lidera o desenvolvimento de produtos e soluções voltados à inteligência operacional, automação e integração de sistemas.",
                        "Concebe e desenvolve o DOI (Driver of Operational Improvement), plataforma que utiliza inteligência artificial e análise operacional para apoiar a evolução de empresas.",
                        "Atua no desenvolvimento backend, arquitetura de integrações e construção de produtos digitais, da concepção à implementação técnica.",
                    ],
                },
                {
                    company: "Discover",
                    role: "Desenvolvedor Backend SAP Commerce Cloud",
                    period: "mai/2024 — out/2025",
                    highlights: [
                        "Atuou na construção de uma nova plataforma de e-commerce SAP Commerce Cloud para o setor de Telecom, participando do desenvolvimento do projeto desde sua fase inicial.",
                        "Projetou e implementou do zero o módulo de integrações REST da plataforma, utilizando o padrão de Consumed Destinations do SAP Commerce Cloud.",
                        "Desenvolveu integrações com sistemas do ecossistema SAP e plataformas externas, incluindo SAP BRIM, SAP S/4HANA e SAP Customer Data Cloud (CDC).",
                        "Implementou scripts Groovy para suporte a processos técnicos, manipulação de dados e necessidades operacionais da plataforma.",
                        "Desenvolveu customizações e Wizards no Backoffice para atendimento aos processos de negócio.",
                        "Atuou na migração de dados de sistemas legados para o SAP Commerce Cloud.",
                    ],
                },
                {
                    company: "Global Hitss",
                    role: "Desenvolvedor Backend SAP Commerce Cloud",
                    period: "jul/2023 — mai/2024",
                    context: "Projeto Claro",
                    highlights: [
                        "Participou do desenvolvimento da jornada de inclusão de dependentes em planos pós-pagos, contemplando novas linhas e portabilidade em ambiente SAP Commerce Cloud.",
                        "Contribuiu para as discussões técnicas e de arquitetura da solução, atuando tanto nos fluxos internos da plataforma quanto nas integrações com sistemas externos.",
                        "Desenvolveu um novo Checkout Step específico para a jornada de contratação de dependentes.",
                        "Conduziu uma apresentação técnica (Knowledge Transfer) da solução para mais de 80 profissionais, incluindo desenvolvedores, Tech Leads e Product Owners.",
                        "Atuou na evolução e sustentação da plataforma, investigando incidentes e problemas técnicos por meio de logs, Kibana, HAC e Backoffice.",
                        "Colaborou com equipes responsáveis por SAP ECC e APIGEE na implementação e sustentação de integrações e fluxos de negócio.",
                    ],
                },
                {
                    company: "CantuStore",
                    role: "Desenvolvedor Backend SAP Commerce Cloud",
                    period: "nov/2021 — jul/2023",
                    highlights: [
                        "Iniciou sua atuação em SAP Commerce Cloud na sustentação e evolução de plataformas B2C e B2B, trabalhando com Storefront na Pneustore e Spartacus na CantuStore.",
                        "Especializou-se progressivamente no desenvolvimento de integrações, implementando a integração do NuPay como meio de pagamento no fluxo de checkout B2C.",
                        "Desenvolveu integração com sistema de análise e aprovação de crédito em tempo de checkout para operações B2B.",
                        "Implementou integrações com mensageria via WhatsApp para comunicação e acompanhamento de pedidos, utilizando CronJobs e templates previamente aprovados pela Meta.",
                        "Desenvolveu integração entre SAP Commerce Cloud e sistemas de frete para processamento das atualizações de status das entregas e comunicação automatizada aos clientes via WhatsApp.",
                        "Implementou a integração entre a plataforma Pneustore e o sistema de gestão de motoristas para automatizar o agendamento de serviços das vans, consultando agendas disponíveis no SAP e realizando a programação dos atendimentos.",
                    ],
                },
            ],
        },

        projects: {
            title: "Projetos",

            items: [
                {
                    name: "Teo Logic Runtime",
                    technologies: [
                        "TypeScript",
                        "Redis",
                        "Docker",
                        "Event-Driven Architecture",
                        "Evolution API",
                    ],
                    description:
                        "Plataforma backend para construção de automações e sistemas inteligentes capazes de receber eventos, executar processos e coordenar ações entre diferentes serviços e integrações.",
                    highlights: [
                        "Desenvolvido com arquitetura orientada a eventos, utilizando filas, event bus e workers para processamento assíncrono e desacoplado.",
                        "Suporta encadeamento de workflows e propagação multi-hop, permitindo a construção de fluxos complexos a partir de componentes independentes.",
                        "Implantado em infraestrutura própria baseada em VPS e containers Docker, abrangendo publicação e operação do ambiente de produção.",
                    ],
                },
                {
                    name: "DOI — Driver of Operational Improvement",
                    technologies: [
                        "TypeScript",
                        "PostgreSQL",
                        "Supabase",
                        "Docker",
                        "Inteligência Artificial",
                    ],
                    description:
                        "Plataforma de diagnóstico e inteligência operacional que analisa informações sobre o funcionamento de empresas para identificar oportunidades de evolução e apoiar decisões mais fundamentadas.",
                    highlights: [
                        "Desenvolvido como produto digital orientado à coleta, estruturação e interpretação de dados operacionais, utilizando PostgreSQL e Supabase para persistência e gerenciamento das informações.",
                        "Integra inteligência artificial ao processo de análise para transformar informações fornecidas pelas empresas em diagnósticos e direcionamentos operacionais estruturados.",
                        "Implantado em infraestrutura própria baseada em VPS e containers Docker, abrangendo configuração, publicação e operação do ambiente de produção.",
                    ],
                },
                {
                    name: "Profile Engine",
                    technologies: [
                        "TypeScript",
                        "YAML",
                        "SVG",
                        "GitHub Actions",
                    ],
                    description:
                        "Ferramenta de geração automatizada de perfis profissionais para GitHub a partir de conteúdo estruturado, permitindo separar informações, apresentação visual e lógica de geração.",
                    highlights: [
                        "Desenvolvido com arquitetura orientada a configuração, utilizando arquivos YAML como fonte de conteúdo para geração automatizada do README e de assets visuais em SVG.",
                        "Automatiza a construção e atualização do perfil profissional, reduzindo a manutenção manual e garantindo consistência entre conteúdo e apresentação.",
                    ],
                },
            ],
        },

        education: {
            title: "Formação",

            items: [
                {
                    institution: "UNIP",
                    course: "Bacharelado em Administração de Empresas",
                    period: "2008 — 2011",
                },
                {
                    institution: "Blue EdTech",
                    course: "Desenvolvimento Web Back-End",
                    period: "2021 — 2022",
                    certificateUrl:
                        "https://drive.google.com/file/d/1mSMXEUPuyJcg5pYDWKJvbzuoNH50pScE/view",
                    certificateLabel: "Ver certificado",
                },
            ],
        },

        professionalDevelopment: {
            title: "Desenvolvimento Profissional",

            items: [
                {
                    institution: "Adapta",
                    title: "Formação Continuada em Inteligência Artificial",
                    period: "1 ano de participação",
                    description:
                        "Aprofundamento contínuo em inteligência artificial e IA generativa, com aplicação prática de modelos, ferramentas e tecnologias emergentes.",
                },
                {
                    institution: "Softblue",
                    title: "Java e Desenvolvimento Backend",
                    description:
                        "Formação complementar em lógica de programação, Java Fundamentos, Java Avançado e desenvolvimento backend com Spring Boot.",
                },
                {
                    institution: "DIO.me e NoCode Startup",
                    title: "Formações Complementares em Tecnologia",
                    description:
                        "Bootcamps e formações voltados a desenvolvimento de software, soluções no-code, automações e inteligência artificial.",
                },
            ],
        },

        languages: {
            title: "Idiomas",

            items: [
                {
                    name: "Português",
                    level: "Nativo",
                },
                {
                    name: "Inglês",
                    level: "Intermediário",
                },
            ],
        },
    },

    "en-US": {
        header: {
            name: "Eduardo Teodoro",
            title: "Senior Backend Java Developer",
            specialization: [
                "SAP Commerce Cloud",
                "Enterprise Integrations",
                "REST APIs",
                "AI Automation",
            ],
            location: "Cosmópolis, SP - Brazil",
            email: "teodoro.edu@hotmail.com",
            links: [
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/epteodoro/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/GHEPT",
                },
            ],
        },

        summary: {
            title: "Professional Summary",
            text: "Senior Backend Java Developer experienced in developing solutions for SAP Commerce Cloud platforms in high-criticality enterprise environments. Works on integrations, REST APIs, and features for large-scale e-commerce operations in the Telecom sector. Founder of Teo Logic Solutions, where he develops products combining software engineering, operational intelligence, and artificial intelligence to support business evolution.",
        },
        skills: {
            title: "Technical Skills",
            levelGuideLabel: "How to interpret skill levels?",

            levelDefinitions: {
                specialist: {
                    label: "Specialist",
                    description:
                        "Provides technical leadership, solves complex problems, makes decisions, and guides other professionals.",
                },
                advanced: {
                    label: "Advanced",
                    description:
                        "Works autonomously, implements complete solutions, and solves most problems without assistance.",
                },
                intermediate: {
                    label: "Intermediate",
                    description:
                        "Uses the technology confidently in daily work but may require research or support in more complex scenarios.",
                },
                basic: {
                    label: "Basic",
                    description:
                        "Has initial experience or practical knowledge but does not yet work with full professional autonomy.",
                },
            },

            categories: [
                {
                    title: "Backend & APIs",
                    skills: [
                        { name: "Java", level: "specialist" },
                        {
                            name: "Spring MVC / Framework / Boot",
                            level: "advanced",
                        },
                        { name: "REST APIs", level: "specialist" },
                        { name: "API Architecture", level: "specialist" },
                        { name: "Systems Integration", level: "specialist" },
                    ],
                },
                {
                    title: "Enterprise Commerce",
                    skills: [
                        {
                            name: "SAP Commerce Cloud (Hybris)",
                            level: "specialist",
                        },
                        { name: "APIGEE", level: "advanced" },
                    ],
                },
                {
                    title: "Data & Platforms",
                    skills: [
                        { name: "SQL", level: "advanced" },
                        { name: "PostgreSQL", level: "intermediate" },
                        { name: "MySQL", level: "intermediate" },
                        { name: "Supabase", level: "advanced" },
                    ],
                },
                {
                    title: "Engineering & Operations",
                    skills: [
                        { name: "Git", level: "advanced" },
                        { name: "Linux", level: "advanced" },
                        { name: "Docker", level: "intermediate" },
                        { name: "Kibana", level: "intermediate" },
                        {
                            name: "Swagger / OpenAPI",
                            level: "intermediate",
                        },
                        { name: "Postman", level: "advanced" },
                        { name: "Troubleshooting", level: "advanced" },
                        {
                            name: "Solution Architecture",
                            level: "intermediate",
                        },
                    ],
                },
                {
                    title: "AI & Automation",
                    skills: [
                        { name: "OpenAI API", level: "intermediate" },
                        { name: "AI Agents", level: "intermediate" },
                    ],
                },
            ],
        },

        experience: {
            title: "Professional Experience",

            items: [
                {
                    company: "Hitss Brasil",
                    role: "Senior Hybris Backend Consultant",
                    period: "Oct 2025 — Present",
                    context: "Claro Project | Contracted through Ultracon",
                    highlights: [
                        "Develops and maintains backend solutions in SAP Commerce Cloud (Hybris) for large-scale, high-criticality enterprise e-commerce operations.",
                        "Implements and maintains OCC and Storefront APIs, integrations with external systems, and internal services.",
                        "Works on critical order flows and business processes, including Order Process and system orchestration.",
                        "Performs data manipulation and analysis using ImpEx and FlexibleSearch, as well as Groovy scripts for operational support and technical interventions.",
                        "Investigates and resolves incidents and technical issues through log analysis and troubleshooting with Kibana.",
                        "Works in SAP Commerce Cloud CCV2 environments using HAC, Backoffice, and Postman as part of development and support activities.",
                    ],
                },
                {
                    company: "Teo Logic Solutions",
                    role: "Founder & Product Engineer",
                    period: "Oct 2025 — Present",
                    highlights: [
                        "Founded and leads the development of products and solutions focused on operational intelligence, automation, and systems integration.",
                        "Designs and develops DOI (Driver of Operational Improvement), a platform that uses artificial intelligence and operational analysis to support business evolution.",
                        "Works on backend development, integration architecture, and digital product development, from conception through technical implementation.",
                    ],
                },
                {
                    company: "Discover",
                    role: "SAP Commerce Cloud Backend Developer",
                    period: "May 2024 — Oct 2025",
                    highlights: [
                        "Contributed to the development of a new SAP Commerce Cloud e-commerce platform for the Telecom sector from its initial project phase.",
                        "Designed and implemented the platform's REST integration module from scratch using the SAP Commerce Cloud Consumed Destinations pattern.",
                        "Developed integrations with SAP ecosystem systems and external platforms, including SAP BRIM, SAP S/4HANA, and SAP Customer Data Cloud (CDC).",
                        "Implemented Groovy scripts for technical processes, data manipulation, and operational platform requirements.",
                        "Developed Backoffice customizations and Wizards to support business processes.",
                        "Worked on legacy data migration to SAP Commerce Cloud.",
                    ],
                },
                {
                    company: "Global Hitss",
                    role: "SAP Commerce Cloud Backend Developer",
                    period: "Jul 2023 — May 2024",
                    context: "Claro Project",
                    highlights: [
                        "Contributed to the development of the dependent-line enrollment journey for postpaid plans, including new lines and number portability in SAP Commerce Cloud.",
                        "Participated in technical and architectural solution discussions, working on both internal platform flows and external system integrations.",
                        "Developed a new Checkout Step specifically for the dependent-line enrollment journey.",
                        "Delivered a technical Knowledge Transfer presentation to more than 80 professionals, including developers, Tech Leads, and Product Owners.",
                        "Worked on platform evolution and support, investigating incidents and technical issues through logs, Kibana, HAC, and Backoffice.",
                        "Collaborated with SAP ECC and APIGEE teams on the implementation and support of integrations and business flows.",
                    ],
                },
                {
                    company: "CantuStore",
                    role: "SAP Commerce Cloud Backend Developer",
                    period: "Nov 2021 — Jul 2023",
                    highlights: [
                        "Started working with SAP Commerce Cloud by supporting and evolving B2C and B2B platforms, using Storefront at Pneustore and Spartacus at CantuStore.",
                        "Progressively specialized in integration development, implementing NuPay as a payment method in the B2C checkout flow.",
                        "Developed an integration with a credit analysis and approval system during the B2B checkout process.",
                        "Implemented WhatsApp messaging integrations for customer communication and order tracking using CronJobs and Meta pre-approved templates.",
                        "Developed integrations between SAP Commerce Cloud and freight systems to process delivery status updates and automatically communicate them to customers via WhatsApp.",
                        "Implemented an integration between the Pneustore platform and the driver management system to automate van service scheduling by retrieving available schedules from SAP and automatically booking appointments.",
                    ],
                },
            ],
        },

        projects: {
            title: "Projects",

            items: [
                {
                    name: "Teo Logic Runtime",
                    technologies: [
                        "TypeScript",
                        "Redis",
                        "Docker",
                        "Event-Driven Architecture",
                        "Evolution API",
                    ],
                    description:
                        "Backend platform for building automations and intelligent systems capable of receiving events, executing processes, and coordinating actions across different services and integrations.",
                    highlights: [
                        "Built with an event-driven architecture using queues, an event bus, and workers for asynchronous and decoupled processing.",
                        "Supports workflow chaining and multi-hop propagation, enabling complex flows to be built from independent components.",
                        "Deployed on self-managed VPS infrastructure using Docker containers, covering deployment and production environment operations.",
                    ],
                },
                {
                    name: "DOI — Driver of Operational Improvement",
                    technologies: [
                        "TypeScript",
                        "PostgreSQL",
                        "Supabase",
                        "Docker",
                        "Artificial Intelligence",
                    ],
                    description:
                        "Operational intelligence and diagnostic platform that analyzes business operations to identify evolution opportunities and support better-informed decisions.",
                    highlights: [
                        "Developed as a digital product focused on collecting, structuring, and interpreting operational data using PostgreSQL and Supabase for data persistence and management.",
                        "Integrates artificial intelligence into the analysis process to transform business information into structured diagnostics and operational guidance.",
                        "Deployed on self-managed VPS infrastructure using Docker containers, covering configuration, deployment, and production environment operations.",
                    ],
                },
                {
                    name: "Profile Engine",
                    technologies: [
                        "TypeScript",
                        "YAML",
                        "SVG",
                        "GitHub Actions",
                    ],
                    description:
                        "Automated GitHub professional profile generator based on structured content, separating information, visual presentation, and generation logic.",
                    highlights: [
                        "Built with a configuration-driven architecture using YAML files as the content source for automated README and SVG asset generation.",
                        "Automates professional profile creation and updates, reducing manual maintenance and ensuring consistency between content and presentation.",
                    ],
                },
            ],
        },

        education: {
            title: "Education",

            items: [
                {
                    institution: "UNIP",
                    course: "Bachelor's Degree in Business Administration",
                    period: "2008 — 2011",
                },
                {
                    institution: "Blue EdTech",
                    course: "Web Back-End Development",
                    period: "2021 — 2022",
                    certificateUrl:
                        "https://drive.google.com/file/d/1mSMXEUPuyJcg5pYDWKJvbzuoNH50pScE/view",
                    certificateLabel: "View certificate",
                },
            ],
        },

        professionalDevelopment: {
            title: "Professional Development",

            items: [
                {
                    institution: "Adapta",
                    title: "Continuing Education in Artificial Intelligence",
                    period: "1 year",
                    description:
                        "Continuous development in artificial intelligence and generative AI, with practical application of models, tools, and emerging technologies.",
                },
                {
                    institution: "Softblue",
                    title: "Java and Backend Development",
                    description:
                        "Complementary education in programming logic, Java Fundamentals, Advanced Java, and backend development with Spring Boot.",
                },
                {
                    institution: "DIO.me and NoCode Startup",
                    title: "Complementary Technology Education",
                    description:
                        "Bootcamps and continuing education focused on software development, no-code solutions, automation, and artificial intelligence.",
                },
            ],
        },

        languages: {
            title: "Languages",

            items: [
                {
                    name: "Portuguese",
                    level: "Native",
                },
                {
                    name: "English",
                    level: "Intermediate",
                },
            ],
        },
    },
};