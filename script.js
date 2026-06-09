/* ═══════════════════════════════════════════════════════════
   SALEM PORTFOLIO — script.js
   All data lives here. Edit the DATA blocks below to update
   the portfolio without touching HTML or CSS.
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────
   CONFIG — swap these out
───────────────────────────────────── */
const CONFIG = {
  // Path or URL to profile photo. Keep empty string to show initials fallback.
  profilePhoto: 'IMG_20220401_220717-01 (1).jpeg',            // e.g. 'assets/me.jpg'
  email:        'salem@example.com',
  name:         'Salem',
};


/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */

const EDUCATION = [
  { degree: 'B.Sc CSE',  institution: 'BUET',       year: '2023-27' },
  { degree: 'HSC',       institution: 'Sylhet Cadet College',  year: '2022' },
  { degree: 'SSC',       institution: '—',           year: '2020' },
];

// level: 0–11 filled dots
const LANGS = [
  { name: 'English', level: 11 },
  { name: 'Bangla',  level: 11 },
  { name: 'Garo',    level:  9 },
  { name: 'Hindi',   level:  7 },
  { name: 'French',  level:  4 },
];

// Use emoji or inline SVG for icon
const SKILLS = [
  { icon: '🐍', label: 'Python'   },
  { icon: '⚙️', label: 'C/C++'    },
  { icon: '☕', label: 'Java'     },
  { icon: '🟨', label: 'JS/TS'    },
  { icon: '⚛️', label: 'React'    },
  { icon: '🗄️', label: 'SQL'      },
  { icon: '🐧', label: 'Linux'    },
  { icon: '🐳', label: 'Docker'   },
  { icon: '🤖', label: 'ML/AI'    },
  { icon: '🔬', label: 'Research' },
];

const AWARDS = [
  { icon: '🏆', text: 'Award Name — Organization, Year' },
  { icon: '🥇', text: 'Award Name — Organization, Year' },
  { icon: '🎖️', text: 'Award Name — Organization, Year' },
  { icon: '🌟', text: 'Award Name — Organization, Year' },
];

const EXPERIENCES = [
  { icon: '🏢', role: 'Role',    company: 'Company', years: '2025–2026', desc: 'Short description of what you did and what impact it had.' },
  { icon: '🔬', role: 'Role',    company: 'Company', years: '2024–2025', desc: 'Short description of what you did and what impact it had.' },
  { icon: '💡', role: 'Role',    company: 'Company', years: '2023–2024', desc: 'Short description of what you did and what impact it had.' },
  { icon: '🚀', role: 'Role',    company: 'Company', years: '2022–2023', desc: 'Short description of what you did and what impact it had.' },
];

// grad: two Tailwind bg colours for the card background gradient
const PROJECTS = [
  { label: 'Project Name', tag: 'C++',      bg: '#2b2e28', bg2: '#333a2e' },
  { label: 'Project Name', tag: 'Python',   bg: '#28282e', bg2: '#2e2e3a' },
  { label: 'Project Name', tag: 'Research', bg: '#2e2828', bg2: '#3a2e2e' },
  { label: 'Project Name', tag: 'Web',      bg: '#28282c', bg2: '#32283a' },
];

