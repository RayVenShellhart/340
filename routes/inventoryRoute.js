// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
const invValidate = require("../utilities/inventory-validation")



// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

router.get("/all/", utilities.handleErrors(invController.buildGetAll))
// route to build inventory
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInvId));

// add class
router.get("/", utilities.handleErrors(invController.buildManagementView))
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

// inventory manager
router.get("/getInventory/:classification_id", utilities.handleErrors(invController.getInventoryJSON))
router.get("/edit/:inventoryId", utilities.handleErrors(invController.buildEditInventory))
router.post("/update/", invValidate.inventoryRules(), invValidate.checkInventoryData, utilities.handleErrors(invController.updateInventory))

module.exports = router;