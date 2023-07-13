const { addUser, getUser, removeUser, editUser, getSingleUser } = require("../controllers/userControllers")
const router = require("express").Router()

router
.post("/add", addUser)
.get("/fetch", getUser)
.get("/:id",getSingleUser)
.delete("/remove/:userId", removeUser)
.put("/edit/:userId", editUser)

module.exports = router