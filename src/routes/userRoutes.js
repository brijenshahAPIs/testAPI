const express = require("express");
const {Signup, SingIn} = require("../controllers/userController")
const userRouter = express.Router();

userRouter.post("/signup",Signup);
userRouter.post("/signin",SingIn);

module.exports = userRouter;
