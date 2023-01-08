const express = require('express')
const app = express()
const callapi= require('./ProductList')
findmainpage=require("./productpage");


app.get('/',async(req, res) => {
    res.send("USE /getAPIResponse");
})
app.get("/getAPIResponse",async (req, res, next) => {
    next();
    },
    (req, res) => {
        callapi.make_API_call("hp pavilion")
    }
);


app.listen(8989, () => console.log(`App listening on port !`))
