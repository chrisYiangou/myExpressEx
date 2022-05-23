//Before we can do anything we want node project

//Import Express Package as a variable

const express = require('express');

//Create a variable called app that is equal to express()

const app = express();

//URL is a very powerful thing --

//I shall be making a very basic get method -- All I shall be doing is printing to
// the console GET 

//First parameter = String of the path you want the get request to be located on

//Get Functionality

// URL parameter -- 
// app.get('/getSuperheroes/:name', (req) => {
//     console.log(req)
//     console.log(req.params)
// })

//queries
app.get('/getSuperheroes', (req) => {
    console.log("This is working")
    console.log(req.query)
    
}) 



app.get("/helloWorld", () => {
    console.log("Hello World");
});

// delete 

app.delete("/delete", () => {
    console.log("This is the function that we use to delete");
});

app.post("/post", () => {
    console.log("This function posts")
})

app.put("/put", () => {
    console.log("This function puts")
})


//

//Making a variable called server, this server is going to be listening to 5015
const server = app.listen(5015, () => {
    console.log(`Server has started on port ${server.address().port}`)
})
