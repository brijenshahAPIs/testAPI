const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const PORT = 5100;

const app = express();
app.use(bodyParser.json())
app.use(cors());

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');


app.use('/users',userRoutes);
app.use('/email',emailRoutes);

// Initial API Call
app.get("/", (req, res) =>{
    res.send("Email API YouWeUs INC")
});

// MongoDB Connection

const mongoDBURL = 'mongodb+srv://brijenshah29:admin@cluster0.yerfw61.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDBURL,{useNewUrlParser:true,useUnifiedTopology : true})
.then(()=> { 
    app.listen(PORT,()=> {
    console.log("Server started on port No : " + PORT);
        })
    })
    .catch((error)=>{
        console.log(error);
    })