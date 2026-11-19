const routeSwitcher = document.querySelector('.switch');
const routeButtons = [...routeSwitcher.querySelectorAll('button')];

function showRoute(routeId) {
  for (const button of routeButtons) {
    const selected = button.dataset.route === routeId;
    button.setAttribute('aria-pressed', String(selected));
    document.getElementById(button.dataset.route).hidden = !selected;
  }
}

routeSwitcher.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-route]');
  if (button) showRoute(button.dataset.route);
});

showRoute('riverside');
routeSwitcher.hidden = false;
