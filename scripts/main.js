(function consoleCenter() {
	let overlay = document.getElementById("overlay");
	let windowWidth = window.innerWidth;
	// console.log(windowWidth);
	let windowSizeCalc = (windowWidth - 400) / 2;
	overlay.style.left = windowSizeCalc + "px"; 
}) ();

document.addEventListener('click', (e) => {
	// console.log(e.target.id)
	let photo = document.getElementById("backImage");
	let header = document.getElementById("header");
	let info = document.getElementById("info-container");
	let zodiac = document.getElementById("zodiac-theme");
	let hello = document.getElementById("hello-theme");
	let camel = document.getElementById("camel-theme");
	let clickedButton = e.target;
	// console.log(photo);
	
	let helloImage = `url("https://www.luthercalvinriggs.com/images/web-resume-images/page-image-header1.png")`;
	let helloHeader = "Hello! I'm Luther.";
	let helloInfo = "";
	
	let zodiacImage = `url("https://www.noaa.gov/sites/default/files/styles/scale_crop_1120x534_2x/public/thumbnails/image/coral%20ecosystems%20reeffish.jpg?itok=QXjz1z81")`;
	let zodiacHeader = "I'm a pisces!";
	let zodiacInfo = "That makes me a water sign. It also means that I can go with the flow wherever it may lead.";
	
	let camelImage = `url("https://www.tripsavvy.com/thmb/-RgZ1fTcWdTiHTXu3-q0_m6VD8k=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-529579912-5822cbe83df78c6f6add2b85.jpg")`;
	let camelHeader = "I'm a camel!";
	let camelInfo = "Camels are dexterous and built for the long haul. With the ability to survive extreme climates and the strength to carry a large load, you'll definitely be thankful for their reliability.";
	
	zodiac.classList.remove("active");
	hello.classList.remove("active");
	camel.classList.remove("active");
	clickedButton.classList.add("active");
	
	if (e.target.id === zodiac.id) {
		photo.style.backgroundImage = zodiacImage;
		header.textContent = zodiacHeader;
		info.textContent = zodiacInfo;
	} else if (e.target.id === hello.id) {
		photo.style.backgroundImage = helloImage;
		header.textContent = helloHeader;
		info.textContent = helloInfo;
	}else if (e.target.id === camel.id) {
		photo.style.backgroundImage = camelImage;
		header.textContent = camelHeader;
		info.textContent = camelInfo;
	}
});
