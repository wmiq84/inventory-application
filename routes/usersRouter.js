// routes/usersRouter.js
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getBooks);
usersRouter.get("/new", usersController.createBookGet);
usersRouter.post("/new", usersController.addABook);
usersRouter.get("/delete", usersController.createBookDelete);
usersRouter.post("/delete", usersController.deleteABook);
// usersRouter.post("/new", usersController.createUsernamePost);
// usersRouter.get("/delete", usersController.deleteUsernames);
// usersRouter.get("/search", usersController.searchUsernames);

module.exports = usersRouter;
