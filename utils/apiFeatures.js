class APIFeatures{
    constructor(getBook,queryString){
       this.getBook = getBook;
       this.queryString = queryString;
   }

   filter(){
        const queryObj = {...this.queryString};
        const excludedField = ['page','sort','limit','fields']
        excludedField.forEach(el=>delete queryObj[el])
        this.getBook.find(queryObj);
        return this;
   }
   
   paginations(page,limitation){
        var pages = page * 1 || 1;
        const limit = limitation * 1 || 6;
        let skip = (pages-1) * limit;
        this.getBook = this.getBook.skip(skip).limit(limit);
        return this
   }

   fields(){
    if(this.queryString.field){
        const getField = this.queryString.field.split(',').join(' ');
        this.getBook= this.getBook.select(getField)
    }
   }
    
}
module.exports=APIFeatures;