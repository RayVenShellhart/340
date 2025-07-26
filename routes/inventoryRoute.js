// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
const invValidate = require("../utilities/inventory-validation")


router.get("/", utilities.handleErrors(invController.buildManagment))
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);


// route to build inventory
router.get("/detail/:invId", invController.buildByInvId);

// add class
router.get("/management", utilities.handleErrors(invController.buildManagementView))
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification))
router.post(
    "/add-classification",
    invValidate.classificationRules(),
    invValidate.checkClassificationData,
    utilities.handleErrors(invController.addClassification)    
)



// add inventory
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory))
router.post("/add-inventory", invValidate.inventoryRules(), invValidate.checkInventoryData, utilities.handleErrors(invController.addInventory))

module.exports = router;