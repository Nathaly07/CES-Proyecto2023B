const express = require('express');
const Stock = require('../models/Stock');
const { 
    createStock,
    getStock,
    getStocks,
    updateStock,
    deleteStock,
    getStocksByPricePerShare
} = require('../controllers/stockController');
const router = express.Router();
 
// obtener todos los stocks
router.get('/', getStocks);

// obtener todos los stocks ordenados por precio
router.get('/price', getStocksByPricePerShare);

// obtener un solo stock
router.get('/:id', getStock);

// crear un stock
router.post('/', createStock);

// actualizar un stock
router.patch('/:id', updateStock);

// borrar un stock
router.delete('/:id', deleteStock);

module.exports = router;