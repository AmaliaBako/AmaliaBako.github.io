document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.14.1";

document.getElementById("id_button").addEventListener("click", solve_eq2);

function read_coefficients()
{
	//citire
	var a = document.getElementById("id_a").value;
	var b = document.getElementById("id_b").value;
	var c = document.getElementById("id_c").value;	
	
	var coef = [];
	coef.push(a);
	coef.push(b);
	coef.push(c);
	
	return coef;
}

function compute_solution(coef)
{
	//calcul
	var delta = coef[1] * coef[1] - 4 * coef[0] * coef[2];
	var x1_re, x1_img, x2_re, x2_img;
	if (delta >= 0) {
		 x1_re = (-coef[1] - Math.sqrt(delta)) / (2 * coef[0]);
		 x2_re = (-coef[1] + Math.sqrt(delta)) / (2 * coef[0]);
		 x1_img = 0;
		 x2_img = 0;
	}
	else {
		 x1_re = (-coef[1]) / (2 * coef[0]);
		 x2_re = (-coef[1]) / (2 * coef[0]);
		 x1_img = - Math.sqrt(-delta) / (2 * coef[0]);
		 x2_img = + Math.sqrt(-delta) / (2 * coef[0]);
	}
	
	var solutions = [];
	solutions.push(x1_re);
	solutions.push(x1_img);
	solutions.push(x2_re);
	solutions.push(x2_img);
	return solutions;
}

function print_solution(solutions)
{
	//afisare
	document.getElementById("id_x1").innerHTML = "x1 = "+ solutions[0]+ "+" + solutions[1] + "i";
	document.getElementById("id_x2").innerHTML = "x2 = "+ solutions[2] + "+" + solutions[3] + "i";
}

function solve_eq2()
{
	var coef = read_coefficients();
	var solutions = compute_solution(coef);
	print_solution(solutions);
}