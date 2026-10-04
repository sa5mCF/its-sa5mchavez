export default {
    nav: { label: 'Principal', skills: 'Stack', experience: 'Experiência', now: 'Agora', influences: 'Influências', language: 'Mudar idioma', theme: 'Mudar tema', skip: 'Pular para o conteúdo' },
    hero: {
        greeting: 'Olá, eu sou',
        role: 'Full Stack Developer & Software Engineer',
        description: 'Sou engenheiro de software. Construo sistemas em que o código importa, mas também as decisões por trás dele. Backend, IA aplicada e arquitetura; filosofia para manter o pensamento claro.',
        ctaProjects: 'Ver Projetos',
        ctaExperience: 'Minha Experiência',
        ctaContact: 'Contato',
        scroll: 'scroll'
    },
    skills: {
        label: 'habilidades',
        titleP1: 'Meu',
        titleP2: 'Stack',
        titleP3: 'Tecnológico',
        subtitle: 'Ferramentas e tecnologias com as quais trabalho no dia a dia para criar soluções robustas.',
        categories: {
            languages: 'Linguagens de Programação',
            backend: 'Backend & APIs',
            ai: 'IA & LLMs',
            frontend: 'Frontend',
            architecture: 'Arquitetura & Sistemas',
            cloud: 'Cloud & DevOps',
            database: 'Bancos de Dados',
            testing: 'Testes & Qualidade',
            monitoring: 'Monitoramento & Observabilidade',
            tools: 'Ferramentas',
            additional: 'Experiência Adicional'
        }
    },
    projects: {
        label: 'projetos',
        titleP1: 'Trabalho',
        titleP2: 'Destacado',
        subtitle: 'Uma seleção de projetos nos quais trabalhei, de aplicações web a ferramentas de desenvolvimento.',
        placeholder: {
            title: 'Projeto {n}',
            description: 'Descrição breve do projeto. Que problema resolve e quais tecnologias usa.'
        }
    },
    experience: {
        label: 'experiência',
        current: 'atual',
        titleP1: 'Minha',
        titleP2: 'Trajetória',
        subtitle: 'Um percurso pela minha carreira profissional e pelos projetos que marcaram meu crescimento.',
        items: [
            {
                role: 'Backend Engineer · IA Aplicada',
                company: 'Japifon',
                period: 'Agosto 2026 - Atual',
                description: [
                    'Desenvolvi uma plataforma conversacional de IA em Go baseada em RAG e LLMs locais (Ollama), com PostgreSQL/pgvector e arquitetura multi-tenant.',
                    'Integrei LLMs com tool/function calling definindo limites de contexto, timeouts, tentativas, orçamentos de tokens e tratamento de falhas do provedor.',
                    'Mitiguei o vazamento de prompts e ferramentas com allowlists e isolamento, e separei dados transacionais, históricos e conversacionais com retenção e direito de exclusão.',
                    'Adicionei observabilidade com métricas Prometheus, logs estruturados, request IDs e health/readiness checks, e implantei em Kubernetes com Docker.'
                ],
                tags: ['Go (Golang)', 'Gin', 'PostgreSQL', 'pgvector', 'SQLC', 'Ollama', 'LLMs', 'RAG', 'River Queue', 'Kubernetes', 'Prometheus', 'Docker'],
                current: true
            },
            {
                role: 'Backend Engineer',
                company: 'ClubHub',
                period: 'Setembro 2024 - Dezembro 2025',
                description: [
                    'Projetei e implementei um microsserviço de Empréstimos totalmente desacoplado, seguindo princípios de arquitetura de microsserviços.',
                    'Modelei o domínio financeiro completo, incluindo ciclo de vida de empréstimos, parcelas, cronograma e lógica de amortização francesa.',
                    'Construí um motor de processamento de pagamentos transacionais compatível com pagamentos parciais, exatos e excedentes, com redistribuição do excedente entre parcelas.',
                    'Implementei fluxos de trabalho idempotentes, garantindo a consistência financeira e evitando a dupla aplicação de pagamentos.'
                ],
                tags: ['Go (Golang)', 'Echo', 'PostgreSQL', 'Docker'],
                current: false
            },
            {
                role: 'Desenvolvedor Python Sênior',
                company: 'Wolf Sellers',
                period: 'Fevereiro 2024 - Setembro 2024',
                description: [
                    'Projetei e implementei integrações de middleware entre Adobe Commerce (Magento) e sistemas ERP, permitindo a sincronização bidirecional de produtos, clientes e pedidos.',
                    'Desenvolvi e mantive schemas, resolvers e mutations de GraphQL usando Graphene.',
                    'Construí suítes de testes PyTest do zero, melhorando a confiabilidade e a confiança nos deploys.',
                    'Mentorei engenheiros juniores em código limpo, padrões de projeto e práticas de GitFlow.'
                ],
                tags: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Docker'],
                current: false
            },
            {
                role: 'Engenheiro de Software',
                company: 'Konfio',
                period: 'Março 2020 - Dezembro 2023',
                description: [
                    'Desenvolvi funcionalidades de backend para sistemas de crédito e cobrança, lidando com estados de empréstimos, regras de inadimplência e validações financeiras.',
                    'Construí fluxos de trabalho assíncronos usando AWS Lambda, SQS e SNS para processamento orientado a eventos.',
                    'Implementei sistemas de automação que entregam de 5.000 a 10.000 notificações diárias, incluindo e-mails, push e mensagens de WhatsApp.',
                    'Projetei camadas de validação que impedem que ações financeiras inválidas cheguem ao sistema de registro.'
                ],
                tags: ['Python', 'Flask', 'AWS', 'SQS', 'SNS', 'Lambda', 'PostgreSQL', 'Terraform'],
                current: false
            },
            {
                role: 'Desenvolvedor Fullstack',
                company: 'TrueHome',
                period: 'Junho 2019 - Março 2020',
                description: [
                    'Migrei a página inicial corporativa de Django para Next.js, melhorando a pontuação de desempenho de 60% para 97%.',
                    'Construí resolvers de GraphQL usando Graphene-Django.',
                    'Desenvolvi APIs REST que sustentam fluxos de trabalho de vendas internos.'
                ],
                tags: ['Python', 'Django', 'Next.js', 'GraphQL', 'PostgreSQL'],
                current: false
            },
            {
                role: 'Desenvolvedor Fullstack',
                company: 'Spacebar / PengoStores',
                period: 'Janeiro 2018 - Junho 2019',
                description: [
                    'Mantive e depurei plataformas de e-commerce Magento 1.9, resolvendo gargalos de desempenho.',
                    'Participei de iniciativas de migração de backend do Magento 1 para o Magento 2.',
                    'Desenvolvi ferramentas internas e sistemas CRUD baseados em Laravel.'
                ],
                tags: ['PHP', 'Magento 1 & 2', 'Laravel', 'Docker'],
                current: false
            }
        ]
    },
    writing: {
        label: 'escrita',
        titleP1: 'Notas &',
        titleP2: 'Artigos',
        subtitle: 'Reflexões, tutoriais e aprendizados que compartilho com a comunidade.',
        readTime: 'de leitura',
        placeholder: {
            title: 'Artigo ou Post {n}',
            excerpt: 'Um resumo breve do conteúdo do artigo. Pode ser sobre tecnologia, desenvolvimento ou aprendizado.'
        }
    },
    now: {
        label: 'agora',
        title: 'Agora',
        subtitle: 'No que estou trabalhando, aprendendo e lendo atualmente.',
        items: [
            { label: 'Aprendendo', value: 'Swift e SwiftUI' },
            { label: 'Lendo', value: 'El hombre y lo divino — María Zambrano' },
            { label: 'Construindo', value: 'Plataforma de IA conversacional com RAG, em Go' },
            { label: 'Aprendendo', value: 'Kubernetes' },
        ],
        updated: 'Atualizado: Outubro 2026'
    },
    influences: {
        label: 'influências',
        title: 'Influências Intelectuais',
        subtitle: 'Autores que moldam como construo software: definir bem, raciocinar com rigor e desconfiar do que não pode ser demonstrado.',
        items: [
            {
                name: 'Descartes',
                description: 'Dúvida metódica: partir do que pode ser demonstrado.'
            },
            {
                name: 'Baruch Spinoza',
                description: 'Estrutura racional do pensamento e clareza de ideias.'
            },
            {
                name: 'Aristóteles',
                description: 'Ética da virtude e raciocínio prático.'
            },
            {
                name: 'Kurt Gödel',
                description: 'Limites dos sistemas formais e rigor lógico.'
            },
            {
                name: 'Carl Friedrich Gauss',
                description: 'Elegância e precisão na matemática.'
            }
        ]
    },
    footer: {
        builtBy: 'Projetado e construído por',
        madeWith: 'Feito com Vue.js'
    }
}
