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
  console.log("Hit", req.body);

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
  const employees = await Employee.findAll({});
  res.status(200).send(employees);
};

module.exports = {
  addSingleEmployee,
  addManyEmployee,
  getAllEmployees,
};
