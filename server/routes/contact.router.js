const express = require("express")
const validator = require("../middlewares/validate.middleware")

const contactController = require("../controllers/contact.controller")
const route = express.Router()

route.route("/contact").post(validator.validateContactData,contactController)

module.exports = route