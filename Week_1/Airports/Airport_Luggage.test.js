const Bag = require("./Bag.js")
const {Person,Passenger} = require("./Person.js")
const Plane = require("./Planes")
const Airport = require("./Airport.js")

//to run remove '.skip'
describe.skip('Tests on the aiport', ()=>{
    test('if bag has no weight, it throws an error', ()=>{
        //Here, expect() needs to accept a function, where the new Bag() is declared within it in order to receive the error
        expect(()=> new Bag()).toThrowError()
    })
    test('bag has a weight', ()=>{
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })
    test('person has a name', ()=>{
        const person = new Person("Sarah")
        expect(person.name).toBe("Sarah")
    })
    test('Sarah has a bag property', ()=>{
        const person = new Person("Sarah")
        expect(person).toHaveProperty("bags")
    })
    test('Sarah has a bag',()=>{
        const person = new Person("Sarah")
        const bag = new Bag(40)
        person.addBag(bag)
        expect(person.bags[0].weight).toBe(40)
    })
    test('Sarah has multiple bags', ()=>{
        const person = new Person("Sarah")
        const bag1 = new Bag(10)
        const bag2 = new Bag(25)
        person.addBag(bag1,bag2)
        expect(person.bags).toHaveLength(2)
        console.log(person.bags.length)
    })
    test('Plane has a name',()=>{
        const plane = new Plane("Jet2")
        expect(plane.name).toBe("Jet2")
    })
    test('Sarah has boarded the plane',()=>{
        const person = new Passenger("Sarah")
        const plane = new Plane("Jet 2")
        plane.boardPlane(person)
        expect(plane.boardedPassengers[0].name).toBe(person.name)
    })
    test('Airport has a location',()=>{
        const airport = new Airport("Barbados")
        expect(airport.name).toBe("Barbados")
    })
    test('Airport can have Plane land',()=>{
        const airport = new Airport("Barbados")
        expect(airport.planes).toStrictEqual([])
    })
    test('Airport has a plane landed there',()=>{
        const airport = new Airport("Barbados")
        const plane = new Plane("Jet2")
        airport.landPlane(plane)
        expect(airport.planes[0]).toBe(plane)
    })

})

//to run remove '.skip'
describe.skip("Airport Simulation", ()=>{
    test("Simulation 1",()=>{
        //Airport is LBA
        airport = new Airport("Leeds Bradford Airport")
        airport_dest1 = new Airport("Rome")
        airport_dest2 = new Airport("Dubai")
        //Planes at LBA
        plane1 = new Plane("Jet2",airport_dest1)
        plane2 = new Plane("Etihad",airport_dest2)
        //Passengers
        passenger1 = new Person("Sarah")
        passenger2 = new Person("Sophie")
        passenger3 = new Person("Tilly")
        //Check-bags in
        passenger1.addBag(new Bag(20),new Bag(5))
        passenger2.addBag(new Bag(18))
        passenger3.addBag(new Bag(2))
        //Passengers to board their planes
        plane1.boardPlane(passenger1)
        plane2.boardPlane(passenger2)
        plane2.boardPlane(passenger3)
        //Plane has landed at the destination
        airport_dest1.landPlane(plane1)
        airport_dest2.landPlane(plane2)
        //TEST: Expect the weight of Tilly's bag to be 2kg, which was on the Etihad flight landed in Dubai
        expect(airport_dest2.planes[0].boardedPassengers[1].bags[0].weight).toBe(2)
        console.log(airport_dest2.planes[0].boardedPassengers[1].bags[0].weight)
        console.log(airport_dest2)
    })
})