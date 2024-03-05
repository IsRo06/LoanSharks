const {gql} = require('apollo-server');

module.exports=gql`
    type Car{
        carId: Int!
        carMake: String!
        carModel: String!
        carColor: String!
        carYear: Int!
        carNumberoOfSeats: Int!
        carMileage: Int!
        carCostPerDay: Int!
        carStatus: String!
    }
    type Query{
        getCars: [Car]
        getCar(car_id: String!): Car!
    }
    type Mutation{
        createCar(
        id: Int!
        make: String!
        model: String!
        color: String!
        year: Int!
        number_of_seats: Int!
        mielage: Int!
        cost_per_day: Int!
        status: String!): Car!
        deleteCar(id: String!): [Car]!
    }
`;