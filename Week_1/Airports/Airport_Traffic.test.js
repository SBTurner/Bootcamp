
const Airport = require("./Airport")
const Plane = require("./Planes")

//to run remove '.skip'
describe.skip("Airport Traffic Test", ()=>{
    const LBA = new Airport("LBA")
    const BCN = new Airport("BCN")
    const Etihad = new Plane("Etihad")
    const Jet2 = new Plane("Jet2")
    const RyanAir = new Plane("Ryan Air")
    //initialise so airports have planes
    LBA.landPlane(Jet2,Etihad,RyanAir)


    //----- START TESTS --------
    
    test("Initially, LBA has three planes stationary", ()=>{
        console.log(Airport.airstatus)
        expect(LBA.planes.length).toBe(3)
    })

    
    test("Jet2 plane has set off from LBA, hence no longer based there", ()=>{
        LBA.takeOffPlane(Jet2)
        console.log(Airport.airstatus)
        expect(LBA.planes.length).toBe(2)
    })
    
   
    test("Jet2 plane has landed in Barcelona", ()=>{
        BCN.landPlane(Jet2)
        console.log(Airport.airstatus)
        expect(BCN.planes.length).toBe(1)
    })

}
)