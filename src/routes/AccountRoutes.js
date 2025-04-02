const express = require("express");
const controller = require("../controllers/AccountController");
const multipart = require("../middlewares/Multipart");
const authenticate = require("../middlewares/Authenticate");

const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/profile", authenticate, controller.getDetails);
router.post("/upload", authenticate, multipart.create("accounts").single("photo"), controller.upload);
router.put("/profile", authenticate, controller.updateDetails);
router.delete("/delete", authenticate, controller.delete);

module.exports = router;