const express = require("express");

const { addToCart, getCart, removeFromCart } = require("../controller/cart");
const { verifyToken } = require("../middleware/VerifyToken");

const router = express.Router();

router.post("/", addToCart);
router.get("/", verifyToken, getCart);
router.delete("/:id", removeFromCart);

module.exports = router;
