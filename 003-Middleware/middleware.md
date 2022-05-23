# Middleware 

Middleware is used to aid the communication betweem tep nodes - client and server

Middleware in express is a function with REQ, RES, NEXT

app.use((req, res, next) => {
    ........
})

-- Exercise - Add custom middleware that prints out the current date and time for every request 
- Add some CORS middleware for every request

Stretch Goal - Add an extra piece of Middleware that returns a number between 1 and 100