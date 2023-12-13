const express = require("express")
const authController  = require("../controllers/auth.controller")
const validator = require("../middlewares/validate.middleware")

const router = express.Router()

router.route("/register").post(validator.validateUserData,authController.register)
router.route("/login").post(authController.login)

module.exports = router