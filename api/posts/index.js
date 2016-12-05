var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.get('/:id', controller.show);

router.patch('/:id', controller.update);

module.exports = router;
