const db = require("../models");

const Employee = db.employees;

const addSingleEmployee = async (req, res) => {
  const info = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  try {
    const singleEmployee = await Employee.create(info);
    console.log(singleEmployee);
    res.status(200).send(singleEmployee);
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

// Create Many Employee
const addManyEmployee = async (req, res) => {
  try {
    const employee = await Employee.bulkCreate(req.body);
    console.log(employee);
    res.status(200).send(employee);
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

// Get All Employee

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({});
    res.status(200).send(employees);
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

// Get single employee
const getOneEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findOne({
      where: { id: id },
    });
    res.status(200).send(employee);
  } catch (error) {
    res.status(200).send({ message: error });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.update(req.body, { where: { id: id } });
  res.status(200).send(employee);
};

// 5. delete product
const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  await Employee.destroy({ where: { id: id } });
  res.status(200).send("Employee is deleted!");
};

module.exports = {
  addSingleEmployee,
  addManyEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
