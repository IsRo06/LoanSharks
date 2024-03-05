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
                        carYear: car.carYear,
                        carNumberoOfSeats: car.carNumberoOfSeats,
                        carMileage: car.carMileage,
                        carCostPerDay: car.carCostPerDay,
                        carStatus: car.carStatus
                    }
                    return newcar;
                }
            }catch(err){
                console.log("Cannot return car:", {car_id})
            }
            
        }
    },
    Mutation: {
        async createCar(_, {id, make, model, color, year, number_of_seats, mielage, cost_per_day, status}){
            const newCar =  new Car({
                carId: id,
                carMake: make,
                carModel: model,
                carColor: color,
                carYear: year,
                carNumberoOfSeats: number_of_seats,
                carMileage: mielage,
                carCostPerDay: cost_per_day,
                carStatus: status

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