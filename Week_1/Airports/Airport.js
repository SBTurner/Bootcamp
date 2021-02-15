// fs required in order to load in JSON data using readFile.
const fs = require("fs")
const { readFile } = require("fs/promises")


class Airport{
    //keeps a log
    static airstatus = []

    constructor(name){
        this.name = name
        this.planes = []
        //used to push the whole of the constructor (including name and planes) to the airstatus variable. This can be accessed by Aiport.airstatus
        this.constructor.airstatus.push(this)
    }
    landPlane(...plane){
        this.planes.push(...plane)
    }
    takeOffPlane(plane){
        //find the plane in the airport, use splice to remove the plane from the this.planes
        var ind = this.planes.findIndex(p => p = plane.name)
        this.planes.splice(ind,1)
    }



    //---------- ASYNC function: 'callback' ---------
    getInfo(callback){
        fs.readFile("./airports.json",(err,data)=>{
            const airports = JSON.parse(String(data))
            const [airport] = Object.keys(airports).filter(a => airports[a].iata === this.name).map(a =>airports[a])
            //console.log(airport)
            callback(err,airport)
        })
    }

    //-------- ASYNC function: 'promise' --------
    // getInfo(){
    //     return new Promise ((resolve,reject)=>{
    //         fs.readFile("./airports.json",(err,data)=>{
    //             if (err) return reject(err)

    //             const airports = JSON.parse(String(data))
    //             const [airport] = Object.keys(airports).filter(a => airports[a].iata === this.name).map(a =>airports[a])
    //             console.log(airport)
    //             resolve(airport)
    //         })
    //     })

    // }

    //-------- ASYNC function: 'async await' --------
    // async getInfo(){
    //     return new Promise ((resolve,reject)=>{
    //         fs.readFile("./airports.json",(err,data)=>{
    //             if (err) return reject(err)

    //             const airports = JSON.parse(String(data))
    //             const [airport] = Object.keys(airports).filter(a => airports[a].iata === this.name).map(a =>airports[a])
    //             console.log(airport)
    //             resolve(airport)
    //         })
    //     })

    // }

}

module.exports = Airport