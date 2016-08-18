
var GenealogyArea = function(svgZone) {
    this.svgArea = Snap(svgZone)
    this.mainArea = this.svgArea.group() // always use this if you want to move and scale in the area

}

GenealogyArea.prototype = {
    // Proxy for snap rect function
    rect: function(posX, posY, width, height) {
        var rect = this.svgArea.rect(posX, posY, width, height);
        this.mainArea.push(rect);
        return rect;
    },
    // Proxy for snapSvg Text function
    text: function(posX, posY, text) {
        var text = this.svgArea.text(posX, posY, text)
        this.mainArea.push(text)
        return text
    },
    // Proxy for snap.svg group function
    group: function(args) {
        var group = this.svgArea.group(args)
        this.mainArea.push(group)
        return group
    },

    // Function to translate the plan
    move: function(posX, posY) {
        this.mainArea.transform({
            translate: translate(posX, posY)
        })
    },

    makeFullSize: function(offset) {
        //TODO: Implémenter makeFullSize
        var offTop = offset.Top;
        var offBottom = offset.Bottom;
        var offLeft = offset.Left;
        var offRight = offset.Right;
    },
    scale: function(level) {
        this.mainArea.transform({ scale: scale(level) })
    },
    genealogyContext: [],
    genealogyElements: [],
    updateArea: function() {
        for (var i in this.genealogyContext) {
            var genealogyElement = this.findAssociatedElement(this.genealogyContext[i])
            if (genealogyElement == undefined) {
                genealogyElement = new GenealogyElement(this.genealogyContext[i])
                this.genealogyElements.push(genealogyElement)
                genealogyElement.Update()
                this.placeGenealogyElement(genealogyElement)
            }
        }
    },
    getGenealogyLevel: function(genealogyProfile, actualLevel) {
        //TODO: Cette fonction doit être réécrite, l'algo ne fonctionne surement pas
        if (genealogyProfile.parents == []) {
            return actualLevel;
        }
        else {
            for (i in genealogyContext.GenealogyElements) {
                if (genealogyContext.GenealogyElements[i] == genealogyProfile) {
                    return getGenealogyLevel(genealogyContext[i], genealogyContext, actualLevel + 1)
                }
            }
        }
    },
    getElementsInHorizontalLevel: function(horizontalLevel) {
        var ElementsInHorizontalLevel = []
        for (var i in this.genealogyElements) {
            if (this.genealogyElements[i].horizontalLevel == horizontalLevel) {
                ElementsInHorizontalLevel.push(this.genealogyElements[i])
            }
        }
        return ElementsInHorizontalLevel;
    },
    centerGenealogyElement: function(genealogyElement) {
        var NbElementsInLevel = this.getElementsInHorizontalLevel(genealogyElement.horizontalLevel).length
        //TODO: Changer la position de l'élément en fonction du nombre d'éléments présents sur le même niveau vertical, avec l'API SnapSVG
    },
    placeGenealogyElement: function (genealogyElement) {
        genealogyElement.updatePosition()
        this.centerGenealogyElement(genealogyElement)
    }
}

var GenealogyElement = function(options, genealogyArea) {
    this.posX = (options.posX === undefined) ? 0 : options.posX;
    this.posY = (options.posY === undefined) ? 0 : options.posY;
    this.width = (options.width === undefined) ? 50 : options.width;
    this.height = (options.height === undefined) ? 30 : options.height;
    this.horizontalMargin = (options.horizontalMargin === undefined) ? 0 : options.horizontalMargin;
    this.verticalMargin = (options.verticalMargin === undefined) ? 0 : options.verticalMargin;
    //this.level = getGenealogyLevel(genealogyProfile, genealogyContext, 0)
    var rect = genealogyArea.rect(0, 0, this.width, this.height)
    var text = genealogyArea.text(this.posX / 2, this.posY / 2, genealogyProfile.Name)
    text.attr({ style: "text-anchor: middle;" })
    this.element = genealogyArea.group(rect, text)
    this.element.translate(this.posX, this.posY);
}

/*
var GenealogyElement = function (genealogyProfile, genealogyArea, posX = 0, posY = 0, width=100, height=50, horizontalMargin = 0, verticalMargin = 0) {
    this.posX = posX
    this.posY = posY    
    this.width = width
    this.height = height
    this.horizontalMargin = horizontalMargin
    this.verticalMargin = verticalMargin
    //this.level = getGenealogyLevel(genealogyProfile, genealogyContext, 0)
    var rect = genealogyArea.rect(0, 0, this.width, this.height)
    var text = genealogyArea.text(this.posX / 2, this.posY / 2, genealogyProfile.Name)
    text.attr({ style: "text-anchor: middle;" })
    this.element = genealogyArea.group(rect, text)
    this.element.translate(this.posX, this.posY);
        
}
*/

    GenealogyElement.prototype = {
        horizontalLevel: 0,
        verticalLevel: 0,
        width: 50,
        height: 30,
        horizontalMargin: 0,
        verticalMargin: 0,
        posX: 0,
        posY: 0,
        setText: function(value) {
            this.element.text.value = value
            this.element.text.posX = this.width / 2 - this.element.text.width / 2
            this.element.text.posY = this.height / 2 - this.element.text.height / 2
        },
        updatePosition: function () {
            this.posX = this.horizontalLevel * this.width + this.horizontalLevel * this.horizontalMargin;
            this.posY = this.verticalLevel * this.height + this.verticalLevel * this.verticalMargin;
            this.element.posX = this.posX
            this.element.posY = this.posY
        }
    }
/*
function getGenealogyLevel(genealogyProfile, genealogyContext, actualLevel) {
        if (genealogyProfile.parents == []) {
            return actualLevel;
        }
        else {
            for (i in genealogyContext) {
                if (genealogyContext[i].ID == genealogyProfile.ID) {
                    return getGenealogyLevel(genealogyContext[i], genealogyContext, actualLevel + 1)
                }
            }
        }
}
*/