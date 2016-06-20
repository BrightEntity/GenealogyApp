var Genealogy = (function () {
    function Genealogy(svgZone) {
        this.svgArea = Snap(svgZone);
        this.mainArea = this.svgArea.group(); // always use this if you want to move and scale in the area
    }
    return Genealogy;
}());
