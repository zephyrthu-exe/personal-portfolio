import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/press-start-2p';
import '@fontsource/vt323';
import './style.css';

const milestones = [
 { years: '2010 — 2015', title: 'Primary school', place: 'Little beginnings', description: 'A curious start: learning to ask questions, make friends, and discover the joy of reading.', achievement: 'FIRST CHAPTER · SAMPLE DATA' },
 { years: '2016 — 2018', title: 'Middle school', place: 'Finding my interests', description: 'Explored science and technology, joined a school club, and found new ways to learn with others.', achievement: 'SCIENCE FAIR PARTICIPANT · SAMPLE DATA' },
 { years: '2019 — 2021', title: 'High school', place: 'Growing with purpose', description: 'Took on new challenges, built my first small projects, and developed a love for solving problems.', achievement: 'ACADEMIC HONORS · SAMPLE DATA' },
 { years: '2022 — PRESENT', title: 'University', place: 'Building what comes next', description: 'Studying computer science at Example University and turning ideas into useful experiences.', achievement: 'DEAN’S LIST · SAMPLE DATA' },
];

function Koala({ stage }: { stage: number }) {
 return <svg viewBox="0 0 120 120" aria-hidden="true">
  {/* A backpack sits behind the school koala's shoulders. */}
  {stage === 1 && <><rect x="18" y="77" width="84" height="36" rx="14" fill="#22221f"/><path d="M27 83v24M93 83v24" fill="none" stroke="#bd3029" strokeWidth="5"/></>}
  <path d="M24 112c1-22 13-32 36-32s35 10 36 32" fill="#f1f0e9" stroke="#22221f" strokeWidth="5"/>
  <circle cx="27" cy="46" r="21" fill="#f1f0e9" stroke="#22221f" strokeWidth="5"/><circle cx="93" cy="46" r="21" fill="#f1f0e9" stroke="#22221f" strokeWidth="5"/>
  <circle cx="27" cy="46" r="11" fill="#bd3029"/><circle cx="93" cy="46" r="11" fill="#bd3029"/>
  <ellipse cx="60" cy="57" rx="37" ry="32" fill="#f1f0e9" stroke="#22221f" strokeWidth="5"/>
  {stage === 2 ? <><path d="M38 46l10 3M72 49l10-3" stroke="#22221f" strokeWidth="4" strokeLinecap="round"/><ellipse cx="44" cy="56" rx="3.5" ry="5" fill="#22221f"/><ellipse cx="76" cy="56" rx="3.5" ry="5" fill="#22221f"/></> : <><ellipse cx="44" cy="54" rx="5" ry="6" fill="#22221f"/><ellipse cx="76" cy="54" rx="5" ry="6" fill="#22221f"/><circle cx="45.5" cy="52" r="1.5" fill="#f1f0e9"/><circle cx="77.5" cy="52" r="1.5" fill="#f1f0e9"/></>}
  <ellipse cx="60" cy="63" rx="9" ry="12" fill="#22221f"/><ellipse cx="35" cy="65" rx="5" ry="3" fill="#bd3029"/><ellipse cx="85" cy="65" rx="5" ry="3" fill="#bd3029"/>
  {stage !== 0 && <path d="M53 79q7 6 14 0" fill="none" stroke="#22221f" strokeWidth="2.5" strokeLinecap="round"/>}
  {stage === 0 && <><circle cx="60" cy="80" r="9" fill="#bd3029" stroke="#22221f" strokeWidth="2"/><circle cx="60" cy="80" r="3" fill="#f1f0e9"/><path d="M55 88q5 8 10 0" fill="none" stroke="#22221f" strokeWidth="2.5"/></>}
  {stage === 1 && <><path d="M30 31Q34 8 60 8T90 31Z" fill="#bd3029" stroke="#22221f" strokeWidth="4"/><path d="M25 32h70" stroke="#22221f" strokeWidth="5" strokeLinecap="round"/><circle cx="60" cy="18" r="3" fill="#f1f0e9"/></>}
  {stage === 3 && <><rect x="29" y="88" width="62" height="28" rx="3" fill="#22221f"/><rect x="33" y="92" width="54" height="20" fill="#f1f0e9"/><path d="M60 108V96m-5 5 5 3 5-3m-8-4 3 2 4-2" stroke="#bd3029" strokeWidth="2.5" fill="none"/><path d="M25 116h70" stroke="#22221f" strokeWidth="4"/></>}
 </svg>;
}

