/// <reference path="jquery-3.0.0.js" />

function MovableArea(svgAreaID) {
    var MovableArea = function () {
        var svgArea = document.getElementById(svgAreaID)

        var inner = svgArea.innerHTML
        svgArea.innerHTML = "<g id='movable'>" + inner + "</g>"
        return svgArea
    }

    this.area = MovableArea()
    this.svg = Snap('#'+svgAreaID)
    $(this.area).on('mousedown', function (e) {
        this.posX = e.pageX
        this.posY = e.pageY
        debugger;
    });

    $(this.area).on("mousemove", function (e) {
        //this.svg.select('#movable').transform
    })


    return Snap(svgAreaID)
}