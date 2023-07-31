const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const emailSchema = new Schema({
    sender: {
        type: String,
        required : true
    },
    reciever : 
    {type: String, 
        required : true
    },
    subject : {
        type : String, 
        required : true
    },
    body : {
        type : String, 
        required : true
    },
    isDeletedBySender : {
        type : Boolean,
        required : true
    },
    isDeletedByReceiever : {
        type : Boolean,
        required : true
    },
    user :{ 
        type : Schema.Types.ObjectId,
         ref :'User',
         required : true}
}, 
{
    timestamps : true
});

module.exports = mongoose.model('Email',emailSchema);
