const express = require('express');
const cors = require('cors');

const app = express();

//Common Middleware 
//Json -- For every single request that is sent
// It will activate and provide basic admin tasks to make my coding a looooooott
// easier
app.use(express.json())
app.use(cors());

//Middleware uses the app.use()
//Middleware does something then it calls upoun the next()
//next() invokes the subsequent middleware whic it is passed ont
//Whenever a request is made ALL the middleware are fired.

//Custom 

app.use((req, res, next) => {
    console.log("First Piece of Middleware");
    next()
})

app.use((req, res, next) =>{
    console.log("Second Piece of Middleware");
    next()
})

app.get('/', (req,res) => {
    res.send("Thanks for viewing the site")
})

// @Before -- 


const sever = app.listen(5015, () => {
    console.log("Server has started");
})