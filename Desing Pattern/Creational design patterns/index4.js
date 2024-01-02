var TaskRepository = require('./src/TaskRepository');
var Task = require('./src/Task');


var task1 = new Task("learn javascript design pattersns");
var task2 = new Task("pay bills");

var taskRepository = new TaskRepository();
taskRepository.instance();
//taskRepository.instance();


taskRepository.add(task1);
console.log(taskRepository.getAll());
taskRepository.add(task2);
console.log(taskRepository.getAll());
taskRepository.remove(task2);
console.log(taskRepository.getAll());