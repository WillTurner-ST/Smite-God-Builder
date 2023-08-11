const God = require("../models/god.model");

//Creating a new god
module.exports.createGod = (req, res) => {
  God.create(req.body)
    .then((newGod) => {
      res.json({ newGod });
      console.log(res.body);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all activities
module.exports.getAllGod = (req, res) => {
  God.find()
    .then((allGods) => {
      res.json(allGods);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one god
module.exports.getOneGod = (req, res) => {
  God.findOne({ _id: req.params.id })
    .then((queriedGod) => {
      res.json(queriedGod);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an god
module.exports.updateGod = (req, res) => {
  God.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedGod) => {
      res.json({ updatedGod });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an god
module.exports.deleteGod = (req, res) => {
  God.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}