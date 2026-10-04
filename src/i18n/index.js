import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        nav: { label: 'Principal', skills: 'Stack', experience: 'Experiencia', now: 'Ahora', influences: 'Influencias', language: 'Cambiar idioma', theme: 'Cambiar tema', skip: 'Saltar al contenido' },
        hero: {
            greeting: 'Hola, soy',
            role: 'Full Stack Developer & Software Engineer',
            description: 'Construyo software con código limpio y arquitectura sólida, hoy entre backend, IA aplicada y sistemas financieros. Estudio filosofía porque programar y pensar bien comparten un oficio: definir con claridad.',
            ctaProjects: 'Ver Proyectos',
            ctaExperience: 'Mi Experiencia',
            ctaContact: 'Contacto',
            scroll: 'scroll'
        },
        skills: {
            label: 'habilidades',
            titleP1: 'Mi',
            titleP2: 'Stack',
            titleP3: 'Tecnológico',
            subtitle: 'Herramientas y tecnologías con las que trabajo día a día para crear soluciones robustas.',
            categories: {
                languages: 'Lenguajes de Programación',
                backend: 'Backend & APIs',
                ai: 'IA & LLMs',
                frontend: 'Frontend',
                architecture: 'Arquitectura & Sistemas',
                cloud: 'Cloud & DevOps',
                database: 'Bases de Datos',
                testing: 'Testing & Calidad',
                monitoring: 'Monitoreo & Observabilidad',
                tools: 'Herramientas',
                additional: 'Experiencia Adicional'
            }
        },
        projects: {
            label: 'proyectos',
            titleP1: 'Trabajo',
            titleP2: 'Destacado',
            subtitle: 'Una selección de proyectos en los que he trabajado, desde aplicaciones web hasta herramientas de desarrollo.',
            placeholder: {
                title: 'Proyecto {n}',
                description: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usa.'
            }
        },
        experience: {
            label: 'experiencia',
            current: 'actual',
            titleP1: 'Mi',
            titleP2: 'Trayectoria',
            subtitle: 'Un recorrido por mi carrera profesional y los proyectos que han marcado mi crecimiento.',
            items: [
                {
                    role: 'Backend Engineer · IA Aplicada',
                    company: 'Japifon',
                    period: 'Agosto 2026 - Actual',
                    description: [
                        'Desarrollé una plataforma conversacional de IA en Go basada en RAG y LLMs locales (Ollama), con PostgreSQL/pgvector y arquitectura multi-tenant.',
                        'Integré LLMs con tool/function calling definiendo límites de contexto, timeouts, reintentos, presupuestos de tokens y manejo de fallos del proveedor.',
                        'Mitigué la fuga de prompts y herramientas con allowlists y aislamiento, y separé datos transaccionales, históricos y conversacionales con retención y derecho de borrado.',
                        'Agregué observabilidad con métricas Prometheus, logs estructurados, request IDs y health/readiness checks, y desplegué en Kubernetes con Docker.'
                    ],
                    tags: ['Go (Golang)', 'Gin', 'PostgreSQL', 'pgvector', 'SQLC', 'Ollama', 'LLMs', 'RAG', 'River Queue', 'Kubernetes', 'Prometheus', 'Docker'],
                    current: true
                },
                {
                    role: 'Backend Engineer',
                    company: 'ClubHub',
                    period: 'Septiembre 2024 - Diciembre 2025',
                    description: [
                        'Diseñé e implementé un microservicio de Préstamos totalmente desacoplado siguiendo principios de arquitectura de microservicios.',
                        'Modelé el dominio financiero completo incluyendo ciclo de vida de préstamos, cuotas, programación y lógica de amortización francesa.',
                        'Construí un motor de procesamiento de pagos transaccionales compatible con pagos parciales, exactos y excedentes con redistribución de excedentes entre cuotas.',
                        'Implementé flujos de trabajo idempotentes garantizando la consistencia financiera y evitando la doble aplicación de pagos.'
                    ],
                    tags: ['Go (Golang)', 'Echo', 'PostgreSQL', 'Docker'],
                    current: false
                },
                {
                    role: 'Desarrollador Python Senior',
                    company: 'Wolf Sellers',
                    period: 'Febrero 2024 - Septiembre 2024',
                    description: [
                        'Diseñé e implementé integraciones de middleware entre Adobe Commerce (Magento) y sistemas ERP permitiendo la sincronización bidireccional de productos, clientes y pedidos.',
                        'Desarrollé y mantuve esquemas, resolvers y mutaciones de GraphQL usando Graphene.',
                        'Construí suites de pruebas PyTest desde cero mejorando la confiabilidad y la confianza en el despliegue.',
                        'Mentoricé a ingenieros junior en código limpio, patrones de diseño y prácticas de GitFlow.'
                    ],
                    tags: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Docker'],
                    current: false
                },
                {
                    role: 'Ingeniero de Software',
                    company: 'Konfio',
                    period: 'Marzo 2020 - Diciembre 2023',
                    description: [
                        'Desarrollé funcionalidades de backend para sistemas de crédito y cobranza manejando estados de préstamos, reglas de morosidad y validaciones financieras.',
                        'Construí flujos de trabajo asíncronos usando AWS Lambda, SQS y SNS para procesamiento orientado a eventos.',
                        'Implementé sistemas de automatización que entregan de 5,000 a 10,000 notificaciones diarias incluyendo correos, push y mensajes de WhatsApp.',
                        'Diseñé capas de validación evitando que acciones financieras inválidas llegaran al sistema de registro.'
                    ],
                    tags: ['Python', 'Flask', 'AWS', 'SQS', 'SNS', 'Lambda', 'PostgreSQL', 'Terraform'],
                    current: false
                },
                {
                    role: 'Desarrollador Fullstack',
                    company: 'TrueHome',
                    period: 'Junio 2019 - Marzo 2020',
                    description: [
                        'Migré la página de inicio corporativa de Django a Next.js mejorando la puntuación de rendimiento del 60% al 97%.',
                        'Construí resolvers de GraphQL usando Graphene-Django.',
                        'Desarrollé APIs REST que soportan flujos de trabajo de ventas internos.'
                    ],
                    tags: ['Python', 'Django', 'Next.js', 'GraphQL', 'PostgreSQL'],
                    current: false
                },
                {
                    role: 'Desarrollador Fullstack',
                    company: 'Spacebar / PengoStores',
                    period: 'Enero 2018 - Junio 2019',
                    description: [
                        'Mantuve y depuré plataformas de comercio electrónico Magento 1.9 resolviendo cuellos de botella de rendimiento.',
                        'Participé en iniciativas de migración de backend de Magento 1 a Magento 2.',
                        'Desarrollé herramientas internas y sistemas CRUD basados en Laravel.'
                    ],
                    tags: ['PHP', 'Magento 1 & 2', 'Laravel', 'Docker'],
                    current: false
                }
            ]
        },
        writing: {
            label: 'escritura',
            titleP1: 'Notas &',
            titleP2: 'Artículos',
            subtitle: 'Reflexiones, tutoriales y aprendizajes que comparto con la comunidad.',
            readTime: 'lectura',
            placeholder: {
                title: 'Artículo o Post {n}',
                excerpt: 'Un resumen breve del contenido del artículo. Puede ser sobre tecnología, desarrollo o aprendizaje.'
            }
        },
        now: {
            label: 'ahora',
            title: 'Ahora',
            subtitle: 'En qué estoy trabajando, aprendiendo y leyendo actualmente.',
            items: [
                { label: 'Aprendiendo', value: 'Swift y SwiftUI' },
                { label: 'Leyendo', value: 'El hombre y lo divino — María Zambrano' },
                { label: 'Construyendo', value: 'Plataforma de IA conversacional con RAG, en Go' },
                { label: 'Aprendiendo', value: 'Kubernetes' },
            ],
            updated: 'Actualizado: Octubre 2026'
        },
        influences: {
            label: 'influencias',
            title: 'Influencias Intelectuales',
            subtitle: 'Autores que moldean cómo construyo software: definir bien, razonar con rigor y desconfiar de lo que no puede demostrarse.',
            items: [
                {
                    name: 'Descartes',
                    description: 'Duda metódica: partir de lo que puede demostrarse.'
                },
                {
                    name: 'Baruch Spinoza',
                    description: 'Estructura racional del pensamiento y claridad de ideas.'
                },
                {
                    name: 'Aristóteles',
                    description: 'Ética de la virtud y razonamiento práctico.'
                },
                {
                    name: 'Kurt Gödel',
                    description: 'Límites de los sistemas formales y rigor lógico.'
                },
                {
                    name: 'Carl Friedrich Gauss',
                    description: 'Elegancia y precisión en las matemáticas.'
                }
            ]
        },
        footer: {
            builtBy: 'Diseñado y construido por',
            madeWith: 'Hecho con Vue.js'
        }
    },
    en: {
        nav: { label: 'Main', skills: 'Stack', experience: 'Experience', now: 'Now', influences: 'Influences', language: 'Switch language', theme: 'Switch theme', skip: 'Skip to content' },
        hero: {
            greeting: "Hi, I'm",
            role: 'Full Stack Developer & Software Engineer',
            description: 'I build software with clean code and solid architecture, currently across backend, applied AI and financial systems. I study philosophy because programming and thinking well share one craft: defining things clearly.',
            ctaProjects: 'View Projects',
            ctaExperience: 'My Experience',
            ctaContact: 'Contact',
            scroll: 'scroll'
        },
        skills: {
            label: 'skills',
            titleP1: 'My',
            titleP2: 'Tech',
            titleP3: 'Stack',
            subtitle: 'Tools and technologies I work with every day to create robust solutions.',
            categories: {
                languages: 'Programming Languages',
                backend: 'Backend & APIs',
                ai: 'AI & LLMs',
                frontend: 'Frontend',
                architecture: 'Architecture & Systems',
                cloud: 'Cloud & DevOps',
                database: 'Databases',
                testing: 'Testing & Quality',
                monitoring: 'Monitoring & Observability',
                tools: 'Tools',
                additional: 'Additional Experience'
            }
        },
        projects: {
            label: 'projects',
            titleP1: 'Featured',
            titleP2: 'Work',
            subtitle: 'A selection of projects I have worked on, from web applications to development tools.',
            placeholder: {
                title: 'Project {n}',
                description: 'Brief description of the project. What problem it solves and what technologies it uses.'
            }
        },
        experience: {
            label: 'experience',
            current: 'current',
            titleP1: 'My',
            titleP2: 'Journey',
            subtitle: 'A journey through my professional career and the projects that have marked my growth.',
            items: [
                {
                    role: 'Backend Engineer · Applied AI',
                    company: 'Japifon',
                    period: 'August 2026 - Present',
                    description: [
                        'Built a conversational AI platform in Go based on RAG and local LLMs (Ollama), with PostgreSQL/pgvector and a multi-tenant architecture.',
                        'Integrated LLMs with tool/function calling, defining context limits, timeouts, retries, token budgets and provider failure handling.',
                        'Mitigated prompt and tool leakage with tool allowlists and isolation, and separated transactional, historical and conversational data with retention and right-to-erasure in mind.',
                        'Added observability with Prometheus metrics, structured logs, request IDs and health/readiness checks, and deployed on Kubernetes with Docker.'
                    ],
                    tags: ['Go (Golang)', 'Gin', 'PostgreSQL', 'pgvector', 'SQLC', 'Ollama', 'LLMs', 'RAG', 'River Queue', 'Kubernetes', 'Prometheus', 'Docker'],
                    current: true
                },
                {
                    role: 'Backend Engineer',
                    company: 'ClubHub',
                    period: 'September 2024 - December 2025',
                    description: [
                        'Designed and implemented a fully decoupled Loans microservice following microservices architecture principles.',
                        'Modeled the complete financial domain including loan lifecycle, installments, scheduling and French amortization logic.',
                        'Built a transactional payment processing engine supporting partial, exact and excess payments with surplus redistribution across installments.',
                        'Implemented idempotent workflows ensuring financial consistency and preventing double application of payments.'
                    ],
                    tags: ['Go (Golang)', 'Echo', 'PostgreSQL', 'Docker'],
                    current: false
                },
                {
                    role: 'Senior Python Developer',
                    company: 'Wolf Sellers',
                    period: 'February 2024 - September 2024',
                    description: [
                        'Designed and implemented middleware integrations between Adobe Commerce (Magento) and ERP systems enabling bidirectional synchronization of products, customers and orders.',
                        'Developed and maintained GraphQL schemas, resolvers and mutations using Graphene.',
                        'Built PyTest test suites from scratch improving reliability and deployment confidence.',
                        'Mentored junior engineers in clean code, design patterns and GitFlow practices.'
                    ],
                    tags: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Docker'],
                    current: false
                },
                {
                    role: 'Software Engineer',
                    company: 'Konfio',
                    period: 'March 2020 - December 2023',
                    description: [
                        'Developed backend features for credit and collections systems handling loan states, delinquency rules and financial validations.',
                        'Built asynchronous workflows using AWS Lambda, SQS and SNS for event-driven processing.',
                        'Implemented automation systems delivering 5,000 to 10,000 daily notifications including email, push and WhatsApp messages.',
                        'Designed validation layers preventing invalid financial actions from reaching the system of record.'
                    ],
                    tags: ['Python', 'Flask', 'AWS', 'SQS', 'SNS', 'Lambda', 'PostgreSQL', 'Terraform'],
                    current: false
                },
                {
                    role: 'Fullstack Developer',
                    company: 'TrueHome',
                    period: 'June 2019 - March 2020',
                    description: [
                        'Migrated corporate homepage from Django to Next.js improving performance score from 60% to 97%.',
                        'Built GraphQL resolvers using Graphene-Django.',
                        'Developed REST APIs supporting internal sales workflows.'
                    ],
                    tags: ['Python', 'Django', 'Next.js', 'GraphQL', 'PostgreSQL'],
                    current: false
                },
                {
                    role: 'Fullstack Developer',
                    company: 'Spacebar / PengoStores',
                    period: 'January 2018 - June 2019',
                    description: [
                        'Maintained and debugged Magento 1.9 ecommerce platforms resolving performance bottlenecks.',
                        'Participated in Magento 1 to Magento 2 backend migration initiatives.',
                        'Developed Laravel-based internal tools and CRUD systems.'
                    ],
                    tags: ['PHP', 'Magento 1 & 2', 'Laravel', 'Docker'],
                    current: false
                }
            ]
        },
        writing: {
            label: 'writing',
            titleP1: 'Notes &',
            titleP2: 'Articles',
            subtitle: 'Reflections, tutorials, and learnings I share with the community.',
            readTime: 'read',
            placeholder: {
                title: 'Article or Post {n}',
                excerpt: 'A brief summary of the article content. It can be about technology, development, or learning.'
            }
        },
        now: {
            label: 'now',
            title: 'Now',
            subtitle: "What I'm currently building, learning, and reading.",
            items: [
                { label: 'Learning', value: 'Swift and SwiftUI' },
                { label: 'Reading', value: 'El hombre y lo divino — María Zambrano' },
                { label: 'Building', value: 'A conversational AI platform with RAG, in Go' },
                { label: 'Learning', value: 'Kubernetes' },
            ],
            updated: 'Updated: October 2026'
        },
        influences: {
            label: 'influences',
            title: 'Intellectual Influences',
            subtitle: 'Authors who shape how I build software: define well, reason rigorously and distrust what cannot be demonstrated.',
            items: [
                {
                    name: 'Descartes',
                    description: 'Methodical doubt: start from what can be proven.'
                },
                {
                    name: 'Baruch Spinoza',
                    description: 'Rational structure of thought and clarity of ideas.'
                },
                {
                    name: 'Aristotle',
                    description: 'Virtue ethics and practical reasoning.'
                },
                {
                    name: 'Kurt Gödel',
                    description: 'Limits of formal systems and logical rigor.'
                },
                {
                    name: 'Carl Friedrich Gauss',
                    description: 'Elegance and precision in mathematics.'
                }
            ]
        },
        footer: {
            builtBy: 'Designed and built by',
            madeWith: 'Made with Vue.js'
        }
    }
}

function initialLocale() {
    try {
        const saved = localStorage.getItem('locale')
        if (saved === 'es' || saved === 'en') return saved
    } catch {}
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

const i18n = createI18n({
    legacy: false,
    locale: initialLocale(),
    fallbackLocale: 'en',
    messages,
})

export default i18n
