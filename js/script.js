function loadWeather() {

	const patagoniaWeather = 'http://api.openweathermap.org/data/2.5/weather?lat=-49.271278&lon=-73.043222&id=524901&APPID=a845e33b0276f77f43fa38a86c5085ef';
	const baNaHillsWeather = 'http://api.openweathermap.org/data/2.5/weather?lat=15.995556&lon=107.994167&id=524901&APPID=a845e33b0276f77f43fa38a86c5085ef';
	const secedaWeather = 'http://api.openweathermap.org/data/2.5/weather?lat=46.598056&lon=11.724167&id=524901&APPID=a845e33b0276f77f43fa38a86c5085ef';

	const locationURLS = [patagoniaWeather, baNaHillsWeather, secedaWeather];

	function myAsyncFunction(url) {
		return new Promise((resolve, reject) => {

			const xhr = new XMLHttpRequest();

			xhr.open('GET', url);

			xhr.onload = () => {resolve(xhr.response)};

			xhr.onerror = () => {reject(xhr.status)};

			xhr.send();
		});
	}

	myAsyncFunction(patagoniaWeather).then(displayWeather);
	myAsyncFunction(baNaHillsWeather).then(displayWeather);
	myAsyncFunction(secedaWeather).then(displayWeather);

	function displayWeather(data) {

		var jsonObj = JSON.parse(data);

		console.log('Print location and temperature.');

		let title;
		let temp;

		if (jsonObj.sys.country === 'AR') {
			title = document.getElementById('title1');
			title.textContent = jsonObj.name;

			temp = document.getElementById('temp1');
			temp.textContent = Math.floor(jsonObj.main.temp - 273.15) + 'ºC';

			} else if (jsonObj.sys.country === 'VN') {
			title = document.getElementById('title2');
			title.textContent = jsonObj.name;

			temp = document.getElementById('temp2');
			temp.textContent = Math.floor(jsonObj.main.temp - 273.15) + 'ºC';

			} else if (jsonObj.sys.country === 'IT') {
			title = document.getElementById('title3');
			title.textContent = jsonObj.name;

			temp = document.getElementById('temp3');
			temp.textContent = Math.floor(jsonObj.main.temp - 273.15) + 'ºC';
			} else {
			console.log('Loop don\'t work. Check the if loop.')
			}
		}

		
};

loadWeather();