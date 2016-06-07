document.getElementById('generateSvg').onclick = function() {
    var s = Snap("#svg");

    var circle = s.circle(200, 200, 150);
    debugger;
    var genealogyArea = new GenealogyArea("#svg")
    var genEl = new GenealogyElement({}, genealogyArea)
    genealogyArea.GenealogyElements.push(genEl)
}