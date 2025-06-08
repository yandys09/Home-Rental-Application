import express from "express";
import multer from "multer";
import { login, register } from "../controller/auth.controller.js";


const router = express.Router();

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//todo: 멀티 이미지 파일  등록
//router.post("/register", upload.array("profileImage", 2), register);

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);



export default router;
