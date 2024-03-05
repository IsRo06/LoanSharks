const {model, Schema} =  require('mongoose');

const carSchema = new Schema({
    carId: Number,
    carMake: String,
    carModel: String,
    carColor: String,
    carYear: Number,
    carNumberoOfSeats: Number,
    carMileage: Number,
    carCostPerDay: Number,
    carStatus: String
});


module.exports = model('Car', carSchema);