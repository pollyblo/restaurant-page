import '../styles/style.scss';
import { renderHomePage, createTemplate } from './home';
import { renderHistory } from './history';
import { navBar } from './nav';

const render = (() => {
  renderHomePage();
  navBar();
  const displayHome = () => {
    const homeBtn = document.getElementById('home-btn') as HTMLDivElement;
    homeBtn.addEventListener('click', () => {
      setTimeout(() => {
        document.body.replaceChildren();
        renderHomePage();
        navBar();
        displayHistory();
      }, 2000);
    });
  };

  const displayHistory = () => {
    const history = document.getElementById('history') as HTMLLIElement;
    history.addEventListener('click', () => {
      document.body.replaceChildren();
      createTemplate();
      renderHistory();
      navBar();
      displayHome();
    });
  };

  return {
    displayHistory,
    displayHome,
  };
})();
render.displayHome();
render.displayHistory();
