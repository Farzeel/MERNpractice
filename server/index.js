const dotenv = require("dotenv")
dotenv.config()

const express  = require("express")
const cors  = require("cors")
const connectDb = require("./db/db")
const authRoutes = require("./routes/auth.router")
const contactRoutes = require("./routes/contact.router")
const errorHandler = require("./middlewares/error.middleware")

const app = express()

app.use(cors({
    origin:"*",
    credentials:true
}))

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/contact", contactRoutes)

app.use(errorHandler)

connectDb().then(()=>{
    app.listen(7000, ()=>{
        console.log("app is listening")
    })
})
.catch((error)=>{
console.log("DATABSE connection failed", error)
})
