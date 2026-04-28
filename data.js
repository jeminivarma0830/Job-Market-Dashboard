// ── JOB MARKET DASHBOARD · DATA ──────────────────────────────
// Edit this file to personalise your dashboard!

const DATA = {

  // ── FUNNEL DATA ─────────────────────────────────────────────
  funnel: [
    { label: 'Applied',     count: 47, pct: 100, color: '#3b82f6', textColor: '#bfdbfe' },
    { label: 'Screened',    count: 34, pct: 72,  color: '#8b5cf6', textColor: '#ddd6fe' },
    { label: 'Interview',   count: 11, pct: 23,  color: '#f59e0b', textColor: '#fde68a' },
    { label: 'Final Round', count: 4,  pct: 8,   color: '#ec4899', textColor: '#fbcfe8' },
    { label: 'Offer',       count: 2,  pct: 4,   color: '#10b981', textColor: '#a7f3d0' },
  ],

  // ── WEEKLY TREND ────────────────────────────────────────────
  weeklyTrend: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    applications: [4, 6, 5, 9, 8, 11, 10, 12],
    responses:    [1, 2, 1, 3, 2,  4,  3,  4],
  },

  // ── TOP SKILLS ──────────────────────────────────────────────
  skills: [
    { name: 'Python / ML',     pct: 92, color: '#3b82f6' },
    { name: 'React / Next.js', pct: 85, color: '#8b5cf6' },
    { name: 'System Design',   pct: 88, color: '#10b981' },
    { name: 'AWS / Cloud',     pct: 80, color: '#f59e0b' },
    { name: 'SQL / Analytics', pct: 76, color: '#ec4899' },
    { name: 'Docker / K8s',    pct: 65, color: '#14b8a6' },
    { name: 'Node.js',         pct: 70, color: '#f97316' },
  ],

  // ── SALARY DATA (LPA ₹) ─────────────────────────────────────
  salary: {
    labels: ['Data Eng', 'ML Engineer', 'Backend Dev', 'Product Mgr', 'DevOps'],
    values: [22, 26, 18, 24, 20],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
  },

  // ── APPLICATIONS ────────────────────────────────────────────
  // Status options: "Applied" | "Interview" | "Offer" | "Rejected"
  applications: [
    { company: 'Google',   role: 'SWE II',        date: 'Apr 25', status: 'Interview' },
    { company: 'Flipkart', role: 'Backend Eng',   date: 'Apr 22', status: 'Offer'     },
    { company: 'Razorpay', role: 'Data Engineer', date: 'Apr 20', status: 'Interview' },
    { company: 'Swiggy',   role: 'ML Engineer',   date: 'Apr 17', status: 'Applied'   },
    { company: 'Zepto',    role: 'Product Mgr',   date: 'Apr 15', status: 'Rejected'  },
    { company: 'Meesho',   role: 'DevOps Eng',    date: 'Apr 12', status: 'Offer'     },
    { company: 'PhonePe',  role: 'Frontend Dev',  date: 'Apr 10', status: 'Applied'   },
    { company: 'CRED',     role: 'Full Stack Dev', date: 'Apr 8', status: 'Applied'   },
  ],

  // ── QUICK ACTIONS ───────────────────────────────────────────
  actions: [
    { icon: '📄', title: 'Resume Tips',      desc: 'Improve your ATS keyword score', url: 'https://www.jobscan.co/'   },
    { icon: '🎯', title: 'Interview Prep',   desc: 'Practice with real questions',   url: 'https://leetcode.com/'     },
    { icon: '💰', title: 'Salary Check',     desc: 'Know your market worth',         url: 'https://www.levels.fyi/'   },
    { icon: '🔗', title: 'LinkedIn',         desc: 'Boost your profile reach',       url: 'https://linkedin.com/'     },
  ],
};