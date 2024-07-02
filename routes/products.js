const express = require('express');
const router = express.Router();
const {getAllProducts,getAllProductsTesting,getAllProductsShow} = require('../controllers/products')

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.route('/data').get(getAllProductsShow)

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const {product,productshow,producttest} = require('../controllers/products');

// router.route('/').get(product);
// router.route('/show').get(productshow)
// router.route('/Testings').get(producttest);

// module.exports = router