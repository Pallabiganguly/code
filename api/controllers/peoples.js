const createPeople = require('../../services/peoples');
function create(req, res, next) {
    const {name, age} = req.body;
    createPeople(name, age);
    res.status(200).json({error: false})
}

module.exports = create;