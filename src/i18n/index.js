import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        hero: {
            greeting: 'Hola, soy',
            role: 'Full Stack Developer & Software Engineer',
            description: 'Construyo experiencias digitales modernas con código limpio, arquitectura sólida y atención al detalle.',
            ctaProjects: 'Ver Proyectos',
            ctaExperience: 'Mi Experiencia',
            scroll: 'scroll'
        },
        skills: {
            label: '// habilidades',
            titleP1: 'Mi',
            titleP2: 'Stack',
            titleP3: 'Tecnológico',
            subtitle: 'Herramientas y tecnologías con las que trabajo día a día para crear soluciones robustas.',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Bases de Datos',
                devops: 'DevOps & Tools'
            }
        },
        projects: {
            label: '// proyectos',
            titleP1: 'Trabajo',
            titleP2: 'Destacado',
            subtitle: 'Una selección de proyectos en los que he trabajado, desde aplicaciones web hasta herramientas de desarrollo.',
            placeholder: {
                title: 'Proyecto {n}',
                description: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usa.'
            }
        },
        experience: {
            label: '// experiencia',
            titleP1: 'Mi',
            titleP2: 'Trayectoria',
            subtitle: 'Un recorrido por mi carrera profesional y los proyectos que han marcado mi crecimiento.',
            placeholder: {
                company: 'Empresa {n}',
                periodPresent: 'Presente',
                description: 'Descripción de tus responsabilidades y logros principales en este puesto.'
            }
        },
        writing: {
            label: '// escritura',
            titleP1: 'Notas &',
            titleP2: 'Artículos',
            subtitle: 'Reflexiones, tutoriales y aprendizajes que comparto con la comunidad.',
            readTime: 'lectura',
            placeholder: {
                title: 'Artículo o Post {n}',
                excerpt: 'Un resumen breve del contenido del artículo. Puede ser sobre tecnología, desarrollo o aprendizaje.'
            }
        },
        footer: {
            builtBy: 'Diseñado y construido por',
            madeWith: 'Hecho con Vue.js'
        }
    },
    en: {
        hero: {
            greeting: "Hi, I'm",
            role: 'Full Stack Developer & Software Engineer',
            description: 'I build modern digital experiences with clean code, solid architecture, and attention to detail.',
            ctaProjects: 'View Projects',
            ctaExperience: 'My Experience',
            scroll: 'scroll'
        },
        skills: {
            label: '// skills',
            titleP1: 'My',
            titleP2: 'Tech',
            titleP3: 'Stack',
            subtitle: 'Tools and technologies I work with every day to create robust solutions.',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Databases',
                devops: 'DevOps & Tools'
            }
        },
        projects: {
            label: '// projects',
            titleP1: 'Featured',
            titleP2: 'Work',
            subtitle: 'A selection of projects I have worked on, from web applications to development tools.',
            placeholder: {
                title: 'Project {n}',
                description: 'Brief description of the project. What problem it solves and what technologies it uses.'
            }
        },
        experience: {
            label: '// experience',
            titleP1: 'My',
            titleP2: 'Journey',
            subtitle: 'A journey through my professional career and the projects that have marked my growth.',
            placeholder: {
                company: 'Company {n}',
                periodPresent: 'Present',
                description: 'Description of your main responsibilities and achievements in this position.'
            }
        },
        writing: {
            label: '// writing',
            titleP1: 'Notes &',
            titleP2: 'Articles',
            subtitle: 'Reflections, tutorials, and learnings I share with the community.',
            readTime: 'read',
            placeholder: {
                title: 'Article or Post {n}',
                excerpt: 'A brief summary of the article content. It can be about technology, development, or learning.'
            }
        },
        footer: {
            builtBy: 'Designed and built by',
            madeWith: 'Made with Vue.js'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})

export default i18n
