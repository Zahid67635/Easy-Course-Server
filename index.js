const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const courses = require('./data/courses.json');


app.use(cors())
app.get('/', (req, res) => {
    res.send('Server running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => console.log('port is running'))

module.exports = app;