const mongoose = require ("mongoose")

const userRegSchema = new mongoose.Schema({
    username: String,
    email:String,
    password: String,
    profilePic:{
        type:String,
        default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
    },
    token:String,
    isLoggedIn:{
        type : Boolean , 
        default : false
    },
    bio:{
        type:String,
        default:"Your bio show here and you can also update your bio"
    }
})

const userRegModel = new mongoose.model("userreg",userRegSchema)

module.exports = userRegModel
