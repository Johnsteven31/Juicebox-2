const express = require('express');
const tagsRouter = express.Router();

const { 
  getAllTags
} = require('../db');

tagsRouter.get('/', async (req, res, next) => {
  try {
    const tags = await getAllTags();
  
    res.send({
      tags
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter; 
