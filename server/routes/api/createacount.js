const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Users
router.get('/', async(req, res) => {
    const users = await loadUserColection();
    res.send(await users.find({}).toArray());
});
//Create User
router.post('/', async(req, res) => {
    const users = await loadUserColection();
    await users.insertOne({
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        createdAt: new Date()
    });
    res.status(201).send();
});
// Delete User
router.delete('/:id', async(req, res) => {
    const users = await loadUserColection();
    await users.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

async function loadUserColection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://abc123:Z7ZhekVI@vueexpress.bvdaajx.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('vueexpress').collection('users');
}

module.exports = router;