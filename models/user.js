const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const UserSchema = new Schema({
    image: String,
    name: {
      type: String,
      trim: true,
      required: "name is Required"
    },
    userType: String,
    vendorCategory: {
      type: String,
      required: "name is Required"
    },
    phoneNumber: String,
    email: String,
    instagramName: String,
    password: String,
    isApproved: {
      type:Boolean,
      default:false
    }
  });
  




const user = mongoose.model('users', UserSchema);

module.exports = user;