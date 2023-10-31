const Book =require("../model/Book-model");


const getAllBook= async(req, res,next)=>{
    let books;
    try{
          books= await Book.find();
       }
    catch(error){
                 console.log(error);
                }
    if(!books)
    {
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({books})
}


const getById= async(req, res, next)=>{
    const _id= req.params.id;
    let books;
    try{
          books= await Book.findById({_id});
       }
    catch(error){
                 console.log(error);
                }
    if(!books)
    {
        return res.status(404).json({message:"No Book found using this id "})
    }
    return res.status(200).json({books})  
}


const addBook= async(req, res, next)=>{
    const {name, author, description, price, available, image}= req.body;
    let book;
    try{
         book= new Book({
            name,
            author,
            description,
            price,
            available,
             image
         });
         await book.save();
       }
    catch(error){ console.log(error)}

    if(!book)
    {
        return res.status(500).json({message:"Unable to add Book"})
    }
    return res.status(200).json({book});
}


const updateById= async(req, res, next)=>{
    const _id=req.params.id;
    const {name, author, description, price, available, image}= req.body;
    let book;
    try{
          book = await Book.findByIdAndUpdate(_id,{
            name, 
            author,
            description, 
            price,
            available,
            image 
          })

          book= await book.save();
       }
    catch(error){console.log(error)}
    if(!book)
    {
        return res.status(404).json({message:"Unable to Update Book"})
    }
    return res.status(201).json({book});
}

const DeleteById = async (req, res, next)=>{
    const _id=req.params.id;
    let book;
    try{
          book = await Book.findOneAndRemove(_id);
       }
    catch(error){console.log(error)}

    if(!book)
    {
        return res.status(404).json({message:"Unable to Delate Book"})
    }
    return res.status(201).json({book});

}

exports.getAllBook=getAllBook;
exports.addBook=addBook;
exports.getById=getById;
exports.updateById=updateById;
exports.DeleteById=DeleteById;