const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    // Retorna true porque apuntan al mismo espacio en memoria
    console.log('Misma instancia? ', (instance1 === instance2));
    // El problema es que no tenemos una forma controlada
    // de indicar de dónde vienen los cambios
}

main();