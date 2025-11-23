/*************************************************************
 * SCRIPT.JS — UI logic only.
 * All content lives in data.js
 *************************************************************/

// ------------------ ROTATING "CURRENTLY" TEXT ------------------
const roles = [
    "working on electronic warfare",
    "taming complex systems",
    "connecting algorithms to hardware",
    "engineering a safer future",
  ];
  
  let roleIndex = 0;
  const rotatingRoleEl = document.getElementById("rotating-role");
  
  function rotateRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    rotatingRoleEl.style.opacity = "0";
    setTimeout(() => {
      rotatingRoleEl.textContent = roles[roleIndex];
      rotatingRoleEl.style.opacity = "1";
    }, 200);
  }
  setInterval(rotateRole, 2600);
  
  
  // ------------------ EXPERIENCE ------------------
  const timelineEl = document.getElementById("experience-timeline");
  const expDetailEl = document.getElementById("experience-detail");
  
  function renderExperienceTimeline() {
    experiences.forEach((exp, i) => {
      const item = document.createElement("div");
      item.className = "timeline-item" + (i === 0 ? " active" : "");
      item.dataset.id = exp.id;
      item.innerHTML = `
        <div class="timeline-role">${exp.title}</div>
        <div class="timeline-meta">${exp.org} · ${exp.period}</div>
      `;
      timelineEl.appendChild(item);
    });
  }
  
  function renderExperienceDetail(id) {
    const exp = experiences.find(e => e.id === id) || experiences[0];
    expDetailEl.innerHTML = `
      <div class="experience-detail-header">
        <div>
          <div class="experience-detail-title">${exp.title}</div>
          <div style="font-size: 0.8rem; color: var(--muted);">${exp.org} · ${exp.location}</div>
        </div>
        <div style="font-size: 0.78rem; color: var(--muted);">${exp.period}</div>
      </div>
  
      <ul class="experience-detail-list">
        ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
  
      <div class="experience-tags">
        ${exp.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    `;
  }
  
  timelineEl.addEventListener("click", (e) => {
    const item = e.target.closest(".timeline-item");
    if (!item) return;
  
    document.querySelectorAll(".timeline-item")
            .forEach(el => el.classList.remove("active"));
  
    item.classList.add("active");
    renderExperienceDetail(item.dataset.id);
  });
  
  // initial load
  renderExperienceTimeline();
  renderExperienceDetail(experiences[0].id);
  
  
  // ------------------ PROJECTS ------------------
  const projectGridEl = document.getElementById("project-grid");
  const filterChips = document.querySelectorAll(".filter-chip");
  
  function createProjectHTML(p) {
    return `
      <div class="project-card">
        <div class="project-inner">
          <div class="project-face project-front">
            <div>
              <h3 class="project-title">${p.title}</h3>
              <div class="project-meta">${p.meta}</div>
              <p class="front-desc">${p.frontDescription}</p>
            </div>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>
          </div>
  
          <div class="project-face project-back">
            <p class="back-desc">${p.backDescription}</p>
            ${p.link ? `<a class="project-link" href="${p.link}" target="_blank">${p.linkLabel}</a>` : ""}
          </div>
        </div>
      </div>
    `;
  }
  
  function renderProjects(filter = "all") {
    const filtered = projects.filter(p =>
      filter === "all" || p.categories.includes(filter)
    );
    projectGridEl.innerHTML = filtered.map(createProjectHTML).join("");
  }
  
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderProjects(chip.dataset.filter);
    });
  });
  
  renderProjects("all");
  
  
  // ------------------ SKILLS ------------------
  const skillChipsEl = document.getElementById("skill-chips");
  const skillDetailEl = document.getElementById("skill-detail");
  
  function renderSkillChips() {
    skillChipsEl.innerHTML = "";
    Object.keys(skills).forEach((name, i) => {
      const btn = document.createElement("button");
      btn.className = "skill-chip" + (i === 0 ? " active" : "");
      btn.dataset.skill = name;
      btn.textContent = name;
      skillChipsEl.appendChild(btn);
    });
  }
  
  function renderSkillDetail(name) {
    const s = skills[name];
    skillDetailEl.innerHTML = `
      <div class="skill-detail-title">${name}</div>
      <p>${s.short}</p>
      <p style="color: var(--muted);">${s.details}</p>
    `;
  }
  
  skillChipsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill-chip");
    if (!btn) return;
  
    document.querySelectorAll(".skill-chip")
            .forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
  
    renderSkillDetail(btn.dataset.skill);
  });
  
  // initial
  renderSkillChips();
  renderSkillDetail(Object.keys(skills)[0]);
  
  
  // ------------------ FUN FACTS ------------------
  const funBtn = document.getElementById("fun-fact-btn");
  const funDisplay = document.getElementById("fun-fact-display");
  
  funBtn.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * funFacts.length);
    funDisplay.textContent = funFacts[idx];
  });
  
  
  // ------------------ COPY EMAIL ------------------
  document.getElementById("copy-email").addEventListener("click", async () => {
    const email = document.getElementById("contact-email-text").textContent.trim();
    await navigator.clipboard.writeText(email);
    alert("Email copied!");
  });
  
  
  // ------------------ THEME ------------------
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  themeToggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
  }
  
  
  // ------------------ FOOTER YEAR ------------------
  document.getElementById("year").textContent = new Date().getFullYear();
  
