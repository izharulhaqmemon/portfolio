import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Terminal,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    number: "01",
    name: "FINNAC",
    category: "BACKEND ENGINEERING",
    title: "Core banking & microfinance system",
    description:
      "A modular financial application bringing client management, savings, loans, transactions, accounting and reporting into one structured system.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JUnit"],
    outcome: "6 connected modules",
    visual: "finnac",
    detail:
      "Designed around clear module boundaries, REST APIs and authenticated access to financial workflows.",
    href: "https://github.com/izharulhaqmemon",
    action: "GitHub profile",
  },
  {
    number: "02",
    name: "TalashNow",
    category: "FULL-STACK DEVELOPMENT",
    title: "A more useful way to reunite lost items",
    description:
      "A lost-and-found platform for reporting items, searching listings and managing claims through a connected frontend and backend.",
    stack: ["Java", "Spring Boot", "MongoDB", "JavaScript"],
    outcome: "6 core features",
    visual: "talash",
    detail:
      "Built backend services for item reporting, search, authentication and claim management, with data relationships designed around reports and owners.",
    href: "https://talashnow.vercel.app",
    action: "Open live demo",
  },
  {
    number: "03",
    name: "Predictive Maintenance",
    category: "MACHINE LEARNING",
    title: "Finding signals in equipment data",
    description:
      "An analysis and classification project exploring patterns associated with industrial equipment failure.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    outcome: "77.9% F1-score",
    visual: "ml",
    detail:
      "Compared four classifiers and addressed target leakage before evaluating results with metrics suited to an imbalanced failure dataset.",
    href: "https://github.com/izharulhaqmemon",
    action: "GitHub profile",
  },
];

