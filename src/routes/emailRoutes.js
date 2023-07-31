const express = require('express');
const {getReceiveEmail,getSentEmail,sendEmail, updateEmail,deleteEmail} = require("../controllers/emailController");

const auth = require("../middlewares/auth");
const emailRouter = express.Router();

emailRouter.get('/emails/inbox',auth,getReceiveEmail);
emailRouter.get('/emails/sent',auth,getSentEmail);
emailRouter.post('/emails/send',auth,sendEmail);
emailRouter.put('/emails/:id',auth,updateEmail);
emailRouter.delete('emails/:id',auth,deleteEmail);

module.exports = emailRouter;
