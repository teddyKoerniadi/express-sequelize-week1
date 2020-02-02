var express = require('express');
var router = express.Router();
const model = require('../models/index');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});

// POST users
router.post('/', function(req, res, next) {
});

// UPDATE users
router.patch('/:id', function(req, res, next) {
});

// DELETE users
router.delete('/:id', function(req, res, next) {
});

module.exports = router;
