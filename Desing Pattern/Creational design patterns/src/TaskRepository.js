var TaskRepository = function() {
    var items = [];
    var instance;

    var add = function(task) {
        items[task.name] = task;
    }

    var remove = function(task) {
        items[task.name] = null;
    }

    var getAll = function() {
        console.log(items);
        return items;
    }

    var getInstance = function() {
        if (!instance) {
            console.log("instance created");
            instance = this;
        }
        console.log("instance returned");
        return instance;
    }

    return{
        add: add,
        remove: remove,
        getAll: getAll,
        instance: getInstance
    }
}

module.exports = TaskRepository;