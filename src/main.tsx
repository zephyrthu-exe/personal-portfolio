import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/press-start-2p';
import '@fontsource/vt323';
import { siTelegram, siFacebook, siX, siWhatsapp, siGithub } from 'simple-icons';
import './style.css';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { defaults, type Portfolio } from './content';
import Admin from './Admin';
import { SkillIcon } from './skill-icons';
import { isSafeExternalUrl } from './urls';

const linkedinIcon = { title: 'LinkedIn', path: 'M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM8.1 18.75H5.13V9.2H8.1v9.55zM6.61 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm12.14 10.85h-2.96V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.78 1.21-1.78 2.46v4.73H9.5V9.2h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 2.99 0 3.57 1.97 3.57 4.53v5.27z' };

function Koala({ stage }: { stage: number }) {
 const crops = ['50 75 300 320', '430 70 315 330', '35 560 325 340', '435 560 330 370']; stage = Math.max(0, Math.min(3, stage));
 return <svg viewBox={crops[stage]} aria-hidden="true" preserveAspectRatio="xMidYMid meet"><image href={`${import.meta.env.BASE_URL}koala-portraits.png`} width="765" height="1024" /></svg>;
}

function App() {
 const [content, setContent] = useState<Portfolio>(defaults);
 useEffect(() => onSnapshot(doc(db, 'portfolio', 'public'), snapshot => { if (snapshot.exists()) setContent(snapshot.data() as Portfolio); else setContent(defaults); }, error => console.error('Portfolio content could not be loaded:', error.code)), []);
 const certificates = [...content.certificates].sort((a,b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
 const milestones = content.education;

 const [dark, setDark] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'dark'; } catch { return false; } });
 useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch { /* The theme still works for this visit. */ } }, [dark]);
 const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
 const certificateDialog = useRef<HTMLDialogElement>(null);
 useEffect(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const targets = Array.from(document.querySelectorAll<HTMLElement>('.hero-copy, .section-head, .timeline-item, .domino-grid, .skills-grid'));
  let frame = 0;
  const update = () => {
   frame = 0;
   targets.forEach(element => {
    if (motion.matches) { element.style.removeProperty('--reveal-opacity'); element.style.removeProperty('--reveal-offset'); return; }
    const rect = element.getBoundingClientRect();
    const fadeDistance = Math.min(180, window.innerHeight * .22);
    const entering = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / fadeDistance));
    const leaving = Math.min(1, Math.max(0, rect.bottom / fadeDistance));
    const visibility = Math.min(entering, leaving);
    element.style.setProperty('--reveal-opacity', String(Math.max(.08, visibility)));
    element.style.setProperty('--reveal-offset', `${(1 - visibility) * 16}px`);
   });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  update(); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule); motion.addEventListener('change', schedule);
  return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); motion.removeEventListener('change', schedule); cancelAnimationFrame(frame); };
 }, []);
 const [loading, setLoading] = useState(true);
 const [progress, setProgress] = useState(0);
 useEffect(() => { const start = performance.now(); let frame = 0; const tick = (now: number) => { const next = Math.min(18, Math.floor((now - start) / 100)); setProgress(next); if (next < 18) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, []);
 useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 2200); return () => window.clearTimeout(timer); }, []);
 useEffect(() => { let frame = 0; const update = () => { const range = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', String(range > 0 ? window.scrollY / range : 0)); frame = 0; }; const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); }; update(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); }; }, []);
 return <>
 {loading && <div className="loader" role="status" aria-label="Koala is initiating the portfolio!"><div className="loader-inner"><div className="loading-bar-wrap"><div className="loading-runner" aria-hidden="true" style={{left: `${progress / 18 * 100}%`}}><svg viewBox="0 0 56 36" shapeRendering="crispEdges"><path fill="#171714" d="M7 15h3v-3h3V9h14v2h3v2h3v4h3v9h-3v2H12v-2H9v-3H7z"/><path fill="#f1f0e9" d="M10 16h3v-3h3v-2h10v2h3v2h3v3h2v6h-3v2H13v-2h-3z"/><path fill="#171714" d="M31 8h2V5h7v2h3v4h3v3h2v9h-2v2H34v-2h-3v-3h-2V12h2z"/><path fill="#f1f0e9" d="M33 10h2V8h4v2h3v3h3v2h1v6h-2v2H35v-2h-2v-2h-2v-6h2z"/><path fill="#171714" d="M28 5h2V3h5v2h2v5h-2v2h-5v-2h-2zM41 14h2v2h-2zm3 3h4v5h-4z"/><path fill="#f1f0e9" d="M30 5h4v4h-4z"/><path className="runner-leg back-leg" fill="#171714" d="M12 24h3v7h-3z"/><path className="runner-leg front-leg" fill="#171714" d="M17 25h3v7h-3z"/><path className="runner-leg back-leg" fill="#171714" d="M27 25h3v7h-3z"/><path className="runner-leg front-leg" fill="#171714" d="M32 24h3v7h-3z"/></svg></div><div className="loading-track">{Array.from({length: 18}, (_, i) => <span className={`loading-block${i < progress ? " is-filled" : ""}`} key={i} />)}</div></div><div className="loading-label">Koala is initiating the portfolio!</div></div></div>}
 <div className="ambient" aria-hidden="true"><div className="ambient-grid"/><div className="ambient-sun"/><div className="ambient-cloud ac1"/><div className="ambient-cloud ac2"/><div className="ambient-mountain am1"/><div className="ambient-mountain am2"/><div className="ambient-tree at1"/><div className="ambient-tree at2"/><div className="ambient-tree at3"/><div className="woodland"><div className="woodland-hill"/><div className="waterfall"><i/><i/><i/></div><div className="bamboo b1"/><div className="bamboo b2"/><div className="bamboo b3"/><div className="woodland-moon"/></div><div className="leaves"><i/><i/><i/><i/><i/><i/></div><div className="ambient-code code1">&lt; breathe /&gt;<br/>const journey = true;<br/>while (learning) {'{'}<br/>&nbsp; grow();<br/>{'}'}</div><div className="ambient-code code2">// stay curious<br/>0101 &nbsp; 1010<br/>&lt;/&gt; &nbsp; _</div></div><div className="site" style={{'--heading-scale': Math.max(.8, Math.min(1.5, (content.fontSizes?.headings ?? 100) / 100)), '--text-scale': Math.max(.8, Math.min(1.5, (content.fontSizes?.text ?? 100) / 100))} as CSSProperties}>
 <header className="header wrap"><nav aria-label="Main navigation"><a href="#about">ABOUT</a><a href="#skills">SKILLS</a><a href="#achievements">CERTIFICATES</a><a href="#journey">EDUCATION</a></nav><div className="header-actions"><button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark}>{dark ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1m0-15.6-2.1 2.1M6.3 17.7l-2.1 2.1" fill="none" stroke="currentColor" strokeWidth="2"/></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 16.2A9.5 9.5 0 0 1 7.8 3.5 9.5 9.5 0 1 0 20.5 16.2Z"/></svg>}</button><a className="header-link" href="#contact">FIND ME</a></div></header>
 <main id="top"><section className="hero wrap" id="about"><div className="hero-copy"><h1>Readme<span className="red">.md</span></h1><p className="intro">{content.intro}</p></div>
</section>

 <section className="section wrap skills" id="skills"><div className="section-head"><div><h2>SKILLS<span>.</span></h2></div></div><div className="skills-grid"><article className="skills-group"><h3>Development</h3><ul className="skill-list">{content.skills.map(skill => <li key={skill.label}><span className="skill-icons" aria-hidden="true"><SkillIcon name={skill.icon}/></span><span>{skill.label}</span></li>)}</ul></article></div></section>
 <section className="section achievements" id="achievements"><div className="wrap"><div className="section-head"><div><h2>CERTIFICATES<br/><span>&amp; PARTICIPATIONS.</span></h2></div></div><div className="domino-grid">{certificates.map((item, index) => <button type="button" className="domino" key={item.title} onClick={() => { setSelectedCertificate(index); certificateDialog.current?.showModal(); }} aria-label={`${index + 1}. ${item.title}, ${item.date}: view details`}><span className="domino-top" aria-hidden="true"><span className="domino-dots">{Array.from({length:index+1}, (_, dot) => <span key={dot}/>)}</span></span><span className="domino-bottom"><span className="domino-date">{item.date} / {item.type}</span><span className="domino-title">{item.title}</span><span className="domino-action">VIEW DETAILS ↗</span></span></button>)}</div><dialog ref={certificateDialog} className="certificate-dialog" aria-labelledby="certificate-title" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}><div className="window-titlebar"><span>MILESTONE.EXE</span><button type="button" aria-label="Close details" onClick={() => certificateDialog.current?.close()}>×</button></div>{selectedCertificate !== null && certificates[selectedCertificate] && <div className="window-body"><p className="window-meta">{certificates[selectedCertificate].date} / {certificates[selectedCertificate].type}</p><h3 id="certificate-title">{certificates[selectedCertificate].title}</h3><p>{certificates[selectedCertificate].description}</p>{certificates[selectedCertificate].expirationDate && <p className="certificate-expiration">EXPIRES: {certificates[selectedCertificate].expirationDate}</p>}{isSafeExternalUrl(certificates[selectedCertificate].url) && <a className="certificate-details" href={certificates[selectedCertificate].url} target="_blank" rel="noreferrer">MORE DETAILS ↗</a>}<button className="window-close" type="button" onClick={() => certificateDialog.current?.close()}>CLOSE</button></div>}</dialog></div></section>

 <section className="section wrap" id="journey"><div className="section-head"><div><h2>HOW I <span>EVOLVE UwU</span></h2></div></div><ol className="timeline" aria-label="Education timeline">{milestones.map((item, index) => <li className="timeline-item" key={`${item.title}-${index}`}><div className="timeline-portrait"><Koala stage={item.stage}/></div><div className="timeline-content"><h3 className="timeline-heading">{item.title} <span className="timeline-years">({item.years})</span></h3>{item.achievements && <p className="timeline-highlights">{item.achievements}</p>}</div></li>)}</ol></section>
</main><footer className="footer contact-footer" id="contact"><div className="wrap"><div className="footer-main"><div className="footer-intro"><span className="section-number">GET IN TOUCH</span><h2>STAY <span>CONNECTED.</span></h2></div><div className="footer-social"><div className="social-icons">{[{icon:siTelegram, url:content.contacts.telegram}, {icon:siFacebook, url:content.contacts.facebook}, {icon:siX, url:content.contacts.x}, {icon:siWhatsapp, url:content.contacts.whatsapp}, {icon:linkedinIcon, url:content.contacts.linkedin}, {icon:siGithub, url:content.contacts.github}].filter(({url}) => isSafeExternalUrl(url)).map(({icon, url}) => <a className="social-icon" key={icon.title} href={url} target="_blank" rel="noreferrer" aria-label={icon.title === 'GitHub' ? 'View the source repository on GitHub' : `Visit ${icon.title}`} title={icon.title}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path}/></svg></a>)}</div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ZEPHYR. ALL RIGHTS RESERVED.</span><span>CONCEPT BY ZEPHYR <span className="credit-divider">/</span> DEVELOPED WITH CODEX</span><a href="#top">BACK TO TOP ↑</a></div></div></footer></div></>;
}

createRoot(document.getElementById('root')!).render(window.location.pathname.replace(/\/$/, '') === '/admin' ? <Admin /> : <App />);
