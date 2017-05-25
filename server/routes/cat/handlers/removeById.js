const Cat = require('../../../models/Cat')
const debug = require('debug')('cat')

function removeById (req,res) {

  const { id } = req.params

  debug(`ID to remove = ${id}`)

  Cat.findByIdAndRemove(id)
    .then( msg => {
      debug('succesfully removed cat')
      res.json(msg)
    })
    .catch( err => {
      debug('something went wrong when removing the cat')
      res.json(err)
    })

}

module.exports = removeById