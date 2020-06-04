var suma = 0

process.argv.forEach((val, index) => {
	if ((index > 2) && (val % 2 == 0)){
		suma += parseInt(val)
	}

})

console.log("Resultado: " + suma);
