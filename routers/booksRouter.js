const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.status(200);
  res.json({
    status: 'success',
    results: {
      books
    }
  });
});

router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201);
  res.json({
    status: 'success',
    reuslts: {
      book
    }
  });
});

router.patch('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200);
  res.json({
    status: 'success',
    reuslts: {
      book
    }
  });
});

router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204);
  res.json({
    status: 'success',
    message: 'Book deleted'
  });
});

module.exports = router;
