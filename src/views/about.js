import { createElement } from '../helpers/utils.js';

import chefImageSrc from '../static/img/chef.jpg';

export function renderAbout() {
  return createElement('section', {
    classes: 'about',
    children: [
      createElement('h2', { text: 'About Us' }),
      createElement('img', {
        src: chefImageSrc,
        alt: 'Picture of a happy chef in kitchen',
      }),
      createElement('p', {
        text: "Chef Mario has had a passion for pizza for as long as he can remember, and a passion for jazz since he first came across a recording of Chet Baker singing and playing the trumpet.  Combining them seemed like a dream come true.  What could be better than listening to great jazz while enjoying great pizza?  Maybe add in a cocktail and a few good friends.  Heaven.",
      }),
      createElement('p', {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }),
    ]
  });
}

export default renderAbout;
