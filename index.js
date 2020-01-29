
"use strict";
import Router from './shared/router.js';

// Listen on hash change:
window.addEventListener('hashchange', Router);

// Listen on page load:
window.addEventListener('load', Router);