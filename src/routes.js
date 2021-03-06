const express = require("express");
const router = express.Router();
const isLogin = require("./middlewares/isLogin")
const authController = require("./controllers/Auth");
const mainController = require("./controllers/Main");
const upload = require("./middlewares/upload")

router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/registro", authController.showRegister);
router.post("/registro", authController.registerUser);
router.get("/home", isLogin, mainController.showHome, );
router.get("/publicar", isLogin, mainController.showCreatePublication);
router.post("/publicar", isLogin, upload.single("photo"), mainController.postPublication);

module.exports = router;