function App() {
 const [loading, setLoading] = useState(true);
 useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 2200); return () => window.clearTimeout(timer); }, []);
 useEffect(() => { let frame = 0; const update = () => { const range = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', String(range > 0 ? window.scrollY / range : 0)); frame = 0; }; const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); }; update(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); }; }, []);
 return <>
 {loading && <div className="loader" role="status" aria-label="Loading portfolio"><div className="loader-inner"><div className="loading-track"><div className="loading-fill" /></div><div className="loading-label">LOADING...</div></div></div>}
 <div className="ambient" aria-hidden="true"><div className="ambient-grid"/><div className="ambient-sun"/><div className="ambient-cloud ac1"/><div className="ambient-cloud ac2"/><div className="ambient-mountain am1"/><div className="ambient-mountain am2"/><div className="ambient-tree at1"/><div className="ambient-tree at2"/><div className="ambient-tree at3"/><div className="woodland"><div className="woodland-hill"/><div className="waterfall"><i/><i/><i/></div><div className="bamboo b1"/><div className="bamboo b2"/><div className="bamboo b3"/><div className="woodland-moon"/></div><div className="leaves"><i/><i/><i/><i/><i/><i/></div><div className="ambient-code code1">&lt; breathe /&gt;<br/>const journey = true;<br/>while (learning) {'{'}<br/>&nbsp; grow();<br/>{'}'}</div><div className="ambient-code code2">// stay curious<br/>0101 &nbsp; 1010<br/>&lt;/&gt; &nbsp; _</div></div><div className="site">
 <header className="header wrap"><a className="brand" href="#top"><span className="brand-icon">✳</span> PERSONAL<span className="red">.</span>EXE</a><nav aria-label="Main navigation"><a href="#about">ABOUT</a><a href="#journey">JOURNEY</a><a href="#achievements">ACHIEVEMENTS</a></nav><a className="header-link" href="#contact">SAY HELLO <span>↗</span></a></header>
 <main id="top"><section className="hero wrap" id="about"><div className="hero-copy"><div className="eyebrow"><span className="blink">■</span> A PERSONAL PORTFOLIO <span className="eyebrow-line" /> SAMPLE PROFILE</div><p className="hello">HELLO, WORLD! <span>✳</span></p><h1>A LITTLE<br/>ABOUT <em>ME.</em></h1><p className="intro">I’m Alex, a curious student who loves building thoughtful things, learning new skills, and finding wonder in the little details.</p><div className="hero-actions"><a className="button" href="#journey">EXPLORE MY JOURNEY <span>↘</span></a><a className="text-link" href="#achievements">VIEW ACHIEVEMENTS <span>↗</span></a></div><div className="hero-note"><span>✳</span> ONE STEP AT A TIME <span className="note-line" /> ALWAYS LEARNING</div></div>
</section>
 <div className="ticker"><div>✳ &nbsp; STAY CURIOUS &nbsp; / &nbsp; KEEP GROWING &nbsp; / &nbsp; ENJOY THE JOURNEY &nbsp; / &nbsp; STAY CURIOUS &nbsp; / &nbsp; KEEP GROWING &nbsp; / &nbsp; ENJOY THE JOURNEY &nbsp; / &nbsp;</div></div>
 <section className="section wrap" id="journey"><div className="section-head"><div><p className="section-number">01 / THE STORY SO FAR</p><h2>HOW I <span>EVOLVE.</span></h2></div><p>Every chapter has something to teach us.<br/>Here’s where mine begins.</p></div><ol className="timeline" aria-label="Sample education timeline">{milestones.map((item, index) => <li className="timeline-item" key={item.title}><div className="timeline-portrait"><Koala stage={index}/><span className="portrait-number">0{index + 1}</span></div><div className="timeline-content"><span className="timeline-years">{item.years}</span><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p className="timeline-description">{item.description}</p><span className="timeline-achievement">✳ &nbsp; {item.achievement}</span></div></li>)}</ol></section>
 <section className="section achievements" id="achievements"><div className="wrap"><div className="section-head"><div><p className="section-number">02 / THE MILESTONES</p><h2>SMALL WINS.<br/><span>BIG MOMENTS.</span></h2></div><p>A little collection of hard work,<br/>curiosity, and progress.</p></div><div className="achievement-grid"><div className="achievement-card"><span className="card-index">[ 01 ]</span><div className="badge">✦</div><h3>Academic highlights</h3><p>Dean’s List recognition for strong academic performance and a commitment to learning.</p><span className="placeholder">2023 & 2024 · SAMPLE DATA</span></div><div className="achievement-card"><span className="card-index">[ 02 ]</span><div className="badge">✳</div><h3>Beyond the classroom</h3><p>Built a student-led community project and collaborated with peers at a campus hackathon.</p><span className="placeholder">2024 · SAMPLE DATA</span></div></div></div></section>
 <section className="contact wrap" id="contact"><span className="section-number">03 / WHAT’S NEXT?</span><h2>LET’S MAKE<br/><span>SOMETHING</span> GREAT.</h2><p>Thanks for stopping by. This sample story is ready to become your own.</p><a href="https://github.com/zephyrthu-exe" target="_blank" rel="noreferrer" className="button">FIND ME ON GITHUB ↗</a></section></main><footer className="wrap footer"><span>✳ PERSONAL.EXE</span><span>MADE FOR THE JOURNEY AHEAD.</span><a href="#top">BACK TO TOP ↑</a></footer></div></>;
}

createRoot(document.getElementById('root')!).render(<App />);
