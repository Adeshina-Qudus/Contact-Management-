class RegisterRequest {
    constructor( firstName,lastName, email ,password) {
        this.fistName = firstName
        this.lastName = lastName;
        this.email = email;
        this.password = password
    }
}

module.exports = RegisterRequest