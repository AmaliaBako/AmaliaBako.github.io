document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.14.1";

document.getElementById("id_button").addEventListener("click", solve_eq2);

function read_coefficients()
{
	//citire
	var a = document.getElementById("id_a").value;
	var b = document.getElementById("id_b").value;
	var c = document.getElementById("id_c").value;	
	
	var coef = {};
	coef.a = a;
	coef.b = b;
	coef.c = c;
	
	return coef;
}

function compute_solution(coef)
{
	//calcul
	var delta = coef.b * coef.b - 4 * coef.a * coef.c;
	var x1_re, x1_img, x2_re, x2_img;
	if (delta >= 0) {
		 x1_re = (-coef.b - Math.sqrt(delta)) / (2 * coef.a);
		 x2_re = (-coef.b + Math.sqrt(delta)) / (2 * coef.a);
		 x1_img = 0;
		 x2_img = 0;
	}
	else {
		 x1_re = (-coef.b) / (2 * coef.a);
		 x2_re = (-coef.b) / (2 * coef.a);
		 x1_img = - Math.sqrt(-delta) / (2 * coef.a);
		 x2_img = + Math.sqrt(-delta) / (2 * coef.a);
	}
	
	var solutions = {};
	solutions.x1_re = x1_re;
	solutions.x1_img = x1_img;
	solutions.x2_re = x2_re;
	solutions.x2_img = x2_img;
	return solutions;
}

function print_solution(solutions)
{
	//afisare
	document.getElementById("id_x1").innerHTML = "x1 = "+ solutions.x1_re + "+" + solutions.x1_img + "i";
	document.getElementById("id_x2").innerHTML = "x2 = "+ solutions.x2_re + "+" + solutions.x2_img + "i";
}

function solve_eq2()
{
	var coef = read_coefficients();
	var solutions = compute_solution(coef);
	print_solution(solutions);
}