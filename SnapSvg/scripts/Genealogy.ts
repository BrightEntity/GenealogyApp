class Genealogy {
    svgArea: Snap;
    mainArea: any;

    constructor(svgZone: Snap) {
        this.svgArea = Snap(svgZone)
        this.mainArea = this.svgArea.group() // always use this if you want to move and scale in the area
        
    }
}