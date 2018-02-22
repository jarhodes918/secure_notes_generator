// Create renderGet function
exports.renderGet = function(req,res){

	// Check to see if lastVisit has been set
	if (req.session.lastVisit){

		// Log lastVisit to the console
		console.log('Last visited: ' + req.session.lastVisit);
	}
	
	// Set lastVisit
	req.session.lastVisit = new Date();
	
	// Render the index view and set title parameter
	res.render('index',{
		title: 'Temperature Converter',
		calcAnswer: "Please enter a temperature value",
		calcFormula: "[" + "\xB0" + "F] = [" + "\xB0" + "C] x 9/5 + 32",
		lastTemp: "",
		Cfrom: "",
		Ffrom: "checked",
		Kfrom: "",
		Rfrom: "",
		Cto: "checked",
		Fto: "",
		Kto: "",
		Rto: ""		
	})
};

// Create renderPost function
exports.renderPost = function(req,res){

	// Declare variables
	var convertVal, convertAnswer, convertFormula;
	var fromType, toType, tempVal;
	var fromC = "", fromF = "", fromK = "", fromR = "";
	var toC = "", toF = "", toK = "", toR = "";
	
	// Get user inputs
	fromType = req.body.fromType;
	toType = req.body.toType;
	tempVal = parseFloat(req.body.tempVal);
	
	// Determine from and to temperature types and calculated the conversion
	switch(fromType) {
		case "Celsius":
			switch(toType) {
				case "Celsius":
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "C = " + tempVal.toFixed(1) + " \xB0" + "C";
					convertFormula = "[" + "\xB0" + "C] = [" + "\xB0" + "C]";
					fromC = "checked";
					toC = "checked";
					break;
				case "Fahrenheit":
					convertVal = (tempVal.toFixed(1) * 9/5) + 32;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "C = " + convertVal.toFixed(1) + " \xB0" + "F";
					convertFormula = "[" + "\xB0" + "F] = [" + "\xB0" + "C] x 9/5 + 32";
					fromC = "checked";
					toF = "checked";
					break;
				case "Kelvin":
					convertVal = tempVal.toFixed(1) * 1 + 273.15;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "C = " + convertVal.toFixed(1) + " \xB0" + "K";
					convertFormula = "[" + "\xB0" + "K] = [" + "\xB0" + "C] + 273.15";
					fromC = "checked";
					toK = "checked";
					break;
				default:
					convertVal = (tempVal.toFixed(1) * 9/5) + 491.69;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "C = " + convertVal.toFixed(1) + " \xB0" + "R";
					convertFormula = "[" + "\xB0" + "R] = [" + "\xB0" + "C] x 9/5 + 491.69";
					fromC = "checked";
					toR = "checked";
			}
			break;
		case "Fahrenheit":
			switch(toType) {
				case "Celsius":
					convertVal = (tempVal.toFixed(1) - 32) * 5/9;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "F = " + convertVal.toFixed(1) + " \xB0" + "C";
					convertFormula = "[" + "\xB0" + "C] = ([" + "\xB0" + "F] - 32) x 5/9";
					fromF = "checked";
					toC = "checked";
					break;
				case "Fahrenheit":
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "F = " + tempVal.toFixed(1) + " \xB0" + "F";
					convertFormula = "[" + "\xB0" + "F] = [" + "\xB0" + "F]";
					fromF = "checked";
					toF = "checked";
					break;
				case "Kelvin":
					convertVal = ((tempVal.toFixed(1) - 32) * 5/9) + 273.15;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "F = " + convertVal.toFixed(1) + " \xB0" + "K";
					convertFormula = "[" + "\xB0" + "K] = ([" + "\xB0" + "F] - 32) x 5/9 + 273.15";
					fromF = "checked";
					toK = "checked";
					break;
				default:
					convertVal = tempVal.toFixed(1) * 1 + 459.69;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "F = " + convertVal.toFixed(1) + " \xB0" + "R";
					convertFormula = "[" + "\xB0" + "R] = [" + "\xB0" + "F] + 459.69";
					fromF = "checked";
					toR = "checked";
			}
			break;
		case "Kelvin":
			switch(toType) {
				case "Celsius":
					convertVal = tempVal.toFixed(1) - 273.15;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "K = " + convertVal.toFixed(1) + " \xB0" + "C";
					convertFormula = "[" + "\xB0" + "C] = [" + "\xB0" + "K] - 273.15";
					fromK = "checked";
					toC = "checked";
					break;
				case "Fahrenheit":
					convertVal = ((tempVal.toFixed(1) - 273.15) * 9/5) + 32;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "K = " + convertVal.toFixed(1) + " \xB0" + "F";
					convertFormula = "[" + "\xB0" + "F] = ([" + "\xB0" + "K] - 273.15) x 9/5 + 32";
					fromK = "checked";
					toF = "checked";
					break;
				case "Kelvin":
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "K = " + tempVal.toFixed(1) + " \xB0" + "K";
					convertFormula = "[" + "\xB0" + "K] = [" + "\xB0" + "K]";
					fromK = "checked";
					toK = "checked";
					break;
				default:
					convertVal = ((tempVal.toFixed(1) - 273.15) * 9/5) + 491.69;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "K = " + convertVal.toFixed(1) + " \xB0" + "R";
					convertFormula = "[" + "\xB0" + "R] = ([" + "\xB0" + "K] - 273.15) x 9/5 + 491.69";
					fromK = "checked";
					toR = "checked";
			}
			break;
		default:
			switch(toType) {
				case "Celsius":
					convertVal = (tempVal.toFixed(1) - 491.69) * 5/9;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "R = " + convertVal.toFixed(1) + " \xB0" + "C";
					convertFormula = "[" + "\xB0" + "C] = ([" + "\xB0" + "R] - 491.69) x 5/9";
					fromR = "checked";
					toC = "checked";
					break;
				case "Fahrenheit":
					convertVal = tempVal.toFixed(1) - 459.69;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "R = " + convertVal.toFixed(1) + " \xB0" + "F";
					convertFormula = "[" + "\xB0" + "F] = [" + "\xB0" + "R] - 459.69";
					fromR = "checked";
					toF = "checked";
					break;
				case "Kelvin":
					convertVal = ((tempVal.toFixed(1) - 491.69) * 5/9) + 273.15;
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "R = " + convertVal.toFixed(1) + " \xB0" + "K";
					convertFormula = "[" + "\xB0" + "K] = ([" + "\xB0" + "R] - 491.69) x 5/9 + 273.15";
					fromR = "checked";
					toK = "checked";
					break;
				default:
					convertAnswer = tempVal.toFixed(1) + " \xB0" + "R = " + tempVal.toFixed(1) + " \xB0" + "R";
					convertFormula = "[" + "\xB0" + "R] = [" + "\xB0" + "R]";
					fromR = "checked";
					toR = "checked";
			}
	}

	if (isNaN(tempVal)){
		convertAnswer = "Please enter a VALID number";
		tempVal = "";
	}
	
	// Render the index view and set form parameters
	res.render('index',{
		title: 'Temperature Converter',
		calcAnswer: convertAnswer,
		calcFormula: convertFormula,
		lastTemp: tempVal,
		Cfrom: fromC,
		Ffrom: fromF,
		Kfrom: fromK,
		Rfrom: fromR,
		Cto: toC,
		Fto: toF,
		Kto: toK,
		Rto: toR
	})
};
