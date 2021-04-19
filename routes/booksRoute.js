const express = require("express");
const router = express.Router();
const Book = require("../Models/booksModel");

router.post("/saveBook", async (req, res) => {
    console.log("inside route");

const { image, title, author, description, read} = req.body; 

    try{
        const newBook = new Book({
            image,
            title, 
            author,
            description,
            read,
        });
        await newBook.save();
        res.json(newBook);
    } catch(error){
        console.log("fucked up!");
        console.log(error);
    };
});

router.get("/getBooks", async (req, res) => {
    try{
        const saved_books = await Book.find();
        res.json(saved_books);
    }catch(error) {
        console.log(error);
    };
});

router.delete("/deleteBook", async (req, res, next) => {

    const id = req.body.id;


    try{
       const deleteBook = await Book.findByIdAndDelete({_id: id});

        res.status(200).json({message: "deleted"});
        
        next();


    } catch(error){
        console.log(error);
    };
})

module.exports = router;
