const {model, Schema} =  require('mongoose');

const carSchema = new Schema({
    carMake: String,
    carModel: String,
    carColor: String,
    carMileage: Number,
    carYear: Number,
    carType: String,
    carMaxMilesPerDay: Number,
    carMileCostAfterMax: Number,
    carCostPerDay: Number,
    carLocation: String,
    carStatus: String,
    carReservations: [Number],
    carIMGstring: String,
    carKey: String
});


module.exports = model('Car', carSchema);