export type Skill = {label:string; icon:string};
export type Certificate = {title:string; type:string; date:string; description:string; url:string; expirationDate?:string};
export type Education = {title:string; years:string; stage:number};
export type Portfolio = {intro:string; skills:Skill[]; certificates:Certificate[]; education:Education[]; contacts:{telegram:string;facebook:string;x:string;whatsapp:string;linkedin:string;github:string}};
export const defaults:Portfolio = {
 intro:'I’m Alex, a curious student who loves building thoughtful things, learning new skills, and finding wonder in the little details.',
 skills:[{label:'HTML & CSS',icon:'htmlcss'},{label:'JavaScript',icon:'javascript'},{label:'Python',icon:'python'}],
 certificates:[{title:'Academic Honors',type:'ACHIEVEMENT',date:'2022',description:'Recognized for consistent academic effort and achievement throughout the school year.',url:''},{title:'Introduction to Programming',type:'CERTIFICATE',date:'2023',description:'Completed an introductory programming course.',url:''},{title:'Dean’s List',type:'ACHIEVEMENT',date:'2024',description:'Recognized for strong academic performance.',url:''},{title:'Campus Hackathon',type:'EXPERIENCE',date:'2025',description:'Collaborated with a student team at a campus hackathon.',url:''}],
 education:[{title:'Primary school',years:'2010 — 2015',stage:0},{title:'Middle school',years:'2016 — 2018',stage:1},{title:'High school',years:'2019 — 2021',stage:2},{title:'University',years:'2022 — PRESENT',stage:3}],
 contacts:{telegram:'https://t.me/malicious_exe',facebook:'https://www.facebook.com/share/1FmwCZsv1x/',x:'https://x.com/malicious_exe',whatsapp:'https://wa.me/959424312989',linkedin:'https://www.linkedin.com/in/min-thu-kha-aung-zephyr-8ab273425',github:'https://github.com/zephyrthu-exe/personal-portfolio'}
};
