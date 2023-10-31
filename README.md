# BookBackend

Node.js Backend Developer Challenge
Objective : Develop a RESTFull API using Node.js for managing books.
Features:  CURD operations:  
•	Add a new book(title, author, summary)
•	View a list of books
•	View details of a specific book by its ID
•	Update a book’s details
•	Delete a book
                  DataBase:
•	Use MongoDB
  

SetUp :
•	VS code
•	Npm (npm int -y)
•	Express (npm i express)
•	Mongoose (npm i mongoose)

    Create index.js file , this is main file for Backend , in file I have written code for Database connection, with mongoDB Atlas and Middleware code .
After connecting MongoDB Atlas Database then create Model folder and in it create Book-model.js file where define the Schema of Book Like name, author, description, image which is String type, price is Number type and Available is Boolean type.
Create route and Controller file where define logics of all CURD operation.
•	If   go on Home route (/) using get then go in controller where define to get all Book using “get” method and find all book
•	Go on (‘/:id’) using get then go in  getById controller and then Book using id. If id will find in DB then return All about that book otherwise return Book not found.
•	Go on(/)using Post then go in addBook controller and destructuring all data from request body and save itin Database.
•	Go on (‘/:id’) using put then go in UpdateById controller and get id from request params and all data of that book from request body then find that book from database using id and upadate it and save in database.
•	Go on (‘/:id’) using Delete then go in DeleteById controller and find that book using this id from DB and Delete it. 

