const mongoose = require('mongoose');
const slugify= require('slugify')
const bookSchema = mongoose.Schema({
    bookTitle: {
        type:String,
        required:[true,"Book must have a Title"]  
    },
    bookInfo: {
        type:[String],
        required:[true,"Book must have a short info"],
        maxLength:[2000,"A book info must be less than 2000 characters."]
    },
    author: {
        type:String,
        required:[true,"Book must have a author"]
        
    },
    publisher:{
        type: String,
        required:[true,"Book must have publisher"]
    },
    category:{
        type:[String],
        enum:{values:['Fiction', 'Non-fiction', 'History','Self-help',"Crime","Thriller","Mystery","Romance","Others"],
        message:"category is either: 'Fiction', 'Non-fiction', 'History','Self-help','Crime','Thriller','Mystery','Others'"}
    },
    ImageCover:{
        type:String,
        required:[true,"Book must have publisher"]
    },
    buyItNow:{
        type:String,
        required:[true,"Book must have buy-it-now link"]
    },
    bestseller:{
        type:Boolean,
        default:false
    },
    slug:String,

})

bookSchema.pre('save', function(next) {
  this.slug = slugify(this.bookTitle, { lower: true});
  next();
});



const Book = mongoose.model('Book',bookSchema);
module.exports=Book;
