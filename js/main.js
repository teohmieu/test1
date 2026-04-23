let currentLang = 'zh';
 
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderAll();
  localStorage.setItem('lang', lang);
}
 
function t(path) {
  const keys = path.split('.');
  let obj = CONTENT[currentLang];
  for (const k of keys) {
    obj = obj?.[k];
  }
  return obj ?? '';
}
 
function renderNav() {
  const n = CONTENT[currentLang].nav;
  document.getElementById('nav-about').textContent = n.about;
  document.getElementById('nav-skills').textContent = n.skills;
  document.getElementById('nav-portfolio').textContent = n.portfolio;
  document.getElementById('nav-achievements').textContent = n.achievements;
  document.getElementById('nav-notes').textContent = n.notes;
  document.getElementById('nav-contact').textContent = n.contact;
}
 
function renderHero() {
  const h = CONTENT[currentLang].hero;
  document.getElementById('hero-greeting').textContent = h.greeting;
  document.getElementById('hero-name').textContent = h.name;
  document.getElementById('hero-title').textContent = h.title;
  document.getElementById('hero-subtitle').textContent = h.subtitle;
  document.getElementById('hero-cta-portfolio').textContent = h.cta_portfolio;
  document.getElementById('hero-cta-contact').textContent = h.cta_contact;
}
 
function renderAbout() {
  const a = CONTENT[currentLang].about;
  document.getElementById('about-title').textContent = a.section_title;
  document.getElementById('about-p1').textContent = a.paragraph1;
  document.getElementById('about-p2').textContent = a.paragraph2;
  document.getElementById('about-p3').textContent = a.paragraph3;
  document.getElementById('career-title').textContent = a.career_title;
 
  const timeline = document.getElementById('career-timeline');
  timeline.innerHTML = a.careers.map((c, i) => `
    <div class="timeline-item" style="animation-delay: ${i * 0.15}s">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${c.year}</span>
        <h4>${c.title}</h4>
        <p class="timeline-company">${c.company}</p>
        <p class="timeline-desc">${c.desc}</p>
      </div>
    </div>
  `).join('');
}
 
function renderSkills() {
  const s = CONTENT[currentLang].skills;
  document.getElementById('skills-title').textContent = s.section_title;
 
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = s.categories.map((cat, i) => `
    <div class="skill-card" style="animation-delay: ${i * 0.1}s">
      <div class="skill-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <ul class="skill-list">
        ${cat.skills.map(sk => `<li><span class="skill-tag">${sk}</span></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
 
function renderPortfolio() {
  const p = CONTENT[currentLang].portfolio;
  document.getElementById('portfolio-title').textContent = p.section_title;
  document.getElementById('portfolio-subtitle').textContent = p.subtitle;
 
  const grid = document.getElementById('portfolio-grid');
  grid.innerHTML = p.projects.map((proj, i) => `
    <div class="project-card ${proj.highlight ? 'featured' : ''}" style="animation-delay: ${i * 0.1}s">
      ${proj.highlight ? '<div class="featured-badge">★ Featured</div>' : ''}
      <div class="project-header">
        <h3>${proj.title}</h3>
        <span class="project-status status-${proj.status === 'Completed' || proj.status === '已完成' || proj.status === '完成' ? 'done' : proj.status === 'In Progress' || proj.status === '进行中' || proj.status === '進行中' ? 'progress' : 'live'}">${proj.status}</span>
      </div>
      <div class="project-tags">
        ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <p class="project-desc">${proj.desc}</p>
      ${proj.link ? `<a href="${proj.link}" class="project-link">View Project →</a>` : '<span class="project-link-disabled">Details available on request</span>'}
    </div>
  `).join('');
}
 
function renderAchievements() {
  const a = CONTENT[currentLang].achievements;
  document.getElementById('achievements-title').textContent = a.section_title;
 
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = a.items.map((item, i) => `
    <div class="achievement-card" style="animation-delay: ${i * 0.1}s">
      <div class="achievement-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}
 
function renderNotes() {
  const n = CONTENT[currentLang].notes;
  document.getElementById('notes-title').textContent = n.section_title;
  document.getElementById('notes-subtitle').textContent = n.subtitle;
 
  const list = document.getElementById('notes-list');
  list.innerHTML = n.items.map((note, i) => `
    <div class="note-card" style="animation-delay: ${i * 0.1}s">
      <div class="note-header">
        <div>
          <h3 class="note-title">${note.title}</h3>
          <p class="note-author">— ${note.author}</p>
        </div>
        <div class="note-meta">
          <span class="note-lang">${note.lang}</span>
          <span class="note-date">${note.date}</span>
        </div>
      </div>
      <div class="note-tags">
        ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <blockquote class="note-content">${note.note}</blockquote>
    </div>
  `).join('');
}
 
function renderContact() {
  const c = CONTENT[currentLang].contact;
  document.getElementById('contact-title').textContent = c.section_title;
  document.getElementById('contact-subtitle').textContent = c.subtitle;
  document.getElementById('contact-email-label').textContent = c.email_label;
  document.getElementById('contact-github-label').textContent = c.github_label;
  document.getElementById('contact-linkedin-label').textContent = c.linkedin_label;
  document.getElementById('form-name').placeholder = c.form_name;
  document.getElementById('form-email').placeholder = c.form_email;
  document.getElementById('form-message').placeholder = c.form_message;
  document.getElementById('form-submit').textContent = c.form_submit;
  document.getElementById('form-note').textContent = c.form_note;
}
 
function renderFooter() {
  document.getElementById('footer-copy').textContent = CONTENT[currentLang].footer.copy;
}
 
function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderAchievements();
  renderNotes();
  renderContact();
  renderFooter();
}
 
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu
    document.getElementById('nav-menu').classList.remove('open');
  });
});
 
// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('open');
});
 
// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
 
// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.section').forEach(el => observer.observe(el));
 
// Contact form (demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  const orig = btn.textContent;
  btn.textContent = '✓ Sent!';
  btn.style.background = '#10b981';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    this.reset();
  }, 2500);
});
 
// Init
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'zh';
  setLang(saved);
});

