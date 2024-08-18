const  User = require('../model/user')
const NotFoundException = require("../exception/notFoundException");


const register = async(request) =>{
    const {firstName,lastName,email,password} = request

    const user = await  User.findOne({email});
    if (user){
        throw new NotFoundException('email already in use')
    }

    const newUser = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    }

    const savedUser = await User.create(newUser)

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


module.exports = { register }