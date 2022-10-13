import { renderLayout } from './layout.js';
import { navigateTo } from './helpers/utils.js';

/**
 * Webpack's resource loader will move the index file into
 * the dist directory
 */
import './static/index.html';

/** 
 * Webpack's style/css loaders will move this and import and move referenced
 * files (like images) as well
 */
import './static/styles.css';


function initializePage() {
  // Build page layout
  renderLayout();

  // Render initial view into main area (defaulted to 'Home' in function)
  navigateTo();
}

// Init app/website
initializePage();

