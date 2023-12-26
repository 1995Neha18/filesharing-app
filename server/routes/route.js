import express from "express";
import { uploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
// const express = require("express");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);

export default router;
