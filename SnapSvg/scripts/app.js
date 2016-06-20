document.getElementById('generateSvg').onclick = function() {
    var s = Snap("#svg");

    var circle = s.circle(200, 200, 150);
    var f = s.filter(Snap.filter.shadow(-5, 0, 5, 'black', 1))
    circle.attr({
        filter: f
    })
    debugger;
    var genealogyArea = new GenealogyArea("#svg")
    var genEl = new GenealogyElement({}, genealogyArea)
    genealogyArea.GenealogyElements.push(genEl)
    
}