const Cat = require('../../../models/Cat')

function ageToZeroCats(req,res) {

  const catsIds = req.body

  Cat.update( { _id : { "$in" : catsIds }}, { age: 0 } , { multi: true })
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = ageToZeroCats