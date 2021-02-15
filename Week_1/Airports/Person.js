class Person{
    constructor(name){
        this.name=name
        this.bags=[]
    }
    addBag(...bag){
        this.bags.push(...bag)
    }

}

//extends keyword means Passenger inherits the properties within the Person constructor
class Passenger extends Person{
    callAssistant(){
        return "Please can I have a drink"
    }
}

class Crew extends Person{
    greetPassengers(){
        return "Have a nice flight!"
    }
}

module.exports = {Person, Passenger, Crew}
