class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        this.completed = !this.completed;
    }
    toString() {
        if (!this.completed) {
            return console.log("To do: " + this.name)
        }
        console.log("Completed: "+ this.name);
    }
}

module.exports = Task;