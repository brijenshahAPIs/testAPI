const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const emailSchema = new Schema({
    subject : {type : String, required : true},
    body : {type : String, required : true},
    user :{ type : Schema.Types.ObjectId, ref :'User',required : true}
});

module.exports = mongoose.model('Email',emailSchema);
