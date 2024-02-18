





// const http = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'imdb8.p.rapidapi.com',
// 	port: null,
// 	path: '/auto-complete?q=game%20of%20thr',
// 	headers: {
// 		'X-RapidAPI-Key': '42a946771fmsh7f61dcb14aa560dp13192ejsn5b9a40196221',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();




// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '42a946771fmsh7f61dcb14aa560dp13192ejsn5b9a40196221',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const url = 'https://imdb8.p.rapidapi.com/title/get-videos?tconst=tt0944947&limit=25&region=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '42a946771fmsh7f61dcb14aa560dp13192ejsn5b9a40196221',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }