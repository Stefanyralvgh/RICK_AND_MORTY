const { Router } = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/favorites");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
