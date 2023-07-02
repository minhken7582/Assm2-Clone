var mongoose = require('mongoose')
var CarSchema = mongoose.Schema(
    {
        name : String,
        quantity : Number,
        category : String,
        image : String,
        price : Number
    }
)

var CarModel = mongoose.model('xe ', CarSchema, "cars")
module.exports = CarModel