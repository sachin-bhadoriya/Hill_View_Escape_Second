const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModal");

// POST / contact
router.post("/contact", async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ success: true, data: contact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/contact", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
