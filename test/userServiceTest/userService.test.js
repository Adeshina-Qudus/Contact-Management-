const {createUser }= require('../../src/service/userService')
const RegisterRequest = require("../../src/dtos/request/registerRequest");


test('registerTest', () => {
    const  request = new  RegisterRequest(
        "qudus",
        "adeshina",
        "qudusa55@gmail.com",
        "IniestaJnr1")
    expect(createUser(request)).not.toBeNull();
})


