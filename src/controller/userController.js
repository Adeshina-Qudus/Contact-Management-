const userService = require('../service/userService')

const working = (req, res) => {
    console.log("Connected");
    res.send('Working endpoint hit!');
};

const register = async (req,res) =>{
    try{
        const response = await userService.register(req.body)
        req.status(200).json({response})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = {
    working,
    register
};