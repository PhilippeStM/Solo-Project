const MenuItem = require(".././models/menuItem.model");      //THE FILE PATH HERE COULD BE CAUSING SERVER ISSUES DOWN THE ROAD-CHECK IF YOUR HAVING TROUBLE GETTING REQUESTS TO GO THRU

module.exports = {
    getAll: (req, res) => {
        MenuItem.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getOne: (req, res) => {
        MenuItem.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        MenuItem.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        MenuItem.findByIdAndDelete(req.params.id)
            .then(message => res.json(message))
            .catch(err => res.json(err));
    },
};