const User = require(".././models/user.model");      //THE FILE PATH HERE COULD BE CAUSING SERVER ISSUES DOWN THE ROAD-CHECK IF YOUR HAVING TROUBLE GETTING REQUESTS TO GO THRU

module.exports = {
    getAll: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getOne: (req, res) => {
        User.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(message => res.json(message))
            .catch(err => res.json(err));
    },
};

//possibly findByEmail
//models.users.findOne({email: mail}, function (err, myUser) {