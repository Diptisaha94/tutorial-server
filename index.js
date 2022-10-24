const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const catagory = require('./data/catagory.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('Courses API Running');
});
app.get('/courses/catagory', (req, res) => {
    res.send(catagory); 
});
app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
});