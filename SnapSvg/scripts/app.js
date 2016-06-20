/// <reference path="MovableArea.js" />
/// <reference path="Genealogy.js" />
/// <reference path="jquery-3.0.0.js" />


document.getElementById('generateSvg').onclick = function () {
    var s = Snap("#svg");

    var circle = s.circle(200, 200, 150);
    debugger;
    var genealogyArea = new GenealogyArea("#svg")
    var genEl = new GenealogyElement({}, genealogyArea)
    genealogyArea.GenealogyElements.push(genEl)
}

document.addEventListener("DOMContentLoaded", function () {
    var movableArea = new MovableArea("svg")
    
    
})