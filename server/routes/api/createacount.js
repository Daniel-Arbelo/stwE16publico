const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Users
router.get('/', async(req, res) => {
    const users = await loadUserColection();
    res.send(await users.find({}).toArray());
});
//Create User


// Delete User

async function loadUserColection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://abc123:Z7ZhekVI@vueexpress.bvdaajx.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('vueexpress').collection('users');
}

module.exports = router;