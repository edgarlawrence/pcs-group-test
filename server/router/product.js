const express = require("express");
const {
  upload,
  getAllData,
  createData,
  findDataBySearch,
  getDataById,
} = require("../controller/product");

const { verifyToken } = require("../middleware/VerifyToken");

const router = express.Router();

router.get("/", verifyToken, getAllData);
router.get("/:id", verifyToken, getDataById);
router.get("/product/search", verifyToken, findDataBySearch);
router.post("/", verifyToken, upload, createData);

module.exports = router;
