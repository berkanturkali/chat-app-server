const express = require('express');
const router = express.Router();
const chatController = require('./../controllers/chatController');
const authController = require('./../controllers/authController');


router.post("/room/new",authController.protect,chatController.addRoom);

router.get("/room/all",authController.protect,chatController.rooms);

router.get("/room/:room",authController.protect,chatController.history);

module.exports = router;