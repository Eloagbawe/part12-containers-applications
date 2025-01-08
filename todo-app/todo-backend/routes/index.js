const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET todos statistics */
router.get('/statistics', async(req, res) => {
  const count = await redis.getAsync('added_todos');

  if (count) {
    res.json({'added_todos': Number(count)});
  } else {
    res.json({'added_todos': 0});
  }
})

module.exports = router;
