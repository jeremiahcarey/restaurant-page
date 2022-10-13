/** used by navigateTo */
import * as views from '../views/index.js';

/**
 * This takes a tag name and the options associated with it.
 * I couldn't resist the urge to destructure. In this case it'd
 * be equivalent to the arguments being (tagName, options) and
 * const text = options.text; below in the body
 */
export const createElement = (tagName, {
  /**
   * I'd probably give these defaultvalues and an error state
   * html and text are mutually exclusive
   */
  text, html, classes, children, src, alt,
}) => {
  const newElement = document.createElement(tagName);

  // Set either the text or HTML
  if(text) {
    newElement.innerText = text;
  } else if (html) {
    newElement.innerHTML = text;
  }

  // Add multiple or single classes
  if(Array.isArray(classes)) {
    newElement.classList.add(...classes);
  } else if (typeof classes === 'string') {
    newElement.classList.add(classes);
  }

  // An array of nodes or single node for nesting children
  if(Array.isArray(children)) {
    children.forEach(ch => appendTextOrElement(newElement, ch));
  } else if (children) {
    appendTextOrElement(newElement, children);
  }

  // If it's an image
  if(src) {
    newElement.src = src;
  }
  if(alt) {
    newElement.alt = alt;
  }

  return newElement;
};


/**
 * Just so we don't have to keep calling appendChild
 */
export const appendTextOrElement = (target, child) => {
  target.appendChild(typeof child === 'string' ? new Text(child) : child)
};


/**
 * Just so we don't have to keep calling appendChild
 */
export const appendChildren = (target, nodes = []) => {
  nodes.forEach(child => appendTextOrElement(target, child));
};


/**
 * For navigation between views
 */
export const navigateTo = (viewName = 'Home') => {
  const mainContent = document.querySelector(".main-content");

  mainContent.innerHTML = "";
  /**
   * tricky way to interpolate the function name
   * by accessing them as a property on the object
   */
  mainContent.appendChild(
    views[viewName].render(),
  );
}


