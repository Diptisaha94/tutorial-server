const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const catagory = require('./data/catagory.json');
const courses=require('./data/courses.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Courses API Running');
});
app.get('/courses/catagory', (req, res) => {
    res.send(catagory); 
});
app.get('/courses/:id', (req, res) => {
   const id= req.params.id;
   const catagory_courses = courses.filter(c => c.catagory_id === id); 
   res.send(catagory_courses);
});
app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
});