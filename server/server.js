const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();


// MongoDB connection
mongoose.connect('mongodb+srv://kumarvinay86618:Qwzx12,.@cluster0.t4qkgz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error',console.error.bind(console,"error connection: "));
db.once('open',()=>{console.log("connection is successful")});
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/auth', authRoutes);

app.listen(process.env.PORT ||3000,function(){
  console.log("\n'server started'");
});
