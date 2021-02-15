const {Person, Passenger, Crew} = require("./Person.js")


class Plane{
    constructor(plane){
        this.name = plane
        this.boardedCrew = []
        this.boardedPassengers = []
    }
    boardPlane(person){
        if (person instanceof Crew)
        this.boardedCrew.push(person)
        else if (person instanceof Passenger || person instanceof Person)
        this.boardedPassengers.push(person)
    }
    leavePlane(person){
        //find the person on the plane, use splice to remove them from the plane
        if (person instanceof Crew){
        var indCrew = this.boardedCrew.findIndex(p => p = person.name)
        this.boardedCrew.splice(indCrew,1)}
        else if (person instanceof Passenger || person instanceof Person){
        var indPassenger = this.boardedPassengers.findIndex(p => p = person.name)
        this.boardedPassengers.splice(indPassenger,1)}
    }
}

module.exports = Plane