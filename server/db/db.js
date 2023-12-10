const mongoose = require("mongoose")

const connectDatabase =async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected successfully")
} catch (error) {
    console.log("Database Connection Failed", error)
    process.exit(1)
}
}

module.exports = connectDatabase

