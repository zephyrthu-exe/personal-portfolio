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
 return <svg viewBox="0 0 24 24" aria-hidden="true" shapeRendering="crispEdges">
  {/* Original pixel portraits, built with just black and white. */}
  <path fill="#171714" d="M5 17h14v1h2v6H3v-6h2z"/><path fill="#fff" d="M6 18h12v1h2v5H4v-5h2z"/>
  {stage === 1 && <path fill="#171714" d="M3 18h2v6H2v-5h1zm16 0h2v1h1v5h-3z"/>}
  <path fill="#171714" d="M2 5h1V4h4v1h2V4h6v1h2V4h4v1h1v1h1v5h-1v1h-2v3h-1v1h-2v1H7v-1H5v-1H4v-3H2v-1H1V6h1z"/>
  <path fill="#fff" d="M3 6h1V5h3v1h2V5h6v1h2V5h3v1h1v5h-2v3h-1v1h-2v1H8v-1H6v-1H5v-3H3z"/>
  <path fill="#171714" d="M4 7h2v3H4zm14 0h2v3h-2zM8 9h1v2H8zm7 0h1v2h-1zm-4 2h2v1h1v3h-1v1h-2v-1h-1v-3h1z"/>
  {stage === 0 && <><path fill="#171714" d="M10 16h4v1h1v2h-1v1h-4v-1H9v-2h1z"/><path fill="#fff" d="M11 17h2v2h-2z"/></>}
  {stage === 1 && <><path fill="#171714" d="M7 3h1V2h8v1h1v2H7zM6 5h12v1H6z"/><path fill="#fff" d="M11 3h2v1h-2z"/><path fill="#171714" d="M6 18h2v5H6zm10 0h2v5h-2z"/></>}
  {stage === 2 && <><path fill="#171714" d="M7 8h3v1H7zm7 0h3v1h-3zM8 18h2v1h1v1h2v-1h1v-1h2v1h-1v1h-1v1h-1v3h-2v-3h-1v-1H9v-1H8z"/><path fill="#171714" d="M3 21h5v3H3z"/><path fill="#fff" d="M4 22h3v1H4z"/></>}
  {stage === 3 && <><path fill="#171714" d="M5 19h14v5H5z"/><path fill="#fff" d="M6 20h12v3H6z"/><path fill="#171714" d="M11 20h1v3h-1zm-2 1h2v1H9zm3-1h2v1h-2z"/></>}
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
