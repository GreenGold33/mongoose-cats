const Cat = require('../../../models/Cat')
const debug = require('debug')('cats')

function addCat(req,res) {

  const { name, age } = req.body

  const newCat = new Cat({ name, age })

  newCat.save()
    .then( msg => {
      debug('succesfully added new cat...')
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = addCat