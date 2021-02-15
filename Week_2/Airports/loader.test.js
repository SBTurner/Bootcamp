const {loader,db} = require("./loader")

//In order to run the above query, use .run, e.g. db.run(query, function(error)). Put this in an async function that can be called.
beforeAll((done)=>{
    // Query: Create table in SQL format
    const queryCreate = "CREATE TABLE IF NOT EXISTS airports(id INTEGER PRIMARY KEY, icao TEXT, iata TEXT, name TEXT, city TEXT, state TEXT, country TEXT, elevation INTEGER, lat FLOAT, lon FLOAT, tz TEXT);"
    db.run(queryCreate, done)
})


describe("Loading data from database", ()=>{
    test("All data rows have loaded", (done)=>{
        loader(()=>{
            db.get("SELECT COUNT(id) AS total FROM airports;", (err,row)=>{
                console.log(row)
                expect(row.total).toBe(28868)
                done()
            })
        })

        
    })
})