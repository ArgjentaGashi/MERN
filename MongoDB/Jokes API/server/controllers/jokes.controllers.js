const Joke = require("../models/jokes.models");

const exportAllJokes = (request, response) => {
  Joke
    .find()
    .then((allJokes) => response.json(allJokes))
    .catch((err) => console.log(err));
};

const exportJokeById = (request, response) => {
  const { selectedID } = request;
  Joke
    .findOne({ _id: selectedID._id })   // its just gonna find one 
    .then((joke) => response.json(joke))
    .catch((err) => console.log(err));
};

const addNewJoke = (request, response) => {
  const { addingNewParams } = req;
  Joke
    .create(addingNewParams)
    .then((newJoke) => response.json(newJoke))
    .catch((err) => console.log(err));
};

const updateJoke = (request, response) => {
  Joke
  // updates a single joke matching this id
    .findOneAndUpdate({ _id: request.selectedID._id }, request.addingNewParams, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => response.json(updatedJoke))
    .catch((err) => console.log(err));
};

const deleteJoke = (request, response) => {
  Joke
  // deletes just one joke based on one id
    .deleteOne({ _id: request.selectedID._id })
    .then((result) => response.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  exportAllJokes,
  exportJokeById,
  addNewJoke,
  updateJoke,
  deleteJoke,
};