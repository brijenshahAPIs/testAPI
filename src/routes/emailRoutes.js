const express = require('express');
const {sendEmail,getEmail,deleteEmail} = require("../controllers/emailController");

const auth = require("../middlewares/auth");
const emailRouter = express.Router();

emailRouter.get('/emails',auth,sendEmail);
emailRouter.post('/emails',auth,getEmail);
emailRouter.delete('/:id',auth,deleteEmail);

module.exports = emailRouter;
