import { createElement, appendChildren } from './helpers/utils.js';
import { renderNavbar } from './components/navbar.js';

export const renderSidebar = () => createElement('aside', { classes: 'sidebar' });

export const renderContentBody = () => createElement('div', {
  classes: 'content-body',
  children: [
    renderHeader(),
    createElement('main', { classes: 'main-content' }),
  ],
});

export const renderHeader = () => createElement('header', {
  classes: 'header',
  children: [
    createElement('div', {
      classes: 'logo',
      children: [
        createElement('h1', { text: 'A Slice of Jazz' }),
      ],
    }),
    renderNavbar(),
  ],
});

export const renderLayout = () => {
  // Only render the layout elements
  appendChildren(document.body, [
    renderSidebar(), renderContentBody(),
  ]);
};


