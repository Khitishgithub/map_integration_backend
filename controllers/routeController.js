const Route = require('../models/Route');

const saveRoute = async (req, res) => {
  const { user, coordinates } = req.body;
  
  try {
    const newRoute = new Route({ user, coordinates });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { saveRoute };
