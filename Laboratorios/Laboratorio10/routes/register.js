var express = require('express')
var router = express.Router()

const RegisterController = require ('../controllers/RegisterController')

router.get('/', RegisterController.getAll)
router.get('/:id', RegisterController.getOneById)
router.get('/insert', RegisterController.insert)
router.get('/update', RegisterController.update)
router.get('/delete', RegisterController.deleteById)

module.exports = router
