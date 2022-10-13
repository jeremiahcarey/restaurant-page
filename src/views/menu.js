import { createElement } from '../helpers/utils.js';

import pizzaImageSrc from '../static/img/pizza2.jpg';

export function renderMenu() {
  return createElement('section', {
    classes: 'menu',
    children: [
      createElement('h2', {
        text: 'Our Menu',
      }),
      createElement('img', { src: pizzaImageSrc, alt: 'Picture of gourmet pizza' }),
      createElement('p', {
        text: "You'll love our unique and gourmet all-vegetarian pizzas. We use only the freshest ingredients, sourcing organic and local when possible. Each and every day we feature a new chef-designed pizza, which can be ordered in either a 10\" personal size or a 15\" shareable size.  Call ahead to ask about the featured pizza that day, or show up and be delightfully surprised."
      }),
      createElement('h3', {
        text: 'Recently Featured Pizzas',
      }),
      createElement('p', {
        text: "Margherita: Organic fresh tomato (Golden Rule Organics), fresh mozzarella made in Berkeley by Belfiore, mozzarella, garlic olive oil, fresh basil",
      }),
      createElement('p', {
        text: "Cremini mushroom, onion, Skyhill Farms goat cheese, mozzarella, garlic olive oil, oregano, Italian parsley"
      }),
      createElement('p', {
        text: "Organic Warren pear (The Peach Jamboree), caramelized onion, walnut, mozzarella, Dunbarton blue cheese, arugula, lemon vinaigrette"
      }),
      createElement('p', {
        text: "Fresh corn, onion, poblano chile, Valbreso feta cheese, mozzarella, garlic olive oil, cilantro, lime"
      }),
    ],
  });
}

export default renderMenu;
