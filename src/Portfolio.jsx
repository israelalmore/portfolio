import { useState, useEffect } from "react";

const IconMail     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconLinkedin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const IconGithub   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const IconExternal = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior: smooth; }
  body { background: #050505; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #050505; }
  ::-webkit-scrollbar-thumb { background: #00ff88; border-radius: 2px; }
  @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)} }
  @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-40px,30px) scale(1.15)} 66%{transform:translate(20px,-20px) scale(0.85)} }
  @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,40px) scale(1.05)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes cursor { 0%,100%{opacity:1} 50%{opacity:0} }
  .fu1{animation:fadeUp .7s ease .1s both}
  .fu2{animation:fadeUp .7s ease .3s both}
  .fu3{animation:fadeUp .7s ease .5s both}
  .fu4{animation:fadeUp .7s ease .7s both}
  .cursor{animation:cursor 1s step-end infinite;color:#00ff88}
  .nav-link{transition:color .2s}
  .nav-link:hover{color:#00ff88 !important}
  .project-card{transition:transform .25s,border-color .25s,box-shadow .25s}
  .project-card:hover{transform:translateY(-6px);border-color:rgba(0,255,136,.35) !important;box-shadow:0 24px 60px rgba(0,0,0,.5)}
  .project-card:hover .card-arrow{color:#00ff88 !important}
  .tech-card{transition:all .2s;cursor:default}
  .tech-card:hover{border-color:rgba(0,255,136,.35) !important;transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,255,136,.06)}
  .btn-green{transition:all .2s}
  .btn-green:hover{background:#00e07a !important;box-shadow:0 0 32px rgba(0,255,136,.4);transform:translateY(-2px)}
  .btn-ghost{transition:all .2s}
  .btn-ghost:hover{border-color:#00ff88 !important;color:#00ff88 !important;background:rgba(0,255,136,.04) !important;transform:translateY(-2px)}
  .stat-card{transition:border-color .2s}
  .stat-card:hover{border-color:rgba(0,255,136,.25) !important}
`;

const TECHS = [
  { label:"HTML5",      icon:"devicon-html5-plain colored" },
  { label:"CSS3",       icon:"devicon-css3-plain colored" },
  { label:"JavaScript", icon:"devicon-javascript-plain colored" },
  { label:"TypeScript", icon:"devicon-typescript-plain colored" },
  { label:"PHP",        icon:"devicon-php-plain colored" },
  { label:"Java",       icon:"devicon-java-plain colored" },
  { label:"MySQL",      icon:"devicon-mysql-plain colored" },
  { label:"MongoDB",    icon:"devicon-mongodb-plain colored" },
  { label:"SQL",        icon:"devicon-postgresql-plain colored" },
  { label:"Git",        icon:"devicon-git-plain colored" },
  { label:"GitHub",     icon:"devicon-github-original" },
  { label:"VS Code",    icon:"devicon-vscode-plain colored" },
];

const PROJECTS = [
  { name:"rest-app",      lang:"TypeScript", lc:"#3178c6", desc:"REST API built with TypeScript — clean architecture and modern patterns.",        link:"https://github.com/israelalmore/rest-app" },
  { name:"FocusHub",      lang:"JavaScript", lc:"#f0c000", desc:"Focus hub by students, for students. Built at a Hackathon under real pressure.",   link:"https://github.com/JorgeCordova9/FocusHub" },
  { name:"Forever Events", lang:"PHP",        lc:"#8892be", desc:"UI/UX design project exploring modern layouts with HTML, CSS and PHP.",             link:"https://github.com/israelalmore/Forever-Events" },
  { name:"Alpha Project", lang:"Java",       lc:"#f89820", desc:"Team Java project — experimenting with backend architecture and OOP patterns.", link:"https://github.com/israelalmore/alpha-project" },
];

const PHRASES = ["Web Developer", "DAW Student", "Hackathon Survivor", "Problem Solver"];
const STATS   = [["17","REPOS"], ["1","HACKATHON"], ["∞","REDBULL'S"], ["1st","YEAR DAW"]];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [text,     setText]     = useState("");
  const [pidx,     setPidx]     = useState(0);
  const [cidx,     setCidx]     = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);
    return () => { document.head.removeChild(style); document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const phrase = PHRASES[pidx];
    let t;
    if (!deleting && cidx < phrase.length) {
      t = setTimeout(() => { setText(phrase.slice(0, cidx + 1)); setCidx(c => c + 1); }, 80);
    } else if (!deleting && cidx === phrase.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && cidx > 0) {
      t = setTimeout(() => { setText(phrase.slice(0, cidx - 1)); setCidx(c => c - 1); }, 42);
    } else {
      t = setTimeout(() => { setDeleting(false); setCidx(0); setPidx(i => (i + 1) % PHRASES.length); }, 300);
    }
    return () => clearTimeout(t);
  }, [cidx, deleting, pidx]);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const S = {
    root:    { fontFamily:"'Inter',sans-serif", background:"#050505", color:"#fff", minHeight:"100vh", overflowX:"hidden" },
    nav:     { position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.2rem 7%", background:scrolled?"rgba(5,5,5,0.92)":"transparent", backdropFilter:scrolled?"blur(20px)":"none", borderBottom:scrolled?"1px solid rgba(255,255,255,.06)":"1px solid transparent", transition:"all .3s" },
    logo:    { fontWeight:800, fontSize:"1.05rem", color:"#00ff88", fontFamily:"monospace", letterSpacing:"-0.5px" },
    navBtn:  { background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,.45)", fontSize:"0.82rem", fontFamily:"monospace", letterSpacing:"0.5px" },
    hero:    { minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 7%", position:"relative", overflow:"hidden" },
    section: { padding:"8rem 7%", borderTop:"1px solid rgba(255,255,255,.05)" },
    secTag:  { fontFamily:"monospace", fontSize:"0.75rem", color:"#00ff88", letterSpacing:"4px", marginBottom:"1rem" },
    secH2:   { fontSize:"clamp(2rem,4.5vw,3.8rem)", fontWeight:800, letterSpacing:"-2px", marginBottom:"3rem" },
  };

  return (
    <div style={S.root}>

      <nav style={S.nav}>
        <span style={S.logo}>&lt;israel /&gt;</span>
        <div style={{ display:"flex", gap:"2.5rem" }}>
          {["about","stack","projects","contact"].map(id => (
            <button key={id} className="nav-link" style={S.navBtn} onClick={() => go(id)}>{id}</button>
          ))}
        </div>
      </nav>

      <section id="home" style={S.hero}>
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <div style={{ position:"absolute", top:"8%", right:"3%", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,255,136,.055) 0%,transparent 70%)", animation:"blob1 9s ease-in-out infinite", filter:"blur(50px)" }} />
          <div style={{ position:"absolute", bottom:"5%", left:"5%", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle,rgba(139,92,246,.07) 0%,transparent 70%)", animation:"blob2 11s ease-in-out infinite", filter:"blur(65px)" }} />
          <div style={{ position:"absolute", top:"45%", left:"35%", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,196,255,.035) 0%,transparent 70%)", animation:"blob3 14s ease-in-out infinite", filter:"blur(55px)" }} />
        </div>
        <div style={{ position:"relative", zIndex:1, maxWidth:950 }}>
          <p className="fu1" style={{ fontFamily:"monospace", fontSize:"0.85rem", color:"#00ff88", letterSpacing:"3px", marginBottom:"1.2rem" }}>// Hello World — I'm</p>
          <h1 className="fu2" style={{ fontSize:"clamp(3.5rem,11vw,8.5rem)", fontWeight:900, lineHeight:1, letterSpacing:"-4px", marginBottom:"1.2rem" }}>
            Israel<br /><span style={{ color:"#00ff88" }}>Alcántara</span>
          </h1>
          <p className="fu3" style={{ fontSize:"clamp(1rem,1.8vw,1.3rem)", color:"rgba(255,255,255,.4)", fontWeight:300, marginBottom:"1rem", fontFamily:"monospace" }}>
            {text}<span className="cursor">|</span>
          </p>
          <p className="fu3" style={{ fontSize:"1rem", color:"#b3b3b3", maxWidth:460, lineHeight:1.85, marginBottom:"2.5rem" }}>
            DAW Student @ Stucom Barcelona · Building things that matter. 17 repos and counting. ☕
          </p>
          <div className="fu4" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <button className="btn-green" onClick={() => go("projects")} style={{ padding:"0.85rem 2.2rem", background:"#00ff88", color:"#000", fontWeight:800, border:"none", borderRadius:6, cursor:"pointer", fontSize:"0.9rem" }}>View projects →</button>
            <button className="btn-ghost" onClick={() => go("contact")} style={{ padding:"0.85rem 2.2rem", background:"transparent", color:"#fff", border:"1px solid rgba(255,255,255,.13)", borderRadius:6, cursor:"pointer", fontSize:"0.9rem" }}>Contact</button>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:"3rem", left:"7%", display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <div style={{ width:1, height:56, background:"linear-gradient(to bottom,transparent,#00ff88)" }} />
          <span style={{ fontFamily:"monospace", fontSize:"0.65rem", color:"rgba(255,255,255,.25)", letterSpacing:"2px", writingMode:"vertical-lr" }}>SCROLL</span>
        </div>
      </section>

      <section id="about" style={S.section}>
        <p style={S.secTag}>01 / ABOUT</p>
        <h2 style={S.secH2}>Building the web,<br /><span style={{ color:"rgba(255,255,255,.25)" }}>one commit at a time.</span></h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>
          <div>
            <p style={{ color:"#b3b3b3", lineHeight:1.9, marginBottom:"1.4rem" }}>
              19 years old, Barcelona. Studying <strong style={{ color:"#fff" }}>Web Application Development (DAW)</strong> at Stucom. I learn by building, break things, and start again.
            </p>
            <p style={{ color:"#b3b3b3", lineHeight:1.9 }}>
              Competed in a <strong style={{ color:"#fff" }}>Hackathon</strong> and would do it again. Goal: become a well-rounded developer and build things that actually matter.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
            {STATS.map(([n,l]) => (
              <div key={l} className="stat-card" style={{ padding:"2rem 1.2rem", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, textAlign:"center" }}>
                <div style={{ fontSize:"2.4rem", fontWeight:900, color:"#00ff88", letterSpacing:"-2px" }}>{n}</div>
                <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,.35)", fontFamily:"monospace", marginTop:"0.4rem", letterSpacing:"1.5px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" style={{ ...S.section, background:"rgba(255,255,255,.01)" }}>
        <p style={S.secTag}>02 / STACK</p>
        <h2 style={S.secH2}>Tech Stack</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))", gap:"1rem" }}>
          {TECHS.map(({ label, icon }) => (
            <div key={label} className="tech-card" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem", padding:"1.6rem 1rem", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.06)", borderRadius:10 }}>
              <i className={icon} style={{ fontSize:"2.2rem" }} />
              <span style={{ fontFamily:"monospace", fontSize:"0.72rem", color:"rgba(255,255,255,.5)", letterSpacing:"0.5px" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={S.section}>
        <p style={S.secTag}>03 / PROJECTS</p>
        <h2 style={S.secH2}>Selected Work</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
          {PROJECTS.map(p => (
            <div key={p.name} className="project-card" style={{ padding:"2rem", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.06)", borderRadius:12, display:"flex", flexDirection:"column", gap:"1rem" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:"0.7rem", fontFamily:"monospace", padding:"0.25rem 0.75rem", borderRadius:20, background:`${p.lc}1a`, color:p.lc, fontWeight:700 }}>{p.lang}</span>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ color:"rgba(255,255,255,.25)" }}><IconExternal /></a>
              </div>
              <h3 style={{ fontFamily:"monospace", fontSize:"1.1rem", fontWeight:700, letterSpacing:"-0.5px" }}>{p.name}</h3>
              <p style={{ fontSize:"0.875rem", color:"#b3b3b3", lineHeight:1.75, flex:1 }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="card-arrow" style={{ fontSize:"0.8rem", color:"rgba(255,255,255,.3)", fontFamily:"monospace", textDecoration:"none", transition:"color .2s" }}>View repo →</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ ...S.section, background:"rgba(255,255,255,.01)", textAlign:"center" }}>
        <p style={S.secTag}>04 / CONTACT</p>
        <h2 style={{ fontSize:"clamp(2.5rem,7vw,6rem)", fontWeight:900, letterSpacing:"-3px", lineHeight:1.05, marginBottom:"1.5rem" }}>
          Let's build<br /><span style={{ color:"#00ff88" }}>something.</span>
        </h2>
        <p style={{ color:"#b3b3b3", fontSize:"1rem", lineHeight:1.85, maxWidth:400, margin:"0 auto 3rem" }}>
          Have a project in mind or just want to chat? Reach out.
        </p>
        <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
          <a href="mailto:israelalmore@gmail.com" className="btn-green" style={{ padding:"0.9rem 2.2rem", background:"#00ff88", color:"#000", fontWeight:800, borderRadius:6, textDecoration:"none", fontSize:"0.9rem", display:"inline-flex", alignItems:"center", gap:"0.5rem" }}>
            <IconMail /> Email
          </a>
          <a href="https://linkedin.com/in/israel-alcantara-moreno" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding:"0.9rem 2.2rem", border:"1px solid rgba(255,255,255,.12)", color:"#fff", borderRadius:6, textDecoration:"none", fontSize:"0.9rem", display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"transparent" }}>
            <IconLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/israelalmore" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding:"0.9rem 2.2rem", border:"1px solid rgba(255,255,255,.12)", color:"#fff", borderRadius:6, textDecoration:"none", fontSize:"0.9rem", display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"transparent" }}>
            <IconGithub /> GitHub
          </a>
        </div>
      </section>

      <footer style={{ padding:"2rem 7%", borderTop:"1px solid rgba(255,255,255,.05)", textAlign:"center" }}>
        <p style={{ fontFamily:"monospace", fontSize:"0.72rem", color:"rgba(255,255,255,.18)", letterSpacing:"2px" }}>
          ISRAEL ALCÁNTARA · 2025 · BARCELONA
        </p>
      </footer>

    </div>
  );
}