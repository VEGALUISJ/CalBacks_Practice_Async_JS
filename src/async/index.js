const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Se resolvio el Async'), 3000)
            : setTimeout(() => reject (new Error('No se Resolvio el Async')), 3000) 
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before');
doSomething();
console.log('After');


// como presentar los errores en el async await

const anotherFunction = async() =>{
    try {
        const something = await doSomethingAsync();
        console.log(something)
        // aqui va cuantas veces necesitamos llamar esa promesa
    } catch {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');