// Social links — set href to your real URLs
const SOCIALS = [
  {
    title: 'Gmail', href: 'mailto:salem@example.com',
    bg: 'rgba(255,255,255,0.05)',
    svg: `<svg viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#EA4335"/></svg>`,
  },
  {
    title: 'Facebook', href: '#',
    bg: 'rgba(24,119,242,0.15)',
    svg: `<svg viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/></svg>`,
  },
  {
    title: 'LinkedIn', href: '#',
    bg: 'rgba(10,102,194,0.15)',
    svg: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>`,
  },
  {
    title: 'GitHub', href: '#',
    bg: 'rgba(255,255,255,0.08)',
    svg: `<svg viewBox="0 0 24 24" fill="#e8e2d9"><path d="M12 2A10 10 0 0 0 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>`,
  },
  {
    title: 'Pinterest', href: '#',
    bg: 'rgba(230,0,35,0.15)',
    svg: `<svg viewBox="0 0 24 24" fill="#E60023"><path d="M9.04 21.54C10 21.83 10.97 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 16.25 4.67 19.9 8.44 21.34C8.35 20.56 8.26 19.27 8.44 18.38L9.59 13.44C9.59 13.44 9.3 12.86 9.3 11.99C9.3 10.62 10.1 9.6 11.1 9.6C11.93 9.6 12.34 10.21 12.34 10.95C12.34 11.77 11.83 13 11.54 14.15C11.3 15.11 12.01 15.9 12.96 15.9C14.68 15.9 16 14 16 11.35C16 9 14.26 7.36 12 7.36C9.36 7.36 7.82 9.34 7.82 11.41C7.82 12.24 8.13 13.11 8.5 13.58C8.57 13.66 8.59 13.74 8.56 13.83L8.18 15.44C8.12 15.68 7.98 15.73 7.74 15.62C6.5 15.06 5.69 13.18 5.69 11.39C5.69 8.21 8 5.29 12.28 5.29C15.74 5.29 18.42 7.74 18.42 11.31C18.42 15.03 16.12 18.04 12.87 18.04C11.86 18.04 10.92 17.51 10.59 16.89L9.97 19.22C9.77 19.9 9.34 20.73 9.04 21.54Z"/></svg>`,
  },
  {
    title: 'Instagram', href: '#',
    bg: 'rgba(255,255,255,0.05)',
    svg: `<svg viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f09433"/><stop offset="50%" stop-color="#dc2743"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9ZM17.5 6.5C16.94 6.5 16.5 6.94 16.5 7.5C16.5 8.06 16.94 8.5 17.5 8.5C18.06 8.5 18.5 8.06 18.5 7.5C18.5 6.94 18.06 6.5 17.5 6.5Z" fill="url(#ig)"/></svg>`,
  },
  {
    title: 'LeetCode', href: '#',
    bg: 'rgba(255,161,22,0.15)',
    svg: `<svg viewBox="0 0 24 24" fill="#FFA116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  },
];


/* ═══════════════════════════════════════════════════════════
   RENDERERS
═══════════════════════════════════════════════════════════ */

/* ── Profile photo ── */
(function initPhoto() {
  const img = document.getElementById('profile-photo');
  if (!img) return;
  if (CONFIG.profilePhoto) {
    img.src = CONFIG.profilePhoto;
  } else {
    // Fallback: initials block
    img.style.display = 'none';
    const parent = img.parentElement;
    const fallback = document.createElement('div');
    fallback.className = 'w-full h-full flex items-center justify-center text-4xl md:text-6xl font-display text-accent select-none';
    fallback.textContent = CONFIG.name.charAt(0).toUpperCase();
    parent.appendChild(fallback);
  }
})();


/* ── Education tables (desktop + mobile) ── */
function buildEduTable(tableEl, small = false) {
  if (!tableEl) return;
  const sz = small ? '0.62rem' : '0.72rem';

  const thead = `
    <thead>
      <tr style="border-bottom:1px solid #3a3733;">
        <th style="text-align:left;color:#8a8480;font-size:${small?'0.58rem':'0.65rem'};font-weight:600;padding-bottom:4px;">Degree</th>
        <th style="text-align:left;color:#8a8480;font-size:${small?'0.58rem':'0.65rem'};font-weight:600;padding-bottom:4px;">Institution</th>
        <th style="text-align:right;color:#8a8480;font-size:${small?'0.58rem':'0.65rem'};font-weight:600;padding-bottom:4px;">Year</th>
      </tr>
    </thead>`;

  const rows = EDUCATION.map((e, i) => `
    <tr style="${i < EDUCATION.length - 1 ? 'border-bottom:1px solid rgba(58,55,51,0.55)' : ''}">
      <td style="padding:${small?'4px 3px':'6px 4px'};font-size:${sz};color:#e8e2d9;">${e.degree}</td>
      <td style="padding:${small?'4px 3px':'6px 4px'};font-size:${sz};color:#e8e2d9;">${e.institution}</td>
      <td style="padding:${small?'4px 3px':'6px 4px'};font-size:${sz};color:#f0a832;text-align:right;font-family:'Space Mono',monospace;">${e.year}</td>
    </tr>`).join('');

  tableEl.innerHTML = thead + `<tbody>${rows}</tbody>`;
}

buildEduTable(document.getElementById('edu-desktop'), false);
buildEduTable(document.getElementById('edu-mobile'), true);


/* ── Language dots ── */
function buildDots(level, small = false) {
  const total = 11;
  const sz = small ? '5px' : '7px';
  return Array.from({ length: total }, (_, i) =>
    `<span class="dot${i < level ? ' on' : ''}" style="width:${sz};height:${sz};"></span>`
  ).join('');
}

function buildLangList(containerId, small = false) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = LANGS.map(l => `
    <div style="display:flex;align-items:center;gap:${small ? '3px' : '6px'};">
      <span style="font-size:${small ? '0.58rem' : '0.75rem'};color:#8a8480;
                   min-width:${small ? '32px' : '48px'};white-space:nowrap;">${l.name}</span>
      <div style="display:flex;gap:${small ? '1.5px' : '2px'};">${buildDots(l.level, small)}</div>
    </div>`).join('');
}

buildLangList('langs-desktop', false);
buildLangList('langs-mobile', true);


/* ── Socials ── */
function buildSocials(containerId, iconSize = '20px', btnSize = '36px') {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = SOCIALS.map(s => `
    <a href="${s.href}" title="${s.title}" class="social-btn"
       style="width:${btnSize};height:${btnSize};background:${s.bg};">
      <span style="width:${iconSize};height:${iconSize};display:flex;">
        ${s.svg}
      </span>
    </a>`).join('');
}

buildSocials('social-mobile',  '18px', '32px');
buildSocials('social-desktop', '22px', '38px');


/* ── Skills ── */
document.getElementById('skills-grid').innerHTML = SKILLS.map(s => `
  <div class="skill-tile reveal lift">
    <span class="skill-icon">${s.icon}</span>
    <span>${s.label}</span>
  </div>`).join('');


/* ── Awards ── */
document.getElementById('awards-list').innerHTML = AWARDS.map(a => `
  <div class="award-item reveal lift
              bg-surface2 border border-border rounded-lg h-10">
    <span class="award-icon">${a.icon}</span>
    <span style="font-size:0.7rem;color:#e8e2d9;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a.text}</span>
  </div>`).join('');


/* ── Experiences ── */
document.getElementById('experiences').innerHTML = EXPERIENCES.map(e => `
  <div class="reveal exp-hover bg-surface2 border border-border rounded-lg
              p-2.5 md:p-3 flex gap-3 items-start">
    <div style="width:42px;height:42px;min-width:42px;border-radius:10px;
                background:#3a3733;display:flex;align-items:center;
                justify-content:center;font-size:1.2rem;">${e.icon}</div>
    <div style="flex:1;min-width:0;">
      <div style="font-weight:700;font-size:0.78rem;color:#e8e2d9;
                  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
        ${e.role} : ${e.company}
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:0.62rem;
                  color:#f0a832;margin:2px 0;">${e.years}</div>
      <div style="font-size:0.67rem;color:#8a8480;line-height:1.4;">${e.desc}</div>
    </div>
  </div>`).join('');


/* ── Projects ── */
document.getElementById('projects-grid').innerHTML = PROJECTS.map(p => `
  <div class="project-card reveal"
       style="background:linear-gradient(135deg,${p.bg},${p.bg2});">
    <div class="overlay"></div>
    <div class="card-body">
      <div class="card-label">${p.label}</div>
      <span class="card-tag">${p.tag}</span>
    </div>
  </div>`).join('');


/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL  (IntersectionObserver)
═══════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);   // fire once
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));