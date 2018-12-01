const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const AdminSchema = new Schema({
    email: String,
    password: String,
    isAdmin:{
        ofBoolean: [Boolean],
        
    }

  });
  




const admin = mongoose.model('admins', AdminSchema);

module.exports = admin;