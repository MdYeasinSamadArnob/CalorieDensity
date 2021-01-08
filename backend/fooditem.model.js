const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Fooditem = new Schema({
    fooditem_name: {
        type: String
    },
    fooditem_cals_per_hundred_grams: {
        type: Number
    }
     
});

module.exports = mongoose.model('Fooditem', Fooditem);