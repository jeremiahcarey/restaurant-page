import { createButton } from './nav-button.js';
import { createElement, navigateTo } from '../helpers/utils.js';


export const renderNavbar = () => {
  const navbar = createElement('nav', {
    classes: 'navbar',
    children: [
      createButton('Home', true),
      createButton('Menu'),
      createButton('About'),
    ],
  });

  // Add menu listeners
  navbar.addEventListener('click', function ({ target }) {
    if (target.classList.contains("active") || target.tagName !== 'BUTTON')
      return;

    [...target.parentElement.children].forEach(btn => {
      if(btn.tagName === 'BUTTON')
        btn.classList.remove("active");
    });

    target.classList.add("active");

    // Initialize default view and set default button active
    navigateTo(target.innerText);
  });

  return navbar;
};

