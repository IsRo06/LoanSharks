const Car = require("../../Models/Car");
// const fs = require('fs');

module.exports ={
    Query: {
        async getCars(){
            try{
                const cars = await Car.find();
                return cars;
            }catch(err){
                console.log("Cannot return cars error: ",{err})
            }
        },
        async getCar(_, {car_id}){
            try{
                const car = await Car.findById(car_id);
                if(car){
                    return car;
                }else{
                    console.log("Cannot return car:", car_id)
                }
            }catch(err){
                console.log("Cannot return car:", car_id)
            }
            
        }
    },
    Mutation: {
        async createCar(_, {make, model, color, year, mileage, type, maxmilesperday, milecostaftermax, costperday, location, status, reservations}){
            const newCar =  new Car({
                carMake: make,
                carModel: model,
                carColor: color,
                carYear: year,
                carMileage: mileage,
                carType: type,
                carMaxMilesPerDay: maxmilesperday,
                carMileCostAfterMax: milecostaftermax,
                carCostPerDay: costperday,
                carLocation: location,
                carStatus: status,
                carReservations: reservations

            });
            await newCar.save();
            const res = await Car.findById(newCar.id);
            return res;
        },
        async deleteCar(_, {car_id}){
            try{
                const car_to_delete = await Car.findOne({_id: car_id,});
                await car_to_delete.deleteOne({id: car_id});
                console.log("Deleted car: ",car_id);
                var cars = await Car.find();
                return cars;
            }catch(err){
                console.log("Cannot delete car: ",car_id);
                console.log(err);
            }

        }
    }
};