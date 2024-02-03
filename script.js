function toFahrenheit(celsius) {
	let result = (celsius*9/5)+32;
	return result.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
