const User = require('../../Models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../../config')
const { UserInputError } = require('apollo-server')
const {validateRegisterInput, validateLoginInput} = require('../../util/validators')

function generateToken(user){
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username

    }, SECRET_KEY, {expiresIn: '1h'});
}

module.exports = {
    Query:{
        async getUsers(){
            try{
                const users = await User.find();
                return users;
            }catch(err){
                console.log("Cannot return users error: ",{err})
            }
        },
        async getEmployees(){
            try{
                const employees = await User.find({ type: "Employee" });
                return employees;
            }catch(err){
                console.log("Cannot return employees")
            }
            
        },
        async getUser(_, {user_id}){
            try{
                const user = await User.findById(user_id);
                if(user){
                    return user;
                }else{
                    console.log("Cannot return user:", user_id)
                }
            }catch(err){
                console.log("Cannot return user:", user_id)
            }
        },
        async getUserEmail(_, {user_email}){
            try{
                const user = await User.findOne({email: user_email,});
                if(user){
                    return user;
                }else{
                    console.log("Cannot return user:", user_email);
                }
            }catch(err){
                console.log("Cannot return user:", user_email);
            }
        },
        
    },
    Mutation: {
        async login(_, {username, password}){
            
            const {errors, valid} = validateLoginInput(username, password);
            
            if(!valid){
                throw new UserInputError('Errors', {errors});               
            }

            const user = await User.findOne({username});
            
            if(!user){
                errors.general = 'User not found';
                throw new UserInputError('User not found', {errors});               
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                errors.general = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', {errors});
            }
            
            const token = generateToken(user);
            //console.log("dieidiied");
            return{
                ...user._doc,
                id:user._id,
                token
            };
        },
        async register(_,
            {
                registerInput: {firstName, lastName, email, password, confirmPassword}
            }
            
        ){

            const {valid, errors} = validateRegisterInput(firstName, lastName, email, password, confirmPassword);
            if(!valid){
                throw new UserInputError('Errors', {errors});
            }

            
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                createdAt: new Date().toISOString(),
                type: "Client",
                location: "Gainesvile"
            });

            const res = await newUser.save();

            //const token = generateToken(res);

        return{
            ...res._doc,
            id:res._id,
            //token
        };
        },
        async registerByAdmin(_,
            {
                registerAdminInput: {firstName, lastName, email, password, confirmPassword, type, location}
            }
            
        ){

            const {valid, errors} = validateRegisterInput(firstName, lastName, email, password, confirmPassword);
            if(!valid){
                throw new UserInputError('Errors', {errors});
            }
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                createdAt: new Date().toISOString(),
                type,
                location,
            });

            const res = await newUser.save();

            //const token = generateToken(res);

        return{
            ...res._doc,
            id:res._id,
            //token
        };
        },    
    
        async UpdateInfo(_,  {input: {oldemail,
            firstName, 
            lastName,
            email,
            password, 
            location}}
        ){
            try{
                const user = await User.findOne({email: oldemail,});
                if(user){
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.email = email;
                    user.password = password;
                    user.location = location;
                    user.save();
                    return user;
                }else{
                    console.log("Cannot update user:", oldemail);
                }

            }catch(err){
                console.log("Cannot update user", oldemail ,err)
            }

        },
        async UpdateLocation(_,{input: {email, location}}){
            try{
                const user = await User.findOne({email: email,});
                if(user){
                    user.location = location;
                    user.save();
                    return user;
                }else{
                    console.log("Cannot run mutation")
                }
            }catch(err){
               console.log(err)
            }
        }   
    }
}