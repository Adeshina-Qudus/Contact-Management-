const  User = require('../model/user')
const NotFoundException = require("../exception/notFoundException");


const createUser = async(request) =>{
    const {firstName,lastName,email,password} = request
    console.log("request don enter ")

    const user = await  User.findOne({email});
    if (user){
        throw new NotFoundException('email already in use')
    }
    console.log("2")

    const newUser = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    }
    console.log("3")

    const savedUser = await User.create(newUser)
    console.log("4")

    const response = {
        firstName : savedUser.firstName,
        lastName : savedUser.lastName,
        email : savedUser.email,
        password : savedUser.password
    }

    return {
        data : response,
        message : "Registration Successful"
    }
}


module.exports = { register: createUser }