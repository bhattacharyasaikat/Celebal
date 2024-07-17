const express = require("express")
const app = express() ;
const bodyParser = require('body-parser');
require("dotenv").config() ;
const port = process.env.PORT || 3000 ;
const dbConnect = require("./config/db") ;
dbConnect() ;
app.use(express.json()) ;
app.use(bodyParser.json());
const courseRoutes = require("./routes/courses")
app.use("/api/v1",courseRoutes)

// default route
app.get("/",(req,res)=>{
    res.send(`Server is running at ${port}., Testing route`)
})

app.listen(port , ()=>{
    console.log(`Server is listening at ${port}`)
})