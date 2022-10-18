const express = require('express');
const bodyParser = require('body-parser');
const person = require('./models/person');

const app = express();
app.use(bodyParser.json());

require('./db');

app.post('/user', async function (req, res) {
    const data = req.body;
    if (!data.name || !data.age) {
        res.status(400).send("Did not save it as the payload contained error");
    }

    const p = await person.create({
        name: data.name,
        age: data.age
    })

    console.log(p);

    res.send("OK");
});

app.get('/users', async function (req, res) {
    const persons = await person.find({});
    res.json(persons.map(person => ({
        name: person.name,
        age: person.age
    })));
})

app.listen(process.env.PORT || 80);