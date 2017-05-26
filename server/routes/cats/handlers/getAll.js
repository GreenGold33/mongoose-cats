const Cat = require('../../../models/Cat')
const debug = require('debug')('cats')

function getAll (req, res) {
  const title = 'My favourite Cats'
  Cat.find()
    .then(cats => {
      debug('succesfully got all cats...')
      res.json(cats)
    })
}

module.exports = getAll
