const express = require('express');
const {getReceiveEmail,getSentEmail,sendEmail, updateEmail,deleteEmail} = require("../controllers/emailController");

const auth = require("../middlewares/auth");
const emailRouter = express.Router();

emailRouter.get('/inbox',auth,getReceiveEmail);
emailRouter.get('/sent',auth,getSentEmail);
emailRouter.post('/send',auth,sendEmail);
emailRouter.put('/:id',auth,updateEmail);
emailRouter.delete('/:id',auth,deleteEmail);

module.exports = emailRouter;
