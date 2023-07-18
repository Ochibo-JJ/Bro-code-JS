// JavaScript source code
	let base;
	let height;
	let hypotenuse;

	document.getElementById("submitButton").onclick = function(){
		base = document.getElementById("aTextBox").value;
		base = Number(base);

		height = document.getElementById("bTextBox").value;
		height = Number(height);

		hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2))
		document.getElementById("cLabel").innerHTML = "Hypotenuse is: " + hypotenuse;
	}