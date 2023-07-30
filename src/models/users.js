const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : {
        type : String,
        require : true}
    },
    {
        timestamps : true
    });

    module.exports = mongoose.model('User',userSchema);