// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// HTML form
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// To Handle form submission
app.post('/submit', (req, res) => {
	const data = req.body;
	console.log(data);
	res.send(`<h1 style="text-align: center; background-image: url('https://assets-global.website-files.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png');backgroung-image:no-repeat;background-size:cover; height:200;width:500px;margin:70px auto;padding:150px;
	">
	Form submitted successfully!
    </h1> `);
});

// Server Listen to this PORT
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
