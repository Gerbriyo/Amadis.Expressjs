const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {              // /users/new
    res.send("There are no values");
});

router.post("/", (req, res) => {
    res.send("The form of the user");
});

router.route("/:id")
    .get((req, res) => {
        if (req.user) {
            res.send(`The Id of the user is ${req.params.id}`);
        } else {
            res.status(404).send("User not found");
        }
    })
    .put((req, res) => {
        if (req.user) {
            res.send(`Update the Id of the user is ${req.params.id}`);
        } else {
            res.status(404).send("User not found");
        }
    })
    .delete((req, res) => {
        if (req.user) {
            res.send(`Delete the Id of the user is ${req.params.id}`);
        } else {
            res.status(404).send("User not found");
        }
    });

// Sample user data
const users = [{ name: "Gerald" }, { name: "Briyolan" }, { name: "Ram" }];

// Middleware to handle user IDs
router.param("id", (req, res, next, id) => {
    const user = users[id];
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(404).send("User not found");
    }
});

module.exports = router;
