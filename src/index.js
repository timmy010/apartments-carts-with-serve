const express = require('express');
var cors = require('cors');
const path = require('path');
const { v4 } = require('uuid');

const app = express();

let APARTMENTS = [
    { id: v4(), title: 'Apartment 1', price: '3690', image: 'apartment.jpg', likeCount: 0 },
    { id: v4(), title: 'Apartment 2', price: '13690', image: 'apartment.jpg', likeCount: 0 },
    { id: v4(), title: 'Apartment 3', price: '4000', image: 'apartment.jpg', likeCount: 0 },
    { id: v4(), title: 'Apartment 4', price: '2690', image: 'apartment.jpg', likeCount: 0 },
    { id: v4(), title: 'Apartment 5', price: '5690', image: 'apartment.jpg', likeCount: 0 },
    { id: v4(), title: 'Apartment 6', price: '10690', image: 'apartment.jpg', likeCount: 0 },
]

app.use(express.json());
app.use(cors());

// GET
app.get('/api/apartments', (req, res) => {
    res.status(200).json(APARTMENTS);
})

// PUT
app.put('/api/apartments/:id', (req, res) => {
    const idx = APARTMENTS.findIndex(c => c.id === req.params.id);
    APARTMENTS[idx] = req.body
    res.json(APARTMENTS[idx]);
})

app.use(express.static(path.resolve(__dirname, 'apartments-carts')));

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

app.listen(3000, () => console.log('Server has been started on port 3000...'));