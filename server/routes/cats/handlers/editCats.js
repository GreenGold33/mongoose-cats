const Cat = require('../../../models/Cat')

function addCat(req,res) {

  const aEditedCats = req.body

  const aPromisesUpdateCats = aEditedCats.map( editionData => {
    return  Cat.findByIdAndUpdate(
                  { _id: editionData.id },
                  { "$set" : editionData.data },
                  { multi: true }
            );
  })

  Promise.all(aPromisesUpdateCats)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = addCat