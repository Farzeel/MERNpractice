const contactSchema = require("../validators/contact.validation")
const userSchema = require("../validators/user.validation")

const validateUserData = async (req,res,next) =>{

    const data = req.body
    try {
       await userSchema.parseAsync(data)
        next()
    } catch (error) {

        let data = {message:error.issues[0].message, status:400}
         next(data)
    }

}

const validateContactData = async (req,res,next)=>{
const data = req.body


try {
    await contactSchema.parseAsync(data)
    next()
} catch (error) {
    let data = {message:error.issues[0].message, status:400}
    next(data)
}

}

module.exports= {validateUserData, validateContactData}