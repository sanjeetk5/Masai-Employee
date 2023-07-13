const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: String, required: true },
    empID: {type: String, required: true }
  },
  {
    versionKey: false,
  }
);

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = {
  EmployeeModel,
};
