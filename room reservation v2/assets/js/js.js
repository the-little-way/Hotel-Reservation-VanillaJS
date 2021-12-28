var closePopBtn = document.getElementById('popCloseBtn');
closePopBtn.addEventListener("click", function() {
	closePopUp()
});

var PopCancel = document.getElementById('cancelOut');
PopCancel.addEventListener("click", function() {
	closePopUp()
});

var closePopMain = document.getElementById('popupMain');

var closePopUp = function() {
	closePopMain.style.display="none";
}

var room1Submit = document.getElementById('room1Submit');
room1Submit.addEventListener("click", function() {
	showPopUp(), getHotelImg(room1Submit.value), findRoom(room1Submit.value)
});

var room2Submit = document.getElementById('room2Submit');
room2Submit.addEventListener("click", function() {
	showPopUp(), getHotelImg(room2Submit.value), findRoom(room2Submit.value)
});

var room3Submit = document.getElementById('room3Submit');
room3Submit.addEventListener("click", function() {
	showPopUp(), getHotelImg(room3Submit.value), findRoom(room3Submit.value)
});

var selectedHotelImg = document.getElementById('selectedHotelImg');

var showPopUp = function() {
	closePopMain.style.display="block";
}

// array of room categories
var listOfRooms = ["Single Room", "King's suite", "Executive suite"]

// array of price tiers
var listOfPrices = [200, 350, 600]

// array of room images
var roomImages = ["assets/images/single1.jpg", "assets/images/king1.jpg", "assets/images/vip1.jpg"] 

var i;

var findRoom = function (x) {
	var orderedRoom = 0;
	for (i = 0; i < listOfRooms.length && x != listOfRooms[i]; i++ ) {
	orderedRoom = i;}
	return orderedRoom;
}

var getHotelImg = function(x) {
	if (x < listOfRooms.length) {
	 selectedHotelImg.src = roomImages[x];}
}
