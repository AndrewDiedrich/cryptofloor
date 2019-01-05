const express = require('express');
const router = express.Router();

block = {
    id: 1
}

router.get('/', (req, res) => {
    res.send(block)
})