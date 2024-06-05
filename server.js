// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    // Process form submission
    // Save form data to a file or database
    
    // Example: Saving form data to a JSON file
    const formData = req.body;
    fs.writeFileSync('formData.json', JSON.stringify(formData, null, 2));
    
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
