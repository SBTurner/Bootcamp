const Airport = require("./Airport.js")


// //------- USING A CALLBACK FUNCTION------
describe("Using a call back function",()=>{
    test("Obtain country information for airport", (done)=>{
        const CDG = new Airport("CDG")

        function callback(error,data){
            expect(error).toBe(null)
            expect(data.country).toBe("FR")
            done()
        }
        CDG.getInfo(callback)  
    })
})



// //------ USING A CALLBACK FUNCTION - Neater: use an anonymous function -----
// describe("Using a call back function - neater",()=>{
//     test("Obtain country information for airport", (done)=>{
//         const CDG = new Airport("CDG")
//         CDG.getInfo((error, data)=>{
//             expect(error).toBe(null)
//             expect(data.country).toBe("FR")
//             done()
//         })  
//     })
// })



//------- USING A PROMISE FUNCTION -------
// describe("Use a promise chain",()=>{
//     test("obtain country of airport",()=>{
//         const CDG = new Airport("CDG")
//         return CDG.getInfo()
//             .then(info=>{
//                 expect(info.country).toBe("FR")
//             })
//             .catch(err => {
//                 expect(err).toBeNull()
//             })
//     })
// })


// //------- USING ASYNC AWAIT FUNCTION -------
// describe("Use async await",()=>{
//     test("obtain country of airport", async ()=>{
//         const CDG = new Airport("CDG")
//         const airport = await CDG.getInfo()
//         expect(airport.country).toEqual("FR")
//         console.log(airport)
//     })
// })


