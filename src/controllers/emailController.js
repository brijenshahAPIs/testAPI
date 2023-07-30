const Email = require('../models/email');

const sendEmail = async (req,res) => 
{

const {subject,body} = req.body;
try {
const newEmail = new Email({
    subject:subject,
    body:body,
    user:req.user.userId });

    await newEmail.save();
    res.json(newEmail);
}catch(error)
{
    res.status(500).json({error: "Something went wrong..."});
}
}

const getEmail = async (req,res) =>
{
    try{

        const emails = await Email.find({user : req.user.userId});
        res.status(200).res.json(emails);

    }catch(error)
    {
        res.status(500).json({error:"Something went wrong"})
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
    getEmail,
    deleteEmail
}
