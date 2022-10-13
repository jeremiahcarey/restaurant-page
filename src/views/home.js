import { createElement } from '../helpers/utils.js';

import pizzaImageSrc from '../static/img/pizza.jpg';

export function renderHome() {
  return createElement('section', {
    classes: 'home',
    children: [
      createElement('h2', { text: 'Welcome to A Slice of Jazz!' }),
      createElement('img', {
        src: pizzaImageSrc,
        alt: 'Picture of gourmet pizza',
      }),
      createElement('p', {
        text: `Like gourmet stone fired pizza? Like jazz music? Then you'll love A Slice of Jazz. Relaxing and sophisticated decor. Delicious pizza. Exceptional cocktails. Live music every weekend.`,
      }),
      createElement('p', {
        text: 'Open 11AM to 11PM seven days a week.',
      }),
      createElement('p', {
        text: 'Reservations accepted, but not required, after 5PM. Call (555) 12-PIZZA.'
      }),
    ],
  });
}

export default renderHome;
