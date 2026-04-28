// ── JOB MARKET DASHBOARD · CHARTS ────────────────────────────

function initCharts() {
  const gridColor  = 'rgba(255,255,255,0.05)';
  const labelColor = '#555d72';

  // ── TREND CHART ─────────────────────────────────────────────
  new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
      labels: DATA.weeklyTrend.labels,
      datasets: [
        {
          label: 'Applications',
          data: DATA.weeklyTrend.applications,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59,130,246,0.08)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#3b82f6',
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: 'Responses',
          data: DATA.weeklyTrend.responses,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0)',
          fill: false,
          tension: 0.4,
          pointBackgroundColor: '#10b981',
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
          borderDash: [5, 4],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: '#1e2535',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#8b92a8',
          bodyColor: '#e8eaf0',
          padding: 10,
        },
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: labelColor, font: { size: 11 } },
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: labelColor, font: { size: 11 }, stepSize: 3 },
          beginAtZero: true,
        },
      },
    },
  });

  // ── SALARY CHART ────────────────────────────────────────────
  new Chart(document.getElementById('salaryChart'), {
    type: 'bar',
    data: {
      labels: DATA.salary.labels,
      datasets: [
        {
          label: 'Avg LPA (₹)',
          data: DATA.salary.values,
          backgroundColor: DATA.salary.colors,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e2535',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#8b92a8',
          bodyColor: '#e8eaf0',
          padding: 10,
          callbacks: {
            label: (ctx) => ` ₹${ctx.raw}L per annum`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: {
            color: labelColor,
            font: { size: 11 },
            callback: (v) => '₹' + v + 'L',
          },
          beginAtZero: true,
          max: 30,
        },
        y: {
          grid: { display: false },
          ticks: { color: labelColor, font: { size: 12 } },
        },
      },
    },
  });
}