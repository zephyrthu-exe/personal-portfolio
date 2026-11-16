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
 return <svg viewBox="0 0 100 100" aria-hidden="true" shapeRendering="crispEdges">
  <path fill="#22221f" d="M27 75h46v5h9v20H18V80h9z"/><path fill="#a6a69e" d="M30 79h40v5h8v16H22V84h8z"/>
  <path fill="#22221f" d="M5 20h7v-7h17v7h42v-7h17v7h7v25h-7v7H77v12h-7v8H30v-8h-7V52H12v-7H5z"/>
  <path fill="#a6a69e" d="M10 23h5v-5h11v7h48v-7h11v5h5v19h-5v5H74v14h-7v6H33v-6h-7V47H15v-5h-5z"/>
  <path fill="#f1f0e9" d="M15 25h9v14h-9zM76 25h9v14h-9z"/>
  <path fill="#22221f" d="M31 38h6v7h-6zM63 38h6v7h-6zM44 43h12v4h4v12H40V47h4z"/>
  {stage === 0 && <path fill="#f1f0e9" d="M31 49h6v4h-6zM63 49h6v4h-6z"/>}
  {stage === 1 && <path fill="#bd3029" d="M44 24h12v4H44z"/>}
  {stage === 2 && <path fill="#22221f" d="M26 35h15v2H26zM59 35h15v2H59zM41 37h18v2H41z"/>}
  {stage === 3 && <><path fill="#22221f" d="M25 28h50v-5H25zM33 18h34v5H33zM72 27h3v14h-3z"/><path fill="#bd3029" d="M47 80h6v14h-6z"/></>}
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
