// filter for mobile-only visitors
var checkMobile = function() {
	var viewer;
	var errorMsg = document.getElementById('errorMain');
	var viewPage = document.getElementById('actualMain');
	var forceMobile = function(x) {
	if (x == true) {
		window.location.replace('error.html');
	};
}
	
	if ( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)  )
 
 {viewer = "onMobile"; viewPage.style.display="flex"; 
 errorMsg.style.display="none"; console.log(viewer)}
 
 else forceMobile(true);
}
checkMobile();

//a function to update the copyright in footer
var updateDate = function() {
	var todaysDate = new Date();
	todaysYear = todaysDate.getFullYear();
	document.getElementById('updateDate1').innerHTML = todaysYear;
	document.getElementById('updateDate2').innerHTML = todaysYear;
}
updateDate();

var closePopBtn = document.getElementById('popCloseBtn');
closePopBtn.addEventListener("click", function() {
	closePopUp()
});

var numDays;

// add the onclick event, and then begin to process the room reservations
var room1Submit = document.getElementById('room1Submit');
room1Submit.addEventListener("click", function() {
	showPopUp(); getHotelImg(room1Submit.value); calcReset(room1Submit.value); findRoom(room1Submit.value), calcTime("room1Dates1", "room1Dates2")
});

// add the onclick event, and then begin to process the room reservations
var room2Submit = document.getElementById('room2Submit');
room2Submit.addEventListener("click", function() {
	showPopUp(); getHotelImg(room2Submit.value); calcReset(room3Submit.value), findRoom(room3Submit.value), calcTime("room2Dates1", "room2Dates2")
});

// add the onclick event, and then begin to process the room reservations
var room3Submit = document.getElementById('room3Submit');
room3Submit.addEventListener("click", function() {
	showPopUp(); getHotelImg(room3Submit.value); calcReset(room3Submit.value); findRoom(room3Submit.value), calcTime("room3Dates1", "room3Dates2")
});

var showHotel = document.getElementById('showHotelMini');

var hotelName = document.getElementById('hotelName');

var totalNights = document.getElementById('totalNights');

document.getElementById('subMenu').style.display = "none"

var popupCheckout = document.getElementById('checkoutMini');

// modal control for top menu
var showMenu = document.getElementById('showMenu');
showMenu.addEventListener("click", function() {
	if (document.getElementById('subMenu').style.display == "none") {
		document.getElementById('subMenu').style.display = "block";
		document.getElementById('dropMenu').style.display = "block";
		document.getElementById('bannerx').style.display = "block"
	}
	else {
		document.getElementById('subMenu').style.display = "none";
		document.getElementById('dropMenu').style.display = "none";
		document.getElementById('bannerx').style.display = "none"
	}
});

var bannerx = document.getElementById('bannerx');

bannerx.addEventListener("click", function() {
	document.getElementById('subMenu').style.display = "none";
	setTimeout (function(){document.getElementById('bannerx').style.display = "none"}, 10)
});

var selectedHotelImg = document.getElementById('selectedHotelImg');

var dayS = 1000 * 60 * 60 * 24;

var popupMain = document.getElementById('popupMain');

var popupMini = document.getElementById('popupMini');

// modal control for reservation calculator
function showPopUp() {
	popupMain.style.display = "block";
	showHotel.style.display = "block";
}

// creating a psuedo database by using arrays in the js file
var listOfRooms = ["Single Room", "King's suite", "Executive suite"]
var listOfPrices = [200, 350, 600]
var roomImages = ["./assets/images/single1.jpg", "./assets/images/king1.jpg", "./assets/images/vip1.jpg"] 

var i;

var orderedRoom;

var findRoom = function (x) {
	orderedRoom = x;
}

var calcTime = function(x,y) {var today1 = new Date();
var todayDay = today1.getDate();
var todayMonth = today1.getMonth();
var todayYear = today1.getFullYear();
console.log(todayYear);

var Ta = (todayYear+"-"+todayMonth+"-"+todayDay);
console.log(Ta);
//console.log(typeof Ta);
//console.log((Ta).getTime());
var T0 = new Date(Ta);
//console.log(T0);
var dateA = document.getElementById(x).value;
var date1 = new Date(dateA);

var dateB = document.getElementById(y).value;
var date2 = new Date(dateB);

calcDays(date1.getTime(), date2.getTime(), T0.getTime());
}


var calcDays = function(a, b, c) {
	if (a >= c && a <= b) {
		var numTime = b - a;
		var numDays = numTime / dayS;
	calcPrice(numDays);
	;}
	else  {console.log("date error");}
};

var calcPrice = function(a) {
	hotelName.innerHTML = listOfRooms[orderedRoom];
	totalNights.innerHTML = (a * listOfPrices[orderedRoom]) + ' Ghc' + ' for ' + a + ' Night(s)'
}

var calcReset = function(x) {
	hotelName.innerHTML = listOfRooms[x];
	totalNights.innerHTML = "Please select a valid date";
}

var closePopUp = function() {
	popupMain.style.display="none";
	popupCheckout.style.display="none";
}

var getHotelImg = function(x) {
	if (x < listOfRooms.length) {
	 selectedHotelImg.src = roomImages[x];}
}

var PopCancel = document.getElementById('cancelOut');
PopCancel.addEventListener("click", function() {
	closePopUp()
});

var toPayment = document.getElementById('toPayment');
toPayment.addEventListener("click", function() {
	loadCheckout();
});

function loadCheckout() {
	showHotel.style.display="none";
    popupCheckout.style.display="block";
	
}

var endDemo = document.getElementById('toPaymentFinal');
endDemo.addEventListener("click", function() {
	closePopUp();
});