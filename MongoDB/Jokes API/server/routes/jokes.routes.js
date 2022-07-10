const JokeController = require("../controllers/jokes.controllers");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.exportAllJokes);
  app.post("/api/jokes", JokeController.addNewJoke);
  app.get("/api/jokes/:_id", JokeController.exportJokeById);
  app.put("/api/jokes/:_id", JokeController.updateJoke);
  app.delete("/api/jokes/:_id", JokeController.deleteJoke);
};