const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var brandCategorySchema = new mongoose.Schema({
    brand:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
},
{
    timestamps: true
}
);

//Export the model
module.exports = mongoose.model('BrandCategory', brandCategorySchema);