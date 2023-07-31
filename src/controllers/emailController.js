const Email = require('../models/Email');

const sendEmail = async (req,res) => 
{

const {sender,reciever,subject,body,isDeletedBySender,isDeletedByReceiever} = req.body;
try {
const newEmail = new Email({
    sender : sender,
    reciever:reciever,
    subject:subject,
    body:body,
    isDeletedBySender:isDeletedBySender,
    isDeletedByReceiever : isDeletedByReceiever,
    user:req.user.userId });

    await newEmail.save();
    res.json(newEmail);
}catch(error)
{
    res.status(500).json({error: "Something went wrong..."});
}
}

const getSentEmail = async (req,res) =>
{
    try{

        const emails = await Email.find({user : req.user.userId});
        res.status(200).res.json(emails);

    }catch(error)
    {
        res.status(500).json({error:"Something went wrong"})
    }
}

const getReceiveEmail = async (req,res) =>
{
    try {
        const emails = await Email.find({reciever:req.Email.reciever})
        res.status(200).res.json(emails);
    }catch(error){
        res.status(500).json({error:"Something went wrong"})

    }
}

const updateEmail = async(req,res) => {
    const id = req.params.id;
    const {sender,reciever,subject,body,isDeletedBySender,isDeletedByReceiever} = req.body;
    const newEmail = {
        sender:sender,
        reciever:reciever,
        subject:subject,
        body:body,
        isDeletedBySender:isDeletedBySender,
        isDeletedByReceiever:isDeletedByReceiever,
        user:req.user.userId
    }
    try{
        await newEmail.save();
        res.status(201).json(newEmail);
        
    }catch(error){
        res.status(500).json({error:"something went wrong"});
    }
}

const deleteEmail = async (req,res) =>
{
    try{

    const id = req.params.id;
    const email = await Email.findByIdAndRemove(id);
    res.status(200).json(email);

    }catch(error){
        res.status(500).json({error: "Something went wrong"})
    }
}

module.exports = {
    sendEmail,
    getReceiveEmail,
    getSentEmail,
    updateEmail,
    deleteEmail
}
