const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-toggle__label');
const themeIcon = document.querySelector('.theme-toggle__icon');

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const applyTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const isLight = theme === 'light';
  themeLabel.textContent = isLight ? 'Light' : 'Dark';
  themeIcon.textContent = isLight ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
};

const toggleTheme = () => {
  const currentTheme = body.getAttribute('data-theme');
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
};

applyTheme(getPreferredTheme());
themeToggle.addEventListener('click', toggleTheme);
