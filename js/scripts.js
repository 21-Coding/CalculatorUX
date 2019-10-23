
var add = function(pickle, number2) {
	return pickle + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var whatOpp = function(o) {
	if (o === "+") {
		return add;
	} else if (o === "-") {
		return subtract;
	} else if (o === "x") {
		return multiply;
	} else if (o === "÷") {
		return divide;
	}
}

var activeNumber = 1;

var toggleActiveNumber = function() {
	if (activeNumber === 1) {
		activeNumber = 2;
	} else {
		activeNumber = 1;
	}
};

$(document).ready(function(){

	$(".clickable-number").click(function(event){
		var pressedButton = $(event.target).text();
		$(".active-num" + activeNumber).text(pressedButton);
		toggleActiveNumber();
	});

	$(".clickable-opp").click(function(event){
		var pressedButton = $(event.target).text();
		$(".active-opperator").text(pressedButton);
	});

	$(".clickable-equal").click(function(){
		var num1 = parseInt($(".active-num1").text());
		var num2 = parseInt($(".active-num2").text());
		var oppFunction = whatOpp($(".active-opperator").text())
		$(".answer").text(oppFunction(num1, num2))
	});

});
