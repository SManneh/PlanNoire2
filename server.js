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
  

  // db.vendors.create({
  //   image:"/images/djrell.jpg",
  //   name:"Deejay Rell",
  //   vendorCategory:"Deejays",
  //   phoneNumber:"4694322566",
  //   email:"deejayrell@gmail.com",
  //   instagramName:"@deejayrell"
  
  // }).then(function(response){

  //    });

  //    db.vendors.create({
  //     image:"/images/bode.jpg",
  //     name:"DJ Bode",
  //     vendorCategory:"Deejays",
  //     phoneNumber:"6825616715",
  //     email:"",
  //     instagramName:"@dj_bode"
      
  //   }).then(function(response){
     
  //   });
  
  //   db.vendors.create({
  //     image:"/images/dj-playboy.jpg",
  //     name:"DJ Playboy",
  //     vendorCategory:"Deejays",
  //     phoneNumber:"2142842145",
  //     email:"djplayboydallas@gmail.com",
  //     instagramName:"@djplayboy"
      
  //   }).then(function(response){
     
  //   });
  
  //   db.vendors.create({
  //     image:"/images/djebou.jpeg",
  //     name:"DJ Ebou",
  //     vendorCategory:"Deejays",
  //     phoneNumber:"4692126636",
  //     email:"djebou@morefyah.com",
  //     instagramName:"@deejayebou"
      
  //   }).then(function(response){
      
  //   });
  
  //   db.vendors.create({
  //     image:"/images/djsherry-shay.jpg",
  //     name:"DJ SherryShay",
  //     vendorCategory:"Deejays",
  //     phoneNumber:"8172622029",
  //     email:"djsherryshay@gmail.com",
  //     instagramName:"@djsherryshay"
      
  //   }).then(function(response){
      
  //   });
  
  //   db.vendors.create({
  //     image:"/images/ashley.jpeg",
  //     name:"BeautybyAshleyOhh",
  //     vendorCategory:"Make Up Artists",
  //     phoneNumber:"4693215805",
  //     email:"beautybyashleyohh@gmail.com",
  //     instagramName:"@beautybyashleyohh"
      
  //   }).then(function(response){
    
  //   });
  
  //   db.vendors.create({
  //     image:"/images/stace.jpeg",
  //     name:"StaceFace Beauty Bar",
  //     vendorCategory:"Make Up Artists",
  //     phoneNumber:"5124829004",
  //     email:"info@stacefacebeauty.com",
  //     instagramName:"@staceface_beauty"
      
  //   }).then(function(response){
    
  //   });
  
  //   db.vendors.create({
  //     image:"/images/fade.jpg",
  //     name:"Fade Eros MUA",
  //     vendorCategory:"Make Up Artists",
  //     phoneNumber:"2144349313",
  //     email:"",
  //     instagramName:"@fade_eros"
      
  //   }).then(function(response){
   
  //   });
  
  //   db.vendors.create({
  //     image:"/images/stella.jpeg",
  //     name:"Stella Lyons",
  //     vendorCategory:"Make Up Artists",
  //     phoneNumber:"4692634252",
  //     email:"makeupbystellez@gmail.com",
  //     instagramName:"@makeupbystelle"
      
  //   }).then(function(response){
    
  //   });
  
  //   db.vendors.create({
  //     image:"/images/fernorm.jpeg",
  //     name:"Fernorm Faces",
  //     vendorCategory:"Make Up Artists",
  //     phoneNumber:"9727559704",
  //     email:"fernormfaces@gmail.com",
  //     instagramName:"@fernormfaces"
      
  //   }).then(function(response){
    
  //   });
  
  
  //   db.vendors.create({
  //     image:"/images/live.jpg",
  //     name:"Live and Inspire Photography",
  //     vendorCategory:"Photographers",
  //     phoneNumber:"4696077714",
  //     email:"liveandinspirephotos@gmail.com",
  //     instagramName:"@live_and_inspire_photography"
      
  //   }).then(function(response){
    
  //   });
  
  //   db.vendors.create({
  //     image:"/images/rahel.jpeg",
  //     name:"Photos By Rahel",
  //     vendorCategory:"Photographers",
  //     phoneNumber:"2142740040",
  //     email:"photosxrahel@gmail.com",
  //     instagramName:"@photosbyrahel"
      
  //   }).then(function(response){
   
  //   });
  
  //   db.vendors.create({
  //     image:"/images/john.jpeg",
  //     name:"John John",
  //     vendorCategory:"Photographers",
  //     phoneNumber:"6825595445",
  //     email:"johnjvhn@gmail.com",
  //     instagramName:"@johnjvhn"
      
  //   }).then(function(response){
   
  //   });
  
  //   db.vendors.create({
  //     image:"/images/nadine.jpeg",
  //     name:"Nayy Swavey Photography",
  //     vendorCategory:"Photographers",
  //     phoneNumber:"6825217644",
  //     email:"NSphotography95@gmail.com",
  //     instagramName:"@nayyswaveyphotography"
      
  //   }).then(function(response){
      
  //   });
  
  //   db.vendors.create({
  //     image:"/images/vmp.JPG",
  //     name:"Victory Media Pro",
  //     vendorCategory:"Photographers",
  //     phoneNumber:"4694410882",
  //     email:"victorymediapro@gmail.com",
  //     instagramName:"@vmpimages"
      
  //   }).then(function(response){
    
  //   });
  
  //   db.vendors.create({
  //     name:"Noire Babes",
  //     image:"/images/noire.JPG",
  //     vendorCategory:"Bartenders",
  //     phoneNumber:"4694322566",
  //     email:"noireagency@gmail.com",
  //     instagramName:"@noireagency"
      
  //   }).then(function(response){
    
  //   });

  // db.user.create({
  //   name: "Jewel",
  //   password: "123456"
  // }).then(function(response){

  // });
  
});
