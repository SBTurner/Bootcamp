const express = require("express")
const app = express()



app.use(express.static('public')) //this is a folder name that you will save your html etc files in. 


app.listen(3000, ()=>{
    console.log('port = ', 3000)
}) //port
