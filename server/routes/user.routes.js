const user = require(".././controllers/user.controller.js");

module.exports = (app) => {
    app.get("/api/users", user.getAll);
    app.get("/api/users/:id/", user.getOne);
    app.post("/api/users", user.create);
    app.put("/api/users/:id", user.update);
    app.delete("/api/users/:id", user.delete);
};