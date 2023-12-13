const User = require("../models/user.model.js")

const register = async (req,res)=>{

try {
    const {username,phone,email,password} = req.body

    const userExists = await User.findOne({email})
    console.log(userExists)

    if (userExists) {
      return  res.status(401).json({message:"user with this email already Exists"})
    }
  
  

    const newUser = await User.create({
        username,
        phone,
        email,
        password
    })

   return res.status(201).json({message:newUser,token: newUser.generateToken()})
} 
catch (error) {
    console.log(error)
}
}

const login =async (req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            let data = {message:"fileds cannot be empty", status:400}
          return  next(data)
          
        }
        const isMatch = await User.findOne({email})
        
        if (!isMatch) {
            let data = {message:"Invalid Credentials", status:422}
           return next(data)
        }

        const isPassword = await isMatch.comparePassword(password)
    
        if (!isPassword) {
            let data = {message:"Invalid Password or Email", status:422}
            return next(data)
         
        }
          
        return res.status(200).json({message:"login Successfully" ,token:isMatch.generateToken()})
    } catch (error) {
        next(error)
      
    }
}

module.exports = {register,login}