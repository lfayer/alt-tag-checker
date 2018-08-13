# Image alt tag checker
Bookmarklet to validate that all images on a page have alt tags

## How to create a bookmarklet

- Create new bookmark
- Copy the contents of [alt-tag-checker.js](alt-tag-checker.js) 
- Drag bookmark to your browser bar

or

[drag this bookmarklet to your bar](javascript: (function() {var style = document.createElement('style'),styleContent = document.createTextNode('img:not([alt]){ filter: grayscale(100%); border: 3px dashed black; }');style.appendChild(styleContent);var caput = document.getElementsByTagName('head');caput[0].appendChild(style);})();)