const skills = [
  { group: "Backend", items: "Java, Spring Boot, REST APIs, JWT, JUnit" },
  { group: "Data & storage", items: "PostgreSQL, MongoDB, SQL, data modelling" },
  { group: "Frontend", items: "JavaScript, HTML, CSS, responsive interfaces" },
  { group: "Machine learning", items: "Python, Scikit-learn, Pandas, NumPy, EDA" },
  { group: "Foundations", items: "OOP, DSA, Git, debugging, software testing" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Izhar Ul Haq home">
          <span className="wordmark-mark">I.</span>
          <span>IZHAR UL HAQ</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES</div>
          <p className="eyebrow">SOFTWARE ENGINEERING · KARACHI, PAKISTAN</p>
          <h1>Building the systems <span>behind better software.</span></h1>
          <p className="hero-description">
            I&apos;m Izhar, a Software Engineering student focused on backend development,
            full-stack applications and machine learning. I like understanding how a
            system fits together—and building it carefully, from data to interface.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="mailto:izharulhaq.dev@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-label">CURRENTLY</span> Final-year student</span>
            <span><span className="meta-label">FOCUS</span> Backend & software engineering</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of connected software components" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-core"><Terminal size={38} strokeWidth={1.25} /></div>
          <div className="art-node node-a"><span className="node-line" />API</div>
          <div className="art-node node-b"><span className="node-line" />DATA</div>
          <div className="art-node node-c"><span className="node-line" />LOGIC</div>
          <p className="art-caption">STRUCTURE · LOGIC · DELIVERY</p>
        </div>
        <div className="hero-bottomline">
          <span>SELECTED WORK <span className="line-number">/ 01—03</span></span>
          <a href="#work" aria-label="Scroll to selected work"><ArrowDownRight size={18} /></a>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio highlights">
        <div><strong>3</strong><span>PROJECTS ACROSS<br />SOFTWARE & ML</span></div>
        <div><strong>6</strong><span>MODULES IN<br />FINNAC</span></div>
        <div><strong>10k</strong><span>RECORDS ANALYSED<br />IN ML PROJECT</span></div>
        <div><strong>3.66<span className="small-score">/4.00</span></strong><span>ACADEMIC CGPA<br />SSUET</span></div>
      </section>

      <section className="work-section section-shell" id="work">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">A SELECTION OF MY WORK</p><h2>Projects with a purpose.</h2></div>
            <p className="section-intro">Different problems, different tools—one consistent focus on understanding the details and making the solution work.</p>
          </div>
        </Reveal>
        <div className="project-list">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article className="project-card">
                <div className={`project-visual ${project.visual}`}>
                  <div className="visual-topline"><span>{project.name.toUpperCase()}</span><span>{project.number} / 03</span></div>
                  {project.visual === "finnac" && (
                    <div className="dashboard-mock">
                      <div className="mock-sidebar"><i /><i /><i /><i /></div>
                      <div className="mock-main"><div className="mock-title" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="mock-row" /><div className="mock-row short" /></div>
                    </div>
                  )}
                  {project.visual === "talash" && (
                    <div className="search-mock">
                      <div className="search-icon"><span /></div><div className="search-heading">Find what matters.</div><div className="search-field"><span>Search lost or found items</span><ArrowRight size={14} /></div><div className="item-tiles"><i /><i /><i /></div>
                    </div>
                  )}
                  {project.visual === "ml" && (
                    <div className="ml-mock"><div className="ml-big">77.9<span>%</span></div><div className="ml-label">F1 SCORE · RANDOM FOREST</div><div className="ml-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="ml-axis"><span>PRECISION</span><span>RECALL</span><span>F1-SCORE</span></div></div>
                  )}
                  <span className="visual-glow" />
                </div>
                <div className="project-content">
                  <div className="project-top"><span className="project-category">{project.category}</span><span className="project-number">{project.number}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-detail">{project.detail}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-footer">
                    <span className="project-outcome"><span className="outcome-dot" />{project.outcome}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">{project.action} <ArrowUpRight size={15} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="project-note">Project links currently point to the GitHub profile. Replace each with its exact repository or live demo before publishing.</p>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <Reveal>
            <div><p className="eyebrow">A LITTLE ABOUT HOW I WORK</p><h2>Curiosity first.<br /><span>Clarity in the details.</span></h2></div>
          </Reveal>
          <Reveal>
            <div className="about-copy">
              <p>I&apos;m completing my Software Engineering degree at Sir Syed University of Engineering & Technology. My projects have taken me from backend services and database design to full-stack workflows and predictive modelling.</p>
              <p>I&apos;m especially interested in the parts of software that make everything else dependable: clear APIs, sensible data structures, thoughtful testing and code that stays understandable as a project grows.</p>
              <p>Right now, I&apos;m looking for an internship or entry-level opportunity where I can contribute, learn from experienced engineers and keep improving through real development work.</p>
              <div className="about-signoff"><span className="signoff-rule" /> <span>IZHAR UL HAQ</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <Reveal><div className="section-heading"><div><p className="eyebrow">TOOLS & FOUNDATIONS</p><h2>What I work with.</h2></div><p className="section-intro">A practical toolkit built through coursework and projects, with room to keep growing.</p></div></Reveal>
        <div className="skills-list">
          {skills.map((skill, i) => <Reveal key={skill.group}><div className="skill-row"><span className="skill-index">0{i + 1}</span><h3>{skill.group}</h3><p>{skill.items}</p><ArrowUpRight size={16} className="skill-arrow" /></div></Reveal>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <Reveal>
            <p className="eyebrow">HAVE A ROLE IN MIND?</p>
            <h2>Let&apos;s talk about<br /><span>what I can contribute.</span></h2>
            <p className="contact-description">I&apos;m open to software engineering internships and entry-level opportunities. If my work looks relevant to your team, I&apos;d be glad to connect.</p>
            <a className="button button-primary contact-button" href="mailto:izharulhaq.dev@gmail.com">Email me <ArrowUpRight size={17} /></a>
          </Reveal>
          <div className="contact-links">
            <a href="mailto:izharulhaq.dev@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>izharulhaq.dev@gmail.com</span><ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/izharulhaqmemon/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small>linkedin.com/in/izharulhaqmemon</span><ArrowUpRight size={16} /></a>
            <a href="https://github.com/izharulhaqmemon" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GITHUB</small>github.com/izharulhaqmemon</span><ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top"><span className="wordmark-mark">I.</span><span>IZHAR UL HAQ</span></a>
        <span>Designed with care. Built to keep improving.</span>
        <a href="#top" className="back-top">BACK TO TOP <MoveUpRight size={13} /></a>
      </footer>
    </main>
  );
}
