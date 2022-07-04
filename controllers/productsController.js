const {Products} = require('../models');

const getAll = async (req, res) => {

  const products = await Products.findAll();

  return res.status(200).json(products);
}

module.exports = {
  getAll,
} 