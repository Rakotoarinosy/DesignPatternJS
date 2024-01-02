// const Task = require('./Task');
// const Employee = require('./Employee');
const TaskController = require('./Task');
const EmployeeController = require('./Employee');

TaskController.execute("add", {name: "Learn JS Design Pattern"});
EmployeeController.execute("add", {first: "Sandra", last: "Smith"});