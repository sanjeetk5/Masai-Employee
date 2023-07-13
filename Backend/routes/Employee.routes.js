const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {EmployeeModel} = require('../model/Employee.model');
const UserModel = require('../model/User.model');
const employeeRouter=express.Router();




employeeRouter.post('/add',async(req,res)=>{
    try {
        const employee=new EmployeeModel(req.body);
        await employee.save();
        res.status(201).send({"success":"Employee has been added"});
    } catch (error) {
        res.status(501).send({"error":"failed to add the employee"});
    }
});

employeeRouter.get("/" , async(req,res)=>{
    try {
        const employee = await EmployeeModel.find({empID : req.body.empID})
        res.status(200).send(note)
    } catch (err) {
        res.status(400).send({err:err.message})
    }
})

module.exports = {
    employeeRouter,
  };