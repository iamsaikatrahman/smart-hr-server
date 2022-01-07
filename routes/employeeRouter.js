const employeeController = require("../controllers/employeeController");
const router = require("express").Router();

router.post("/addSingleEmployee", employeeController.addSingleEmployee);
router.post("/addManyEmployee", employeeController.addManyEmployee);
router.get("/allEmployees", employeeController.getAllEmployees);
router.get("/:id", employeeController.getOneEmployee);
router.get("/:id", employeeController.updateEmployee);
router.get("/:id", employeeController.deleteEmployee);

module.exports = router;
