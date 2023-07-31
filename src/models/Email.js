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
        default : false
    },
    isDeletedByReceiever : {
        type : Boolean,
        default : false
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
