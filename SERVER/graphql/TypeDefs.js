const {gql} = require('apollo-server');

module.exports=gql`
    type Car{
        id: ID!
        carEmail: String!
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
        carIMGstring: String!
    }
    type Query{
        getCars: [Car]
        getCar(car_id: ID!): Car!
        getUsers: [User]
        getEmployees: [User]
        getUser(user_id: ID!): User!
        getUserEmail(user_email: String!): User!
    }
    type Mutation{
        createCar(
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
        IMGstring: String!
        ): Car!
        deleteCar(car_id: ID!): [Car]!
        UpdateCarInfo(carInput: updateCarInput!): Car
        UpdateCarRegistration(registrationInput: updateCarRegistrationInput! ): Car
        register(registerInput: RegisterInput): User
        registerByAdmin(registerAdminInput: RegisterAdminInput): User,
        login(username: String, password: String): User
        UpdateInfo(input: UpdateInput!): User
        UpdateLocation(input: updateInputLocation!): User

    }
    input updateCarRegistrationInput{
        car_id: ID!
        email: String!
        reservations:[Int]!
    }
    input updateCarInput{
        id: ID!
        maxmilesperday: Int!
        milecostaftermax: Int!
        costperday: Float!
        status: String!
    }
    input updateInputLocation{
        email: String!
        location: String!
    }
    input RegisterAdminInput{
        firstName: String!
        lastName: String!
        password: String!
        confirmPassword: String!
        email: String!
        type: String!
        location: String!
    }
    input RegisterInput{
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        confirmPassword: String!
        
    }

    input UpdateInput{
        oldemail: String! 
        firstName: String! 
        lastName: String!
        email: String!
        password: String! 
        location:String
    }
    type User{
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        createdAt: String!
        type: String!
        location: String
        token: String!

    }
    
`;