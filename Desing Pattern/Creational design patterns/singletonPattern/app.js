const singleton  = (function(){
    let instance;

    function createInstance() {
        const object = new Object({name: 'Brad'});
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();    


const instaceA = singleton.getInstance();
const instaceB = singleton.getInstance();
console.log(instaceA === instaceB);