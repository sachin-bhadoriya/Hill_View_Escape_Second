const express = require("express");
const router = express.Router();
const Subscribe = require("../models/SubscribeModal");

// POST / subscribe
router.post("/subscribe", async (req, res) => {
  try {
    const subscribe = new Subscribe(req.body);
    await subscribe.save();
    res.json({ success: true, data: subscribe });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/subscribe", async (req, res) => {
    try {
        const subscribe = await Subscribe.find();
        res.status(200).json(subscribe);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



module.exports = router;
