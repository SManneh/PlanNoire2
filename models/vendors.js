const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const VendorsSchema = new Schema({
      image: String,
      name: {
        type: String,
        trim: true,
        required: "name is Required"
      },
      vendorCategory: {
        type: String,
        required: "name is Required"
      },
      phoneNumber: String,
      email: String,
      instagramName: String,
      user:{
          type:Schema.Types.ObjectId,
          ref:"user"
      }

    });
    

const vendors = mongoose.model('vendors', VendorsSchema);

module.exports = vendors;









// module.exports = function(sequelize, DataTypes) {
//     const Vendors = sequelize.define('Vendors', {
//       image: {
//         type: DataTypes.STRING
//       },
//       name: {
//         type: DataTypes.STRING
//       },
//       vendor_category: {
//         type: DataTypes.STRING
//       },
//       phone_number: {
//         type: DataTypes.STRING
//       },
//       email: {
//           type: DataTypes.STRING
//       },
//       instagram_name: {
//         type: DataTypes.STRING
//     },
//     isApproved: {
//       type: DataTypes.BOOLEAN, defaultValue:false
//     }

//     });
  
//     return Vendors;
//   }