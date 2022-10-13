import { createElement } from '../helpers/utils.js';

/**
 * Webpack's resource loader moves and renames files (there are a bunch of options)
 * imported this way if it's setup (see webpack.config.js). This import will have the
 * value of that final image path (dist/[some-hash].png).
 */
import saxManImageSrc from '../static/img/saxman.png';

export const createButton = (text = 'Home', isActive) => {
  const classes = ['nav-btn', `${text.toLowerCase()}-btn`];

  if(isActive) classes.push('active');

  return createElement('button', {
    classes, 
    children: [
      createElement('img', { src: saxManImageSrc }),
      text,
    ],
  });
};

