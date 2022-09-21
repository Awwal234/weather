const searchcountry = document.getElementById('searchcountry');
const ipad = document.getElementById('ipadres');
const region = document.getElementById('region');
const tzone = document.getElementById('tzone');
const default_ip = document.getElementById('searchcountry').value;
const show_weather = () => {
	fetch(
		`https://geo.ipify.org/api/v2/country?apiKey=at_LTHNls3QLuJsEwpRbDkL2JOBKgNER&ipAddress=${default_ip}`,
	)
		.then((response) => response.json())
		// .then((data) => (searchcountry.value = data.location.country))
		// .then((data) => console.log(data))
		.then(
			(data) => (
				(ipad.innerHTML = data.location.country),
				(region.innerHTML = data.location.region),
				(tzone.innerHTML = data.location.timezone)
			),
		)
		.catch((error) => console.log('Oops'))
		.finally(() => console.log('fetched your location'));
};

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
	if (searchcountry.value == '') {
		alert('enter a valid IP address');
		e.preventDefault();
	} else {
		show_weather();
		e.preventDefault();
	}
});

searchcountry.addEventListener('keyup', () => {
	if (searchcountry.value == '') {
		ipad.innerHTML = '';
		region.innerHTML = '';
		tzone.innerHTML = '';
	}
});
