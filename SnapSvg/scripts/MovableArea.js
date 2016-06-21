/// <reference path="jquery-3.0.0.js" />

var movableArea;
/*
function MovableArea_onmousemove(e) {
    console.log('position : X=' + e.pageX + ' Y=' + e.pageY)
    //this.svg.select('#movable').transform
}

function MovableArea_onmousedown(e) {
    movableArea.posX = e.pageX
    movableArea.posY = e.pageY

    $(window).on("mousemove", MovableArea_onmousemove)
}
*/


function MovableArea(svgAreaID) {
    var MovableArea = function () {

        this.area = function () {
            var svgArea = document.getElementById(svgAreaID)

            var inner = svgArea.innerHTML
            svgArea.innerHTML = "<g id='movable'>" + inner + "</g>"
            return svgArea
        }()

        this.svg = Snap('#' + svgAreaID)
        $(this.area).on('mousedown', this.onmousedown)


        $(window).on("mouseup", function (e) {
            $(window).unbind("mousemove", this.onmousemove)
            this.posXmouseUp = e.pageX
            posYmouseUp = e.pageY
        })


    }()

    MovableArea.prototype.onmousedown = function (e) {
        this.posX = e.pageX
        this.posY = e.pageY

        this.onmousemove(e)
    }

    MovableArea.prototype.onmousemove = function (e) {
        $(window).on("mousemove", function (e) {
            console.log('position : X=' + e.pageX + ' Y=' + e.pageY)
            //this.svg.select('#movable').transform
        })

    }

    return MovableArea;
}

