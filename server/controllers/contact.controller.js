const Contact = require("../models/contact.model")

const contactController = async (req,res,next)=>{

try {
    const {name,message,email} = req.body
    
   const contactUser =  await Contact.create({
      name,message,email
    }) 
    return res.status(200).json({contactUser, message:"Message has been sent Successfully"})
} catch (error) {
 next(error)   
}

}

module.exports = contactController