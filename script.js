/* ─── Language data ─── */
const LANGS = [
    { name: 'English', level: 10 },
    { name: 'Bangla', level: 10 },
    { name: 'Garo', level: 8 },
    { name: 'Hindi', level: 7 },
    { name: 'French', level: 4 },
];

function buildDots(level, small = false) {
    const sz = small ? 'width:6px;height:6px' : 'width:8px;height:8px';
    return Array.from({ length: 11 }, (_, i) =>
        `<span class="dot${i < level ? ' on' : ''}" style="${sz};border-radius:50%;display:inline-block;"></span>`
    ).join('');
}

function buildLangList(containerId, small = false) {
    const c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = LANGS.map(l => `
      <div style="display:flex;align-items:center;gap:${small ? '4px' : '6px'};">
        <span style="font-size:${small ? '0.62rem' : '0.78rem'};color:#8a8480;min-width:${small ? '38px' : '52px'};">${l.name}</span>
        <div style="display:flex;gap:2px;">${buildDots(l.level, small)}</div>
      </div>`).join('');
}

buildLangList('langs-desktop', false);
buildLangList('langs-mobile', true);

/* ─── Skills ─── */
const SKILLS = [
    { icon: 'svg url', label: 'Python' },
    { icon: 'svg url', label: 'C/C++' },
    { icon: 'svg url', label: 'Java' },
    { icon: 'svg url', label: 'JS/TS' },
    { icon: 'svg url', label: 'React' },
    { icon: 'svg url', label: 'SQL' },
    { icon: 'svg url', label: 'Linux' },
    { icon: 'svg url', label: 'Docker' },
    { icon: 'svg url', label: 'ML/AI' },
    { icon: 'svg url', label: 'Research' },
];

document.getElementById('skills-grid').innerHTML = SKILLS.map(s => `
    <div class="reveal lift bg-surface2 border border-border rounded-lg
                aspect-square flex flex-col items-center justify-center gap-1
                text-muted hover:text-[#e8e2d9] cursor-default
                text-[0.6rem] md:text-[0.68rem] font-semibold text-center p-1">
      <span class="text-xl md:text-2xl leading-none">${s.icon}</span>
      <span>${s.label}</span>
    </div>`).join('');

/* ─── Experiences ─── */
const EXPS = [
    { icon: '🏢', role: 'Role', company: 'Company', years: '2025–2026', desc: 'description' },
    { icon: '🔬', role: 'Role', company: 'Company', years: '2025–2026', desc: 'description' },
    { icon: '💡', role: 'Role', company: 'Company', years: '2025–2026', desc: 'description' },
    { icon: '🚀', role: 'Role', company: 'Company', years: '2025–2026', desc: 'description' },
];

document.getElementById('experiences').innerHTML = EXPS.map(e => `
    <div class="reveal exp-hover bg-surface2 border border-border rounded-lg
                p-2.5 md:p-3 flex gap-3 items-start">
      <div class="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-surface3 flex-shrink-0
                  flex items-center justify-center text-xl">${e.icon}</div>
      <div class="flex-1 min-w-0">
        <div class="font-bold text-xs md:text-sm text-[#e8e2d9]">${e.role} : ${e.company}</div>
        <div class="font-mono text-[0.65rem] text-accent2 my-0.5">${e.years}</div>
        <div class="text-[0.68rem] md:text-xs text-muted leading-snug">${e.desc}</div>
      </div>
    </div>`).join('');

/* ─── Projects ─── */
const PROJECTS = [
    { label: 'Project Name', tag: 'C++', grad: 'from-surface2 to-surface3' },
    { label: 'Project Name', tag: 'Python', grad: 'from-[#2b2e28] to-[#333a2e]' },
    { label: 'Project Name', tag: 'Research', grad: 'from-[#28282e] to-[#2e2e3a]' },
    { label: 'Project Name', tag: 'Web', grad: 'from-[#2e2828] to-[#3a2e2e]' },
];

document.getElementById('projects-grid').innerHTML = PROJECTS.map(p => `
    <div class="reveal lift bg-gradient-to-br ${p.grad}
                border border-border rounded-xl
                aspect-video relative overflow-hidden cursor-pointer">
      <div class="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-3 z-10">
        <div class="font-bold text-xs md:text-sm text-[#e8e2d9]">${p.label}</div>
        <span class="inline-block text-[0.6rem] bg-accent text-white
                     px-2 py-0.5 rounded-full font-bold mt-1">${p.tag}</span>
      </div>
    </div>`).join('');

/* ─── Scroll reveal ─── */
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });


// profile picture
const profilepicURL = "IMG_20220401_220717-01 (1).jpeg";

document.getElementById('profilePic').querySelector('img').src = profilepicURL;


// education table
const EDUCATION = [
    { degree: 'BSc in CSE', institution: 'University A', years: '2020–24' },
    { degree: 'HSC', institution: 'School B', years: '2018–20' },
];

const educationHTML = EDUCATION.map(edu => `
    <tr class="border-b border-border/60">
        <td class="py-2 px-1">${edu.degree}</td>
        <td class="py-2 px-1">${edu.institution}</td>
        <td class="py-2 px-1 text-right font-mono text-accent2">${edu.years}</td>
    </tr>
`).join('');

document.querySelectorAll('.education-table').forEach(table => {
    table.innerHTML = educationHTML;
});


document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));