const router = require('express').Router()
const { Controller } = require('controllers/default.controller')

class MhsRoute extends Controller {
  route() {
    return [
      router.get('/', (req, res) => res.send('hello wordl')),
      router.get('/results', super.mhs().resultsController),
      router.post('/create', super.mhs().createController),
      router.get('/result/:id', super.mhs().resultController),
      router.delete('/delete/:id', super.mhs().deleteController),
      router.put('/update/:id', super.mhs().updateController)
    ]
  }
}

module.exports = { MhsRoute }
