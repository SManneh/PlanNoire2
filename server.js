const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/vendors', { useNewUrlParser: true });



require('./routing/api-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
  

  db.vendors.create({
    image:"/images/djrell.jpg",
    name:"Deejay Rell",
    vendorCategory:"Deejays",
    phoneNumber:"4694322566",
    email:"deejayrell@gmail.com",
    instagramName:"@deejayrell"
  
  }).then(function(response){

     });

  db.user.create({
    name: "Jewel",
    password: "123456"
  }).then(function(response){

  });
  
});
