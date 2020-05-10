

// PARAMETERS
var shipsParameters = {
							Fuel: '200',
							Throttle: 'Intact',
							Speed: '17,500 miles/h',
							currentSpeed: 100,
};

function accelerate(){
							shipsParameters.currentSpeed += 10;
							console.log(shipsParameters.currentSpeed);
							document.getElementById("speed").innerHTML = shipsParameters.currentSpeed;
							}


	document.getElementById("fuel").innerHTML = shipsParameters.Fuel;
	document.getElementById("throttle").innerHTML = shipsParameters.Throttle;
	document.getElementById("speed").innerHTML = shipsParameters.currentSpeed;



// ENVIRONMENT

 var shipsEnvironment = {
							Gravity: '300',
							Atmosphere: '',
							currentDistance: 0,

							distance: function(){ 	
							console.log ('km');
							this.currentDistance += 500;
						}
};


// Environment
	document.getElementById("gravity").innerHTML = shipsEnvironment.Gravity;
	document.getElementById("atmosphere").innerHTML = shipsEnvironment.Atmosphere;
	document.getElementById("distance-travelled").innerHTML = shipsEnvironment.currentDistance;


// console.log(shipsEnvironment.currentDistance);

// shipsEnvironment.distance();

// console.log(shipsEnvironment.currentDistance);



//SUPPLIES

var supplies = {
							Food: '70%',
							Water: '96%'
};

// Supplies
	document.getElementById("water").innerHTML = supplies.Food;
	document.getElementById("food").innerHTML = supplies.Water;


//METRICS

function convert1(){
	
	 var x = document.getElementById("myNumber1").value;
	 var newX = x * 4;
  document.getElementById("convert1").innerHTML = newX;
}

function convert2(){
	
	 var x = document.getElementById("myNumber2").value;
	 var newX = x * 3;
  document.getElementById("convert2").innerHTML = newX;
}

document.getElementById("convert1").innerHTML = "Result";
document.getElementById("convert2").innerHTML = "Result";












