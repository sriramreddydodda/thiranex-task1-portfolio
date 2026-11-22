import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, GraduationCap, BriefcaseBusiness, Sparkles, Send, CheckCircle2, Terminal, Database, Globe2, ShieldCheck, HeartPulse, Search, Trophy, TrainFront, FolderKanban } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "";

const PROFILE = {
  name: "SRIRAM REDDY",
  email: "sriramreddydodda@gmail.com",
  github: "https://github.com/sriramreddydodda",
  linkedin: "https://www.linkedin.com/in/dodda-sriram-reddy-153154329"
};

const skills = [
  { name: "Java", level: "Programming", icon: Terminal },
  { name: "HTML", level: "Frontend", icon: Code2 },
  { name: "CSS", level: "Frontend", icon: Code2 },
  { name: "JavaScript", level: "Programming", icon: Terminal },
  { name: "React", level: "Frontend", icon: Globe2 },
  { name: "Spring Boot", level: "Backend", icon: BriefcaseBusiness },
  { name: "MySQL", level: "Database", icon: Database }
];

const projects = [
  { title: "Secure Online Voting System", category: "Web application", description: "A project focused on a secure and accessible online voting workflow, from voter interaction to election management.", stack: ["Java", "React", "MySQL"], status: "Project" , icon: ShieldCheck},
  { title: "Mini Project Idea Register", category: "CRUD application", description: "A student project registry to create, view, update and manage mini-project proposals with guide details.", stack: ["React", "Spring Boot", "MySQL"], status: "Project", icon: FolderKanban},
  { title: "Medilink", category: "Healthcare concept", description: "A digital healthcare project concept designed around making useful health-related information and services easier to access.", stack: ["Web", "JavaScript"], status: "Project", icon: HeartPulse},
  { title: "Campus Lost & Found", category: "Campus utility", description: "A campus-focused platform concept for reporting, discovering and reconnecting lost items with their owners.", stack: ["React", "JavaScript"], status: "Project", icon: Search},
  { title: "IPL Auction Game", category: "Interactive game", description: "An interactive cricket auction experience concept with team building, player selection and auction-style gameplay.", stack: ["JavaScript", "React"], status: "Project", icon: Trophy},
  { title: "RAILMIND INDIA", category: "Railway innovation", description: "An in-progress public-benefit concept exploring practical digital support for Indian railway signalling and operations.", stack: ["Web", "Research", "Data"], status: "In progress", icon: TrainFront }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");
  const closeMenu = () => setMenuOpen(false);
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function submitContact(event) {
    event.preventDefault(); setSending(true); setNotice("");
    try {
      const response = await fetch(`${API_BASE}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send message.");
      setNotice(data.message); setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setNotice(error.message || "Contact service unavailable. You can email me directly instead.");
    } finally { setSending(false); }
  }

  return <>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S.</span><span>SRIRAM<span className="brand-dot">.</span>DEV</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>{["About", "Skills", "Projects", "Experience", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> ASPIRING FULL-STACK DEVELOPER</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>Sriram <span>Reddy.</span></h1>
          <h2>Building useful digital products<br/><span className="outline-text">with purpose.</span></h2>
          <p className="hero-description">Aspiring full-stack developer passionate about building useful digital products and learning new technologies.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <Mail size={16}/></a></div>
          <div className="social-row"><a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18}/></a><span className="social-note">Connect with me</span></div>
        </div>
        <div className="hero-visual profile-visual"><div className="visual-glow"/><div className="portrait-frame"><img src="/sriram-profile.png" alt="Portrait of Sriram Reddy"/></div><div className="floating-chip chip-one"><Code2 size={16}/> Full-stack learner</div><div className="floating-chip chip-two"><Sparkles size={16}/> Always learning</div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <span>me.</span></h2></div>
        <div className="about-grid">
          <div className="about-intro"><p className="large-copy">I enjoy turning ideas into <span>useful digital experiences.</span></p><p className="muted-copy">I'm an aspiring full-stack developer passionate about building useful digital products and learning new technologies. I enjoy exploring how frontend and backend technologies work together to solve practical problems.</p></div>
          <div className="info-card"><div className="info-icon"><GraduationCap/></div><div><span className="card-label">EDUCATION</span><h3>B.Tech — Electronics and Communication Engineering</h3><p>Anurag University · Graduating 2028</p></div></div>
          <div className="info-card"><div className="info-icon"><Sparkles/></div><div><span className="card-label">ACADEMIC SNAPSHOT</span><h3>CGPA: 7.43</h3><p>Based in Telangana, India. Focused on continuous learning and practical project development.</p></div></div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills"><div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Skills & <span>technologies.</span></h2><p className="muted-copy">Technologies I work with and continue to strengthen.</p></div><div className="skills-grid">{skills.map(({name, level, icon: Icon}) => <div className="skill-card" key={name}><div className="skill-icon"><Icon size={20}/></div><div><h3>{name}</h3><span>{level}</span></div><ArrowUpRight className="skill-arrow" size={16}/></div>)}</div></section>

      <section className="section-wrap projects-section" id="projects"><div className="section-heading heading-row"><div><span className="section-index">03 / SELECTED WORK</span><h2>Things I'm <span>building.</span></h2></div><span className="project-count">06 PROJECTS</span></div><div className="projects-grid">{projects.map(({title, category, description, stack, status, icon: Icon}, index) => <article className="project-card" key={title}><div className={`project-art art-${(index % 3) + 1}`}><span className="project-number">0{index+1}</span><div className="project-art-icon"><Icon size={42}/></div><span className="art-caption">{category}</span></div><div className="project-body"><div className="project-meta"><span>{category}</span><span className="project-status">{status}</span></div><h3>{title}</h3><p>{description}</p><div className="tag-row">{stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><p className="project-note"><Sparkles size={16}/> Project descriptions reflect the current scope; more details and live demos can be added as they become available.</p></section>

      <section className="section-wrap experience-section" id="experience"><div className="section-heading"><span className="section-index">04 / JOURNEY</span><h2>Learning through <span>experience.</span></h2></div><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div><span className="card-label">INTERNSHIP</span><h3>Thiranex EduTech LLP</h3><p className="timeline-role">Full Stack Development Intern</p><p className="muted-copy">Building practical development experience through internship tasks and hands-on learning across full-stack technologies.</p></div><span className="timeline-tag">INTERN</span></div><div className="timeline-item"><span className="timeline-dot"/><div><span className="card-label">2028 · EXPECTED</span><h3>Anurag University</h3><p className="timeline-role">B.Tech — Electronics and Communication Engineering</p><p className="muted-copy">Developing engineering fundamentals alongside software development skills.</p></div><span className="timeline-tag">STUDENT</span></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-copy"><span className="section-index">05 / CONTACT</span><h2>Have an idea?<br/><span>Let's connect.</span></h2><p className="muted-copy">Have an opportunity, a project idea or just want to say hello? Send me a message.</p><a className="contact-email" href={`mailto:${PROFILE.email}`}><Mail size={18}/> {PROFILE.email} <ArrowUpRight size={16}/></a><div className="social-row contact-social"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={18}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a></div></div>
        <form className="contact-form" onSubmit={submitContact}><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={updateForm} placeholder="Enter your name" required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={updateForm} placeholder="you@example.com" required/></label></div><label>Subject<input name="subject" value={form.subject} onChange={updateForm} placeholder="What's this about?"/></label><label>Message<textarea name="message" value={form.message} onChange={updateForm} placeholder="Write your message..." rows="5" required/></label><button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"} <Send size={16}/></button>{notice && <p className="form-notice"><CheckCircle2 size={16}/> {notice}</p>}<p className="form-footnote">If the contact service is not configured yet, email me directly using the address shown.</p></form>
      </div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SRIRAM<span className="brand-dot">.</span>DEV</span></a><p>Designed & built with curiosity. © {new Date().getFullYear()} Sriram Reddy.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </>;
}
export default App;
