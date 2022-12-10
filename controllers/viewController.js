const Book = require('./../models/bookModel')
const APIFeatures = require('./../utils/apiFeatures.js')

exports.getOverview=async(req,res,next)=>{

  const features = new APIFeatures(Book.find(),req.query).filter().paginations()
  let getItAllProd = await features.getBook;
  res.render('overview',{
    data:getItAllProd,
    title:"trending books"
  })
  next()
}


exports.getOneBook =async(req,res,next)=>{
  const getThatBook = await Book.findOne({slug:req.params.id})
  res.render('onebook',{
    data:getThatBook
  })
  next()
}
exports.getContact =async(req,res,next)=>{
  res.render('contact')
  next()
}
exports.getAbout =async(req,res,next)=>{
  res.render('about')
  next()
}

exports.categories= async(req,res,next)=>{
  const getCate = await Book.find({category:req.params.category})
  res.render('overview',{
    data:getCate,
    name:req.params
  })
  next()
}
exports.bestseller= async(req,res,next)=>{
  const getBestseller = await Book.find({bestseller:true})
  res.render('overview',{
    data:getBestseller,
    title:"Best Seller"
  })
  next()
}
exports.paginationOfBook = async(req,res,next)=>{
  let pages = req.params.page
  pages = pages * 6 || 6;
  const limit = 6;
  let skip = pages-6;

  const getlimitedbook = await Book.find({}).limit(limit).skip(skip);
  res.render('overview',{
    data:getlimitedbook,
    title:"trending books"
  })
  next()
}



// exports.getOneBook =async(req,res,next)=>{
//   const getThatBook = await Book.findById(req.params.id)
//   res.render('onebook',{
//     data:getThatBook
//   })
//   next()
// }

// exports.categories= async(req,res,next)=>{
//   const getCate = await Book.find({category:req.params.category});
//   res.render('overview',{
//     data:getCate,
//     name:req.params
//   })
//   next()
// }

// exports.paginationOfBook = async(req,res,next)=>{
//   let pages = req.params.page
//   pages = pages * 6 || 6;
//   const limit = 6;
//   let skip = pages-6;

//   const getlimitedbook = await Book.find({}).limit(limit).skip(skip);
//   res.render('overview',{
//     data:getlimitedbook,
//   })
//   next()
// }
