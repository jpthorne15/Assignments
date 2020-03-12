const backend = (number) => {
    const numberTestPromise = new Promise ((resolve,reject) => {
        if (number %2 === 0){ 
            resolve ('This number is even')    
        } elseif (number %2===1)
        {reject ('The number is odd')


        }
        

    })
    return numberTestPromise
  
}

const builtinFuncs = (builtInFuncsPromise) => {
        const builtInFuncsPromise = backend(1)
        builtInFuncsPromise.then((successObject)=> {
            console.log(successObject)
        }) .catch ((failureObject)) =>
    }
}

const asyncAwait = async() => {try {
    const asyncAwaitPromise =backend(1)
    } catch(failureObject) {
    
    }   
}
  

