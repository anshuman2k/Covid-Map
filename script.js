import unirest from unirest;

var req = unirest("GET", "https://covid-193.p.rapidapi.com/countries");

req.headers({
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});