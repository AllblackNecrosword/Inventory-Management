import express from "express";
import {
  getLoginStatus,
  loginHandler,
  logoutHandler,
  registerHandler,
  updateUserHandler,
} from "../Controllers/userController.js";
import Protect from "../Middlewares/authMiddleware.js";
import upload from "../Middlewares/multer.js";

const router = express.Router();

router.post("/login", loginHandler);
router.post("/register", registerHandler);
router.post("/logout", logoutHandler);
router.put("/update", Protect, upload.single("image"), updateUserHandler);
router.get("/loginstatus", getLoginStatus);

export default router;
