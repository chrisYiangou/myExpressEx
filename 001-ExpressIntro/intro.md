# Express

Express is very similar in what it does to Spring - API
Spring - Java Framework, OOP only

Express - Can be classes based - But for these purposes we will stick to
a more functional approach.

Express is a minimalist framework to handle web functionality in node.js applications.
Limted Functionality, it is very customisable through middleware

--What is middleware and how does it help?

Middleware - Helps communication between two layers, two 
Client <-> Server 

Express gives us a HTTP Request API we can customise -- GET, POST, PUT/PATCH, DELETE

GET -- Read request
POST -- Create request - Insert data into a database
PUT -- Update -- (take iin an ID and replaces the entire document)
PATCH -- UPDATE --- (only updates what has been modified)
DELETE -- deleting the request 

Exercise --
Create an index.js file that listens to a specific port 
Access thr port number on your browser 
Make the console log out "Hello World" when it starts up

# Request Handling 

Request handling is specifying what you want the app to do

express().get
express().delete().,.

Exercise - Create 4 request handlers (GET, Post, PUT, DELETE)
Each one just does a log out and says what the function is 

-- Request Handler -- URL -
