const God = require("../controllers/god.controller");

module.exports = (app) => {
    //create
  app.post("/api/god", God.createGod);
    //read
  app.get("/api/god", God.getAllGod);
  app.get("/api/god/:id", God.getOneGod);
    //update
  app.put("/api/god/edit/:id", God.updateGod);
    //delete
  app.delete("/api/god/:id", God.deleteGod);
};