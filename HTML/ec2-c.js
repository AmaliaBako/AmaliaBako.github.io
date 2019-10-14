document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.14.1";

document.getElementById("id_button").addEventListener("click", solve_eq2);

class t_eq2
{
	a;
	b;
	c;
	x1_re;
	x1_img;
	x2_re;
	x2_img;
	
	constructor()
	{
		this.a = 1;
		this.b = 1;
		this.c = 1;
	}
	
	read_coefficients()
	{
		//citire
		this.a = document.getElementById("id_a").value;
		this. b = document.getElementById("id_b").value;
		this.c = document.getElementById("id_c").value;	
	}

	compute_solution()
	{
		//calcul
		var delta = this.b * this.b - 4 * this.a * this.c;
		
		if (delta >= 0) {
			 this.x1_re = (-this.b - Math.sqrt(delta)) / (2 * this.a);
			 this.x2_re = (-this.b + Math.sqrt(delta)) / (2 * this.a);
			 this.x1_img = 0;
			 this.x2_img = 0;
		}
		else {
			 this.x1_re = (-this.b) / (2 * this.a);
			 this.x2_re = (-this.b) / (2 * this.a);
			 this.x1_img = - Math.sqrt(-delta) / (2 * this.a);
			 this.x2_img = + Math.sqrt(-delta) / (2 * this.a);
		}
	}

	print_solution()
	{
		//afisare
		document.getElementById("id_x1").innerHTML = "x1 = "+ this.x1_re + "+" + this.x1_img + "i";
		document.getElementById("id_x2").innerHTML = "x2 = "+ this.x2_re + "+" + this.x2_img + "i";
	}
}

function solve_eq2()
{
	var ec2 = new t_eq2();
	
	ec2.read_coefficients();
	ec2.compute_solution();
	ec2.print_solution();
}