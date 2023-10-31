const express= require('express')
const router = express.Router();
const Book = require("../model/Book-model");
const booksController=require("../controller/book-controller");

router.get("/",booksController.getAllBook);
router.get("/:id",booksController.getById);

router.post("/",booksController.addBook);

router.put("/:id",booksController.updateById);

router.delete("/:id",booksController.DeleteById);

module.exports= router;