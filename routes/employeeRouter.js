const employeeController = require("../controllers/employeeController");
const router = require("express").Router();

router.post("/addSingleEmployee", employeeController.addSingleEmployee);
router.post("/addManyEmployee", employeeController.addManyEmployee);
router.get("/allEmployees", employeeController.getAllEmployees);

module.exports = router;
