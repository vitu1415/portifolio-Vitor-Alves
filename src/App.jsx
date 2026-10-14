import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, ArrowUpRight, Mail, Phone, Github, Linkedin, Download } from 'lucide-react'

// Links e contatos. Deixe vazio ('') para esconder o botão correspondente.
const EMAIL = 'vitoralves0801@gmail.com'
const PHONE = '+55 11 96833-6999'
const LINKEDIN = 'https://www.linkedin.com/in/vitor-alves-484932230/'
const GITHUB = 'https://github.com/vitu1415'
const REPO_BACKEND = 'https://github.com/vitu1415/conectaAi-Back-VSR'    // repositório do ConectaAí (backend)
const DEMO = 'https://landpage.conectaai.app.br'
const CV = '/curriculo-vitor-alves.pdf'

const nav = [['Trabalhos', '#trabalhos'], ['Sobre', '#sobre'], ['Tecnologias', '#stack'], ['Experiência', '#experiencia'], ['Contato', '#contato']]

const work = [
  { name: 'ConectaAí', desc: 'Plataforma social para conectar pessoas em eventos. Projeto autoral.', tech: 'Java · React', year: '2026', href: '#estudo' },
  { name: 'Nova Parabólica', desc: 'Aplicações Java para o programa nacional, usado por cerca de 1 milhão de pessoas.', tech: 'Spring Boot', year: '2025', href: '#experiencia' }
]

const skills = [
  ['Linguagens', ['Java', 'TypeScript', 'JavaScript', 'Python']],
  ['Backend', ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'APIs REST e JWT', 'RabbitMQ e Kafka', 'Clean Architecture e SOLID']],
  ['Dados', ['PostgreSQL', 'Oracle PL/SQL', 'SQL', 'Flyway']],
  ['DevOps e nuvem', ['Docker e Kubernetes', 'Jenkins e GitLab CI/CD', 'Kong API Gateway e Rancher', 'AWS EC2, S3, RDS', 'Railway e Vercel']],
  ['Qualidade', ['JUnit e Mockito', 'Testes de integração', 'Code review', 'Swagger e Postman']],
  ['Front-end', ['React', 'TypeScript']]
]

const jobs = [
  { period: 'Jul 2025 até hoje', role: 'Desenvolvedor Júnior', company: 'Overlabs', points: [
    'Desenvolvimento e manutenção de aplicações Java com Spring Boot para o programa Nova Parabólica, com cerca de 1 milhão de usuários finais.',
    'Migração de cerca de 10 microsserviços de arquiteturas legadas para uma arquitetura escalável e desacoplada.',
    'Pipeline de CI/CD criado do zero com Docker, Jenkins, Rancher e Kong, automatizando 100% de um processo antes manual.',
    'Correção de bugs críticos em produção, reduzindo incidentes recorrentes em cerca de 25%, e melhorias de performance em endpoints de alta demanda.'] },
  { period: 'Out 2024 a Jul 2025', role: 'Desenvolvedor Júnior', company: 'SKY', points: [
    'Back-end com Java, Spring Boot, Python e React, em um time de cerca de 10 pessoas.',
    'Integração de 11 APIs REST em uma arquitetura de microsserviços.',
    'Manutenção de pipelines de CI/CD com GitLab, Docker e Kubernetes, reduzindo o tempo de entrega de novas versões.',
    'Rotina Scrum com dev, QA e produto: dailies, plannings, retrospectivas e code reviews.'] },
  { period: 'Out 2023 a Mar 2024', role: 'Estagiário técnico em QA', company: 'YCONS IT Consulting', points: [
    'Testes funcionais e exploratórios em aplicações conversacionais antes do deploy.',
    'Registro e acompanhamento de bugs com os times de desenvolvimento, além de relatórios técnicos de qualidade.'] }
]

function Bar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const toggle = (
    <button className="switch" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}>
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />} {theme === 'dark' ? 'Claro' : 'Escuro'}
    </button>
  )
  return (
    <header className="bar">
      <div className="wrap">
        <a href="#inicio" className="logo">Vitor Alves</a>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Principal">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          {toggle}
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero wrap">
      <h1><span><i>Vitor</i></span><span><i>Alves</i></span></h1>
      <div className="hero-meta">
        <p>Desenvolvedor backend Java em São Paulo. Transformo regras de negócio em APIs estruturadas, seguras e fáceis de manter.</p>
        <div className="facts">
          <div><b>~3 anos</b><small>com Java e Spring Boot</small></div>
        </div>
      </div>
    </section>
  )
}

function Sec({ id, title, children }) {
  return <section id={id} className="sec"><div className="wrap"><h2 className="sec-title">{title}</h2><div>{children}</div></div></section>
}

function Work() {
  return (
    <Sec id="trabalhos" title="Trabalhos selecionados">
      <p className="lead">Sistemas que estão no ar, <em>da regra de negócio ao produto real.</em></p>
      <ul className="rows">
        {work.map((w) => (
          <li key={w.name}>
            <a className="row" href={w.href}>
              <h3>{w.name}</h3><p>{w.desc}</p><span className="mono">{w.year}</span><ArrowUpRight size={22} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </Sec>
  )
}

function About() {
  return (
    <Sec id="sobre" title="Sobre">
      <p className="lead">Backend com visão de produto. <em>Entendo o problema antes de escolher a solução.</em></p>
      <p className="body-text">Atuo com <strong>Java e Spring Boot</strong>, APIs REST, persistência e integração entre sistemas, e levo o código até a entrega com Docker, Kubernetes e CI/CD. Também desenvolvo o ConectaAí, um produto próprio que me faz decidir do banco de dados ao deploy. Busco código legível, responsabilidades bem definidas e testes que mantenham o sistema confiável.</p>
      <div className="cols">
        <div><h3>Formação</h3><ul><li>Análise e Desenvolvimento de Sistemas, IFSP (prevista para 2026)</li><li>Técnico em TI, SENAC (2023)</li></ul></div>
        <div><h3>Idiomas</h3><ul><li>Espanhol intermediario</li><li>Inglês intermediário</li></ul></div>
        <div><h3>Cursos</h3><ul><li>Tech Academy Full Stack, StartSe</li><li>Spring Boot 3 e Spring Security, Alura</li><li>Clean Architecture e Refatoração em Java, Alura</li></ul>
          <a className="more" href={LINKEDIN} target="_blank" rel="noreferrer">+cursos no LinkedIn <ArrowUpRight size={15} aria-hidden /></a>
        </div>
      </div>
    </Sec>
  )
}

function Skills() {
  return (
    <Sec id="stack" title="Tecnologias">
      <p className="lead">Ferramentas que uso no dia a dia.</p>
      <div className="cols">{skills.map(([t, items]) => <div key={t}><h3>{t}</h3><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></div>)}</div>
    </Sec>
  )
}

function Experience() {
  return (
    <Sec id="experiencia" title="Experiência">
      {jobs.map((j) => (
        <article className="job" key={j.company}>
          <p className="mono">{j.period}</p>
          <div><h3>{j.role} <span> - {j.company}</span></h3><ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
        </article>
      ))}
      <div className="btns"><a className="btn" href={CV} download><Download size={16} aria-hidden /> Baixar currículo</a></div>
    </Sec>
  )
}

function CaseStudy() {
  return (
    <Sec id="estudo" title="Estudo de caso">
      <p className="lead">ConectaAí: <em>Rede social dos Eventos</em></p>
      <p className="body-text">Plataforma para ajudar pessoas a se conectar em eventos presenciais, descobrir participantes com interesses em comum e manter conversas dentro do contexto do evento. Projeto autoral, em fase de MVP e em evolução. Meu foco é o backend: modelagem de dados, endpoints REST, autenticação e regras de negócio.</p>
      <div className="block" style={{ marginTop: '3rem' }}>
        <h3>Arquitetura</h3>
        <div className="arch">
          <div className="node"><b>Web app</b><small>React e TypeScript, na Vercel</small></div>
          <span className="link">HTTP / JSON</span>
          <div className="node main"><b>Backend API</b><small>Java, Spring Boot, AWS e JWT, no Railway</small></div>
          <span className="link">JPA / SQL</span>
          <div className="node"><b>Banco de dados</b><small>PostgreSQL e Flyway</small></div>
        </div>
      </div>
      <div className="block">
        <h3>Áreas técnicas</h3>
        <div className="cols" style={{ marginTop: '1rem' }}>
          <div><ul><li>Autenticação com Google e tokens JWT</li><li>Modelagem relacional de usuários, perfis e eventos</li><li>Conexão com AWS (S3 e cloudFront)</li></ul></div>
          <div><ul><li>API REST organizada por domínio</li><li>Armazenamento de arquivos e deploy</li></ul></div>
        </div>
      </div>
      <div className="block">
        <h3>Roadmap</h3>
        <ol className="steps" style={{ marginTop: '1rem' }}>
          <li><span className="dot done" /><span>Construção do MVP<small>API, banco de dados e frontend integrados</small></span><span className="mono">Feito</span></li>
          <li><span className="dot now" /><span>Validação com usuários<small>Observar uso real e pontos de fricção</small></span><span className="mono">Agora</span></li>
          <li><span className="dot" /><span>Qualidade e escala<small>Restruturação do backend (monolito para microserviços), criação da versão APP, melhorar algoritimo, etc...</small></span><span className="mono">Próximo</span></li>
        </ol>
        <div className="btns">
          {DEMO && <a className="btn solid" href={DEMO} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight size={16} aria-hidden /></a>}
          {REPO_BACKEND && <a className="btn" href={REPO_BACKEND} target="_blank" rel="noreferrer">Repositório backend</a>}
        </div>
      </div>
    </Sec>
  )
}

function Contact() {
  return (
    <footer id="contato" className="contact">
      <div className="wrap">
        <h2>Vamos <em>conversar?</em></h2>
        <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <div className="social">
          <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`}><Phone size={16} aria-hidden /> {PHONE}</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden /> LinkedIn</a>
          {GITHUB && <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16} aria-hidden /> GitHub</a>}
          <a href={`mailto:${EMAIL}`}><Mail size={16} aria-hidden /> E-mail</a>
        </div>
        <div className="foot"><span className="mono">© {new Date().getFullYear()} Vitor Alves</span><a className="mono" href="#inicio">Voltar ao topo</a></div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch (e) {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B0B0C' : '#F3F2EE')
  }, [theme])
  return (
    <>
      <Bar theme={theme} setTheme={setTheme} />
      <main><Hero /><Work /><About /><Skills /><Experience /><CaseStudy /></main>
      <Contact />
    </>
  )
}
