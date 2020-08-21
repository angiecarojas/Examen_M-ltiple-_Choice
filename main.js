function check(){

	var pregunta1 = document.quiz.pregunta1.value;
	var pregunta2 = document.quiz.pregunta2.value;
	var pregunta3 = document.quiz.pregunta3.value;
	var pregunta4 = document.quiz.pregunta4.value;
	var correct = 0;


	if (pregunta1 == "Annie") {
		correct++;
}
	if (pregunta2 == "Cassiopeia") {
		correct++;
}	
	if (pregunta3 == "Sus habilidades no cuestan maná.") {
		correct++;
}
	if (pregunta4 == "Soraka") {
		correct++;
}
	
	var pictures = ["img/win.gif","img/casi.gif","img/meh.gif", "img/lose.gif"];
	var messages = ["Enhorabuena!", "Casi casi", "Okay, okay", "Baaaaad!, necesitas hacerlo mejor"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 3) {
		score = 2;
	}

	if (correct  == 3) {
		score = 1;
	}

	
	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Tuviste " + correct + " correcta.";
	document.getElementById("picture").src = pictures[score];
	}
	
