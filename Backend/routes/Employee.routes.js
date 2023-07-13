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
        res.status(200).send(employee)
    } catch (err) {
        res.status(400).send({err:err.message})
    }
})

employeeRouter.delete("/delete/:empID" , async(req,res)=>{
    const {empID} = req.params;
    const employee = await EmployeeModel.findOne({_id : postID })
    try {
        if(req.body.empID == employee.empID){
            await EmployeeModel.findByIdAndDelete({_id : empID} , req.body)
            res.status(200).send({"msg" : `The note with id: ${empID} is deleted`})
        }else{
            res.status(400).send({"err" : "you are not authorized to delete"})
        }
    } catch (err) {
        res.status(400).send({err:err.message})
    }

})

module.exports = {
    employeeRouter,
  };