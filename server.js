const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 28 },
    { id: 3, name: 'Bob Johnson', age: 35 },
    { id: 4, name: 'Emily Davis', age: 25 }
];


app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/', (req, res) => {
    res.send('welcome to our app!');
});

app.get('/about', (req, res) => {
    res.send('welcome to About page');
});

app.get('/service', (req, res) => {
    res.send('welcome to Service page');
});



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});