const router = require("express").Router();

router.get("/", (request, response) => {
    response.render("index", {
        message: "burgers",
    });
});

module.exports = router;
