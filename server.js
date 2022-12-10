const app = require('./app.js')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://srigbok:test1234@cluster0.oj5qw.mongodb.net/Books',{
 
}).then((con)=>{
    console.log('database connection successful')
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server started')
})

