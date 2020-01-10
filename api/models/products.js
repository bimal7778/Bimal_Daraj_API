const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image:String
});

// module.exports = mongoose.model('Simant_Product', productSchema);
module.exports = mongoose.model('Daraz_Product', productSchema);