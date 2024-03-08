const {gql} = require('apollo-server');

module.exports=gql`
    type Car{
        carId: Int!
        carMake: String!
        carModel: String!
        carColor: String!
        carMileage: Int!
        carYear: Int!
        carType: String!
        carMaxMilesPerDay: Int!
        carMileCostAfterMax: Int!
        carCostPerDay: Float!
        carLocation: String!
        carStatus: String!
        carReservations: [Int]!
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
        mileage: Int!
        year: Int!
        type: String!
        maxmilesperday: Int!
        milecostaftermax: Int!
        costperday: Float!
        location: String!
        status: String!
        reservations: [Int]!
        ): Car!
        deleteCar(id: String!): [Car]!
    }
`;