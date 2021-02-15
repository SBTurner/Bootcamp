const {Database} = require("sqlite3") // Database = sqlite3.Database
const airportdata = require("./airports.json")


// Create a new database, the token ":memory:" means db will be stored in memory so won't write out to a file each time you run tests. 
// Alternatively specifying a filename will either create a new file if it doesn't exist, or access an existing one.
//const db = new Database(":memory:",(err)=>{
const db = new Database(":memory:")


// Run the SQL query to insert the data into the airports table. This needs to be used in a recursive function
function insertData(airportdata,callback){
    if (airportdata.length === 0) return callback()
    
    // Query: Insert each airport into the airports table. Object keys used to list the keys (joined by commas), values use the '?' keyholders as we iterate over airportdata array
    const airport = airportdata.pop()
    db.run(`INSERT INTO airports(${Object.keys(airport).join(",")}) VALUES (?,?,?,?,?,?,?,?,?,?);`, Object.values(airport), function(err){
        insertData(airportdata,callback) //This is recursive. It calls itself until no data left
    })
}



function loader(callback){
    insertData(airportdata,callback)
}


module.exports = {loader,db}