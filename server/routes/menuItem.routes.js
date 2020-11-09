const menu = require(".././controllers/menuItem.controller");

module.exports = (app) => {
    app.get("/api/menu", menu.getAll);
    app.get("/api/menu/:id/", menu.getOne);
    app.post("/api/menu", menu.create);
    app.put("/api/menu/:id", menu.update);
    app.delete("/api/menu/:id", menu.delete);
};