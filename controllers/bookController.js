const Book = require('./../models/bookModel');

exports.getAllBook = async(req,res,next)=>{
    
    const queryObj = {...req.query};
    const excludedField = ['page','sort','limit','page']
    excludedField.forEach(el=> delete queryObj[el])

    let getBook = Book.find(queryObj);
    console.log(queryObj)

    //field
    if(req.query.field){
        const getField = req.query.field;
        getBook = getBook.select(getField)
    }

    // pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    let skip = (page-1) * limit;
    getBook = getBook.skip(skip).limit(limit);

    const getAllProd = await getBook;

    try{
        res.send({
            result:getAllProd.length,
            status:"success",
            data: getAllProd
        })

    }catch(err){
        res.send({
            status:"failed",
            msg: err
        })

    }
    next()
}

exports.getBookByID = async(req,res,next)=>{
    const bookByID = await Book.findById(req.params.id);
     try{
        res.send({
            status:"success",
            data: bookByID
        })

    }catch(err){
        res.send({
            status:"failed",
            msg: err
        })

    }
    next()
}

exports.createBook = async(req,res,next)=>{
    const createProd = await Book.create(req.body);
     try{
        res.send({
            status:"success",
            data: createProd
        })

    }catch(err){
        res.send({
            status:"failed",
            msg: err
        })

    }
    next()
}


