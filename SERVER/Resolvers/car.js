const Car = require("../Models/Car");

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
                const car = await Car.findOne({carId: car_id});
                if(car){
                    var newcar = {
                        carId: car.carId,
                        carMake: car.carMake,
                        carModel: car.carModel,
                        carColor: car.carColor,
                        carMileage: car.carMileage,
                        carYear: car.carYear,
                        carType: cat.carType,
                        carMaxMilesPerDay: car.carMaxMilesPerDay,
                        carMileCostAfterMax: car.carMileCostAfterMax,
                        carCostPerDay: car.carCostPerDay,
                        carLocation: car.carLocation,
                        carStatus: car.carStatus,
                        carReservations: car.carReservations
                    }
                    return newcar;
                }
            }catch(err){
                console.log("Cannot return car:", {car_id})
            }
            
        }
    },
    Mutation: {
        async createCar(_, {id, make, model, color, year, mileage, type, maxmilesperday, milecostaftermax, costperday, location, status, reservations}){
            const newCar =  new Car({
                carId: id,
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
            const res = await Car.findOne({carId: id});
            return res;
        },
        async deleteCar(_, {id}){
            try{
                Car.deleteOne({carId: id})
                console.log("Deleted car: ",{id});
                var cars = await Car.find();
                return cars;
            }catch(err){
                console.log("Cannot delete car: ",{id});
            }

        }
    }
};