

// PARAMETERS
var shipsParameters = {
							Fuel: '2058960',
							Throttle: 'Intact',
							Speed: '17,500 miles/h',
							currentSpeed: 15.652,
};


function accelerate(){
							shipsParameters.currentSpeed += 10;
							console.log(shipsParameters.currentSpeed);
							document.getElementById("speed").innerHTML = shipsParameters.currentSpeed;
							
							shipsEnvironment.currentDistance += 564;
							document.getElementById("currentDistance").innerHTML = shipsEnvironment.currentDistance;

							}


	document.getElementById("fuel").innerHTML = shipsParameters.Fuel;
	document.getElementById("throttle").innerHTML = shipsParameters.Throttle;
	document.getElementById("speed").innerHTML = shipsParameters.currentSpeed;



// ENVIRONMENT

 var shipsEnvironment = {
							Gravity: '3.7',
							Atmosphere: '0.088 psi',
							currentDistance: 264554,

};

	document.getElementById("gravity").innerHTML = shipsEnvironment.Gravity;
	document.getElementById("atmosphere").innerHTML = shipsEnvironment.Atmosphere;
	

//Distance counter
distanceCounter();
function distanceCounter(){
	
	setInterval(function(){

		shipsEnvironment.currentDistance += 100;

		document.getElementById("currentDistance").innerHTML = shipsEnvironment.currentDistance;

	}, 1000)

}



//SUPPLIES

var supplies = {
					Food: '70%',
					Water: '96%'
};


	document.getElementById("water").innerHTML = supplies.Food;
	document.getElementById("food").innerHTML = supplies.Water;


//FOOD BAR
class foodBar {
	constructor(element, initialValue = 0){
		this.valueElem = element.querySelector('.foodBar-value');
		this.fillElem = element.querySelector('.foodBar-fill');

		this.setValue(initialValue);

	}
	setValue(newValue){
		if(newValue < 0) {
			newValue = 0;
		}

		if(newValue > 100){
			newValue = 100;
		}

		this.value = newValue;
		this.update();
	}
	update(){
		const percentage = this.value + '%'; 

		this.fillElem.style.width = percentage;
		this.valueElem.textContent = percentage;
	}
}

new foodBar(document.querySelector('.foodBar'),96);



//WATER BAR
class waterBar{
	constructor(element, initialValue = 0){
		this.valueElem = element.querySelector('.waterBar-value');
		this.fillElem = element.querySelector('.waterBar-fill');

		this.setValue(initialValue);

	}
	setValue(newValue){
		if(newValue < 0) {
			newValue = 0;
		}

		if(newValue > 100){
			newValue = 100;
		}

		this.value = newValue;
		this.update();
	}
	update(){
		const percentage = this.value + '%'; 

		this.fillElem.style.width = percentage;
		this.valueElem.textContent = percentage;
	}
}

new waterBar(document.querySelector('.waterBar'),70);



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












