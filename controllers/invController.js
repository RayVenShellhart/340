const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

invCont.buildByInvId = async function (req, res, next) {
  let nav = await utilities.getNav()
  const inv_id = req.params.invId
  const data = await invModel.getInventoryByInvId(inv_id)
  const grid = await utilities.buildInvGrid(data)
  const invMake = data[0].inv_make
  const invName = data[0].inv_model
  res.render("./inventory/detail", {
    title: invMake + " " + invName,
    nav,
    grid,
  })
}


module.exports = invCont