// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);


// route to build inventory
router.get("/detail/:invId", invController.buildByInvId);

module.exports = router;