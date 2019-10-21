class t_eq2_model {
	a;
	b;
	c;
	x1_re;
	x1_img;
	x2_re;
	x2_img;
	constructor() 
	{
		this.a=1;
		this.b=1;
		this.c=1;
		this.x1_re=0;
		this.x1_img=0;
		this.x2_re=0;
		this.x2_img=0;
	}
	
	set_coefficients(a, b, c)
	{
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	solvce()
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
	
	get_solutions()
	{
		var solutions = {};
		solutions.x1_re = x1_re;
		solutions.x1_img = x1_img;
		solutions.x2_re = x2_re;
		solutions.x2_img = x2_img;
		return solutions;
	}
}