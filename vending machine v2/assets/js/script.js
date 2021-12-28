
var codePrompt = document.getElementById('codePrompt');

// add click event using javascript instead of html, some of this could be done with a for loop but for practice, will type it out
var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function(){
	save(btn1.value)
});

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click", function(){
	save(btn2.value)
});

var btn3 = document.getElementById('btn3');
btn3.addEventListener("click", function(){
	save(btn3.value)
});

var btn4 = document.getElementById('btn4');
btn4.addEventListener("click", function(){
	save(btn4.value)
});

var btn5 = document.getElementById('btn5');
btn5.addEventListener("click", function(){
	save(btn5.value)
});

var btn6 = document.getElementById('btn6');
btn6.addEventListener("click", function(){
	save(btn6.value)
});

var btn7 = document.getElementById('btn7');
btn7.addEventListener("click", function(){
	save(btn7.value)
});

var btn8 = document.getElementById('btn8');
btn8.addEventListener("click", function(){
	save(btn8.value)
});

var btn9 = document.getElementById('btn9');
btn9.addEventListener("click", function(){
	save(btn9.value)
});

var btn0 = document.getElementById('btn0');
btn0.addEventListener("click", function(){
	save(btn0.value)
});

var btnx = document.getElementById('btnx');
btnx.addEventListener("click", function(){
	confirmBtn(false)
});

var btny = document.getElementById('btny');
btny.addEventListener("click", function(){
	confirmBtn(true)
});

var displayR2 = document.getElementById('displayR2');

var ejectedItem = document.getElementById('ejectedItem');

// var a1 = 1;

var ejectVal;

var validCode;

// var x = true;

 var orderQuantity = 0;
 
// although the inventory is fairly small and values can be hard coded,
//I'm making use of the following arrays and their index to help learn scalability
// an array containing product names
var drinkType = ["mango", "lemon", "orange", "zinger", "grape", "exotic" ];

// an array containing product id codes
var drinkID = ["011", "022", "033", "200", "300", "400" ];

// an array containing the finished order aka product urls
var drinkTypeUrl = ["assets/images/mango1.jpg", "assets/images/lemon1.jpg", "assets/images/orange1.jpg", 
						"assets/images/zinger1.jpg", "assets/images/grape1.jpg", "assets/images/juice1.jpg"]

// an array containing product cost
// var drinkCost
let drinkCost = 2;

// var displayR2digits = displayR2.innerHTML;

var displayR1notice = document.getElementById('displayR1');

var save = function(a1){
	
	if (validCode != true && displayR2.innerHTML.length < 3) {
	displayR2.innerHTML += (a1) }
  	else if (validCode == true && displayR2.innerHTML.length < 1) {
 	(displayR2.innerHTML += (a1)),
	orderQuantity = parseFloat(displayR2.innerHTML);
	return orderQuantity}
	else if (validCode = true && displayR2.innerHTML == "0"){
	(displayR2.innerHTML += (a1)),
	orderQuantity = parseFloat(displayR2.innerHTML);
	return orderQuantity}
};

var confirmBtn = function(x){
	//var inputID = parseFloat(displayR2.innerHTML);

	if (x == true && displayR2.innerHTML.length == 3){ codeValidation(displayR2.innerHTML) }
	else if (x == true && orderQuantity > 0) {ejectDrink(i)}
	else if (x == false && validCode != true){displayR2.innerHTML=""}
	else if (x == false && validCode == true){window.location.reload()}
};

var i = 0;

var codeValidation = function(x){
	
	if ( i < drinkID.length && x != drinkID[i] ){ i++, codeValidation(x) }
	else if (i < drinkID.length && x == drinkID[i] ) {codePrompt.innerHTML = ("Order Processing.."),
	setTimeout ( function(){
	codePrompt.innerHTML = ("Order Processing....")
	}, 400),
		setTimeout ( function(){
	codePrompt.innerHTML = ("Order Processing......")
	}, 800),
	setTimeout ( function(){
	validCode = true, getQuantity(),
	displayR2.innerHTML = "", codePrompt.innerHTML = ("Please Enter Quantity")
	}, 1200);
	}
	else if (i = drinkID.length && x != drinkID[i]) {
	codePrompt.innerHTML = ("Error Processing Your Order.. Please Verify Product Code");
	displayR2.innerHTML = "ERROR";
	i = 0;}
//	var finalCode = i;
	return i;
};

var processOrder = function(x){
	if (x == true){}
};

var getQuantity = function(x){
	displayR1notice.innerHTML = ("Quantity Limit is 9 Bottles");
	var orderQuantity = 0;
};

var billing = function(x){
	
	//set currency here e.g. Ghana cedis, US dollars, Euro etc
	var currency = 'dollars'
	
	if (x == true /*&& paymentMethod = 1* && ejectCounter < orderQuantity */){
//	insert extra billing code later such as connecting to ATM service or coin counting device attached
//	I could move lines 156 - 166 into a seperate exitMessage(true) function and apply the loop message there
	codePrompt.innerHTML = ("Order Processing.."),
		setTimeout ( function(){
	codePrompt.innerHTML = ("Order Processing....")
	}, 400),
		setTimeout ( function(){
	codePrompt.innerHTML = ("Order Processing......")
	}, 800),
		setTimeout(() => { 
	codePrompt.innerHTML=('Your bank card has been billed ' + orderQuantity * drinkCost + ' ' + currency +' for your order')  
	}, 1200);
	};
	
};

var ejectDrink = function(x){
	if (orderQuantity > 0){
		var drinkTypeUrlEject = drinkTypeUrl[x];
		setTimeout(() => { (ejectedItem.src = drinkTypeUrlEject),
		(document.getElementById('eject0').style.backgroundColor="black"),
		(document.getElementById('eject1').style.backgroundColor="black"),
		billing(true)
		}, 1000);
		}
	else if (orderQuantity < 1) (codePrompt.innerHTML=("Error Processing Your Order.. Please Verify Quantity"));
	
};