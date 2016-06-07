function FalGenealogyElement(params)
{
    GenealogyElement.Call(params)
    if (params.velours == true) {
        this.velours = true
    }
    else {
        this.velours = false
    }

    this.filiere = {
        name: params.filiereNom,
        colors: params.filiereCouleurs
    }
    this.colors = this.element.gradient()
}

FalGenealogyElement.prototype = Object.create(GenealogyElement.prototype, {
    applyColors: function () {
        var nbColors = this.filiere.colors.length
        if (nbColors == 1) {
            this.element.rect.fill(this.filiere.colors[0])
        }
        else {
            var colorPercentage = 1 / nbColors
            var gradientString = ""
            for (var i in this.filiere.colors) {
                gradientString += this.filiere.colors[i] + " " + (colorPercentage * i).toString() + " " + this.filiere.colors[i] + " " + (colorPercentage * (i + 1)).toString() + " ";
            }
            //TODO: Syntaxe incorrecte
            //TODO: créer méthode gradient, proxy de gradient dans GenealogyArea
            var gradient = this.genealogyArea.gradient(gradientString)
            this.element.rect.attr({ gradient: gradient })
        }
        
    }
})