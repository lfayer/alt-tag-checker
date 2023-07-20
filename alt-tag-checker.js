javascript: (function() {
    var style = document.createElement('style');
    var styleContent = document.createTextNode('img:not([alt]){ filter: grayscale(100%); border: 3px dashed black; }');
    style.appendChild(styleContent);
    var caput = document.getElementsByTagName('head');
    caput[0].appendChild(style);
})();
