// las promesas traen que algo va a pasar.

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        // values true or false only
        if (true) {
            resolve('Se logro Resolver');
        } else {
            reject('No se Resolvio');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('Se Logro Resolver')
            },3000)
        } else {
            const error = new Error('No se Resolvio')// para lanzar mensaje de error y debuggear mejor.
            setTimeout(() => {
                reject(error)
            },3000)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


// metodo para crear promesas encadenadas y no caer en el callback hell.
// Promise.all

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })
