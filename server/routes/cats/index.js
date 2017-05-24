const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addCat = require('./handlers/addCat')
const editCats = require('./handlers/editCats')
const ageToZeroCats = require('./handlers/ageToZeroCats')

router.get('/', getAll)
router.post('/', addCat)
router.put('/', editCats)
router.put('/age/zero', ageToZeroCats)

module.exports = router