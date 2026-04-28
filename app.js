// ── JOB MARKET DASHBOARD · APP LOGIC ─────────────────────────

let applications = [...DATA.applications];
let currentFilter = 'all';

// ── FUNNEL ───────────────────────────────────────────────────
function renderFunnel() {
  const container = document.getElementById('funnelContainer');
  container.innerHTML = '';
  DATA.funnel.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'funnel-item';
    row.innerHTML = `
      <div class="funnel-label-text">${item.label}</div>
      <div class="funnel-track">
        <div class="funnel-fill"
             data-pct="${item.pct}"
             style="background:${item.color}; color:${item.textColor}">
          ${item.pct}%
        </div>
      </div>
      <div class="funnel-count">${item.count}</div>
    `;
    container.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.funnel-fill').forEach((el) => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 120);
}

// ── SKILLS ───────────────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  container.innerHTML = '';
  DATA.skills.forEach((skill) => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `
      <div class="skill-name">${skill.name}</div>
      <div class="skill-track">
        <div class="skill-bar" data-pct="${skill.pct}" style="background:${skill.color}"></div>
      </div>
      <div class="skill-pct">${skill.pct}%</div>
    `;
    container.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.skill-bar').forEach((el) => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 150);
}

// ── APPLICATIONS TABLE ────────────────────────────────────────
function renderTable(filter = 'all') {
  const tbody = document.getElementById('appsBody');
  tbody.innerHTML = '';

  const filtered = filter === 'all'
    ? applications
    : applications.filter((a) => a.status === filter);

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#555d72;padding:20px">No applications found.</td></tr>`;
    return;
  }

  filtered.forEach((app) => {
    const realIndex = applications.indexOf(app);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:#e8eaf0">${app.company}</strong></td>
      <td style="color:#8b92a8">${app.role}</td>
      <td style="color:#555d72;white-space:nowrap">${app.date}</td>
      <td><span class="status-pill pill-${app.status}">${app.status}</span></td>
      <td><button class="btn-del" onclick="deleteApp(${realIndex})">Remove</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ── DELETE APPLICATION ────────────────────────────────────────
function deleteApp(index) {
  applications.splice(index, 1);
  renderTable(currentFilter);
  updateMetrics();
}

// ── ADD APPLICATION ───────────────────────────────────────────
function addApplication() {
  const company = document.getElementById('f-company').value.trim();
  const role    = document.getElementById('f-role').value.trim();
  const date    = document.getElementById('f-date').value;
  const status  = document.getElementById('f-status').value;

  if (!company || !role || !date) {
    alert('Please fill in all fields.');
    return;
  }

  const formatted = new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

  applications.unshift({ company, role, date: formatted, status });
  renderTable(currentFilter);
  updateMetrics();

  document.getElementById('f-company').value = '';
  document.getElementById('f-role').value    = '';
  document.getElementById('f-date').value    = '';
  document.getElementById('f-status').value  = 'Applied';
  document.getElementById('addModal').classList.remove('open');
}

// ── METRICS ──────────────────────────────────────────────────
function updateMetrics() {
  const total      = applications.length;
  const interviews = applications.filter(a => a.status === 'Interview').length;
  const offers     = applications.filter(a => a.status === 'Offer').length;
  const rate       = total > 0 ? Math.round((offers / total) * 100) : 0;

  document.getElementById('m-applied').textContent    = total;
  document.getElementById('m-interviews').textContent = interviews;
  document.getElementById('m-offers').textContent     = offers;
  document.getElementById('m-rate').textContent       = rate + '%';
}

// ── QUICK ACTIONS ─────────────────────────────────────────────
function renderActions() {
  const grid = document.getElementById('actionsGrid');
  grid.innerHTML = '';
  DATA.actions.forEach((action) => {
    const card = document.createElement('a');
    card.href      = action.url;
    card.target    = '_blank';
    card.className = 'action-card';
    card.innerHTML = `
      <div class="action-icon">${action.icon}</div>
      <div class="action-title">${action.title}</div>
      <div class="action-desc">${action.desc}</div>
    `;
    grid.appendChild(card);
  });
}

// ── FILTER TABS ───────────────────────────────────────────────
document.querySelectorAll('.ftab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTable(currentFilter);
  });
});

// ── CLOSE MODAL ON BACKDROP ───────────────────────────────────
document.getElementById('addModal').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('open');
});

// ── INIT ──────────────────────────────────────────────────────
function init() {
  renderFunnel();
  renderSkills();
  renderTable('all');
  renderActions();
  updateMetrics();
  initCharts();
}

document.addEventListener('DOMContentLoaded', init);