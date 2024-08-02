const express = require('express');
const Route = require('../models/Route');
const router = express.Router();

// Add a new route
router.post('/', async (req, res) => {
  const { startPoint, endPoint } = req.body;

  try {
    const newRoute = new Route({ startPoint, endPoint });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all routes
router.get('/', async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
