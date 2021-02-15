//class names always singular and begin with Capital letter
class Bag {
    constructor(weight){
        if(!weight) throw new Error("The bag must have a weight!")
        this.weight = weight
        
    }
}

module.exports = Bag