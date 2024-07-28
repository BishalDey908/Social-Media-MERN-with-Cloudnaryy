const mongoose = require ("mongoose")

const userRegSchema = new mongoose.Schema({
    username: String,
    email:String,
    password: String,
    profilePic:{
        type:String,
        default: "https://res.cloudinary.com/dzk2q7sk2/image/upload/v1722159857/rjcq8rulrsagnod2c8mz.webp"
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
