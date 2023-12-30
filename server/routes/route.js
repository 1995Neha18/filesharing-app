import express from "express";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
// const express = require("express");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", getImage);

export default router;
