const app = require('./app.js')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://srigbok:test1234@cluster0.oj5qw.mongodb.net/Books',{
 
}).then((con)=>{
    console.log('database connection successful')
})

app.listen(3000,()=>{
    console.log('server started')
})

