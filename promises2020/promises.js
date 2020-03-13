const backend = (number) => {
	const numberTestPromise = new Promise((resolve, reject) => {
		if (number % 2 === 0) {
			resolve('This number is even')
		}
		else if(number % 2 === 1)
		{
			reject('The number is odd')
		}
	});
	return numberTestPromise;
};

const builtinFuncs = () => {
	const builtInFuncsPromise = backend(1);
	builtInFuncsPromise
		.then((successObject) => {
			console.log(successObject)
		})
        .catch((failureObject) => {console.log(failureObject)
        })
}
//builtinFuncs()

const asyncAwait = async () => {
	try {
        const successObject = await backend(2);
        console.log(successObject)
	} catch (failureObject) {
        console.log(failureObject)
    }
}
asyncAwait()