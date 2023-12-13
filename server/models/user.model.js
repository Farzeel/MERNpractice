const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken =  function(){
return jwt.sign({
    _id:this._id,
    username:this.username
},
process.env.SECRET_KEY,
{
    expiresIn:process.env.TOKEN_EXPIRY
}
)
}

 const User = mongoose.model("User",userSchema)

 module.exports = User