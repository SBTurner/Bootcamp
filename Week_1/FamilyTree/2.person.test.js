
const famTree = require("./2.person.js");

describe("tests on Sarah's family tree ", ()=>{
    test("I have a name", ()=>{
        expect(famTree[2].name).toEqual("Sarah")
    })
    test("I am 23 years old", ()=>{
        expect(famTree[2].age).toBe(23)
    })
    test("I have a brother called Matthew", ()=>{
        expect(famTree[2].siblings[0].name).toBe("Matthew")
    })
    test("My brother David is younger than me", ()=>{
        expect(famTree[2].siblings[1].age).toBeLessThan(23)
    })
    test("My dad is older than my mum", ()=>{
        expect(famTree[2].parents[0].age).toBeGreaterThan(famTree[2].parents[1].age)
    })

})
