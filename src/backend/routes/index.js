const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

router.get('/', async (req, res, next) => {
  try {
    const API = 'https://librenews.io/api';

    const response = await fetch(API, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const news = await response.json();

    res.json(news.latest);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
