const express = require('express');

const app = express();

//First instance of Middleware you may encounter
app.use(express.json());

app.get("/hello", () => {
    console.log("This works")
})

//URL params 

app.get("/getSuperheroes/:id", (req, res) =>  {
    // console.log(req);
    // console.log(req.params)
    res.status(200).send(`You superhero name with id ${req.params.id} was seen`)
})

app.delete("/deleteSuperhero", (req, res) => {
    console.log("Hello")
    res.status(202).send("Dan saved the day");
})

//Query Parameters 
// ?name=Spiderman
app.get("/getSuperVillians", (req) => {
    console.log(req.query)
    //We dont need to save anything -- 
    //However we are able to save queries if they do exist
});

//Body Request 

app.post("/newSuperPerson", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("Hello Moto")
})

app.get('/error', (req, res) => {
    //Staus first and then we send in the text through send()
    res.status(502).send("Why are you here")
})



const server = app.listen(5015, () => {
    console.log("WORK");
})