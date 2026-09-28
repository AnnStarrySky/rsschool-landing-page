(function () {
  const sunIcon = document.querySelector('.theme-switch-icon-sun');
  const moonIcon = document.querySelector('.theme-switch-icon-moon');

  function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selected-theme', themeName);
  }

  moonIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    setTheme('dark');
  });

  sunIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    setTheme('light');
  });

  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light');
  }
})();