const mongoose= require('mongoose');

const bookShema=new mongoose.Schema({
   name:{
          type: String,
          require: true,    
        },
    author:{
            type: String,
            require: true,    
           },
    description: {
                  type: String,
                  require: true,    
                }, 
    price: {
             type: Number,
             require: true,
             default: 0,   
           },
    available: {
                 type: Boolean,
                 require: true,    
                },
    image:{
            type: String,
            require: true,
          }
},{timestamps:true});

module.exports= mongoose.model('Book', bookShema);