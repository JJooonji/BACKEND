const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth-middleware");

//const userRouter = require("./users");
const loginRouter = require("./login");
const postRouter = require("./posts");
const signupRouter = require("./signup");

//router.use("/", userRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.use("/post", postRouter);

module.exports = router;
