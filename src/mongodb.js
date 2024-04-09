const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kumarvinay86618:Qwzx12,.@cluster0.t4qkgz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("mongodb failed")
})


const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    }

})

const collection = new mongoose.model('Collection1',loginSchema)

module.exports=collection