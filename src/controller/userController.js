const working = (req, res) => {
    console.log("Connected");
    res.send('Working endpoint hit!');
};

module.exports = {
    working,
};