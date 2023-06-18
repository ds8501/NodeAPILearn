const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.delete("/:id", userController.deleteUser); //anything after / is id 

module.exports = router;