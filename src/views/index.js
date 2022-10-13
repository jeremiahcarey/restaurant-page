import { renderHome as homeRender } from './home.js';
import { renderMenu as menuRender } from './menu.js';
import { renderAbout as aboutRender } from './about.js';

export const Home = { render: homeRender };
export const Menu = { render: menuRender };
export const About = { render: aboutRender };

export default { Home, Menu, About };


