const dotenv = require("dotenv")
dotenv.config()

const express  = require("express")
const connectDb = require("./db/db")
const authRoutes = require("./routes/auth.router")

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes)

connectDb().then(()=>{
    app.listen(7000, ()=>{
        console.log("app is listening")
    })
})
.catch((error)=>{
console.log("DATABSE connection failed", error)
})
