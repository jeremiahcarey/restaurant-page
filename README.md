# GENERAL FEEDBACK FORK

**[JRH]**:
I tried to keep the functionality the same, reduce some repetition, organize the code a bit more, and leave comments where I could.

I think I may have failed in some parts, especially when it came to utilizing webpack. Webpack is so complicated I was trying to take shortcuts but it may cause confusion and is probably not optimal.

**I also _tried_** to keep a similar style but quickly lost that as I began rewriting things and so a lot of my style crept in (implicit arrow function returns, interpolation, indents, etc). Sorry about that, lemme know if anything's confusing. This could probably still use an audit of function names, code consistency, and organization but I got a bout of hyperfocus earlier and didn't expect to do this much lol.

I wanted to continue but this felt like a good stopping place.  This is my _**general feedback**_ version, I'd like to follow up with a _"How I'd do it"_ branch using classes and routing and maybe bundle splitting among other things.

Unless this isn't helpful, please let me know, lol.

## The changes I made:
- Moved rendering and bindings out of the "app mount" index.js file
- Created a generalized `createElement` function that takes a tag name and some options
  - The options contains values for common attributes, or values that represent them
    - The `alt` &amp; `src` property for images are self-explanatory
    - The `classes` property will apply a single class or array of classes
    - The `text` property will set the `innerText` on the element (mutually exclusive with `html`)
    - The `html` property will set the `innerHTML` on the element (mutually exclusive with `text`)
    - The `children` property contains a list of node that the function will append to the main element being created (it expects a DOM node). This allows you to define a _whole markup tree_ with _nested calls_ (this is similar to how `jsx` is compiled and how you use some similar function-based renderers
- Created some folders to separate functionality
  - `helpers/` contains `utils.js` (it temporarily held `constants.js` but I thought it wasn't useful)
  - `static/` contains all the static/public files that will be moved to the `dist/` directory
    - This is the normal webpack way to handle built files and transformations
    - This contains an `img/` subfolder with the images used in the application, as well as the `styles.css` and `index.html`
      - The `styles.css` was added to the webpack loader so that webpack could analyze it's imports and move them (like images from the `url()` css function)
      - The `index.html` was added just for the file move, but I did remove the reference to the `styles.css` since the `style-loader`/`css-loader` injects the styles directly into the `<head>` tag
          - Usually you'd probably have separate development/production templates and the `main.js` would be injected too but I didn't wanna' make it worse
- Moved common functionality into `utils.js` 
    - `createElement` detailed above
    - `appendTextOrElement` is a utility for appending either a DOM node, or a string (as a `Text` node) to a `target` node, this way `children` in `createElement` can just contain siblings that are strings, like in the case of the nav buttons image/text
    - `appendChildren` will loop through an array of nodes and append them to the `target` passed in. Used by `createElement` via `appendChildren`
    - `navigateTo` replace the `loadPage`-style functions that were in each view. It resets the innerHTML for the main section and appens the new view based on the passed-in `viewName`
      - A lot of the navigation, rendering, and state, is based on the three 1-word names (e.g. `'Home', 'Menu', 'About'`). This is fine for this site but it's pretty fragile and in the real world it's likely these could be dynamically passed in and are _not_ 1 single word that is capitalized. Maybe I can revisit in my follow up branch if you're not uninterested
- Used some more semantic tag names
  - `<header>` for the header
  - `<nav>` for the nav
  - `<main>` for the main container
  - `<section>` for the views
  - `<aside>` for the "sidebar"
- Broke out "components" into a `components/` folder when they're re-used, or global elements (this could be setup a few different ways but there are only 2 files)
- Created a `views/` folder with an `index.js` that exports them all (so they can be accessed dynamically by `navigateTo`
  - Each view has the same exact code, just translated into the `createElement` function calls
- Modified the `package.json` and dependencies
  - Changed all `dependencies` to `devDependencies` since they're build related
  - Added `"type": "module"` to the `package.json` so I could `import`/`export` es6-module-style (including in the config)
  - Created 3 scripts
    - `start` (run with `npm start`) which runs a development webpack-dev-server and watches for file changes
    - `watch` (run with `npm run watch`) which watches for file changes _without_ running a dev server
    - `build` (run with `npm run build`) which creates a production bundle in the `dist/` folder
- Added `dist/` to the `.gitignore` so that generated files don't end up in the repo (generally a best-practice).
  - **Note**: This will probably need changed (or maybe even reverted) if you're using github pages to serve the website


## ORIGINAL `README.md` for restaurant-page

Built as part of The Odin Project, the main purpose of this project was to practice using webpack and ES6 modules.  It is a single page site where all of the HTML is dynamically rendered using vanilla JavaScript stored in different modules representing the different pages.

Live demo: https://jeremiahcarey.github.io/restaurant-page/
