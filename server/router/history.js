const express = require("express");

const {
  addHistory,
  getHistory,
  postHistory,
  removeHistory,
} = require("../controller/history");
const { verifyToken } = require("../middleware/VerifyToken");

const router = express.Router();

router.post("/", verifyToken, addHistory);
router.post("/postHistory", verifyToken, postHistory);
router.get("/", verifyToken, getHistory);
router.delete("/:id", verifyToken, removeHistory);

module.exports = router;
