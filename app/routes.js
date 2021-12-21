const express = require('express')
const { readFile } = require('fs').promises

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.redirect('/table')
})

router.get('/table', async (req, res, next) => {
  const parsedData = await loadSourceData(next)
  const payload = {
    error: false,
    data: parsedData
  }
  res.render('details-page', payload)
})

router.get('/list', async (req, res, next) => {
  const parsedData = await loadSourceData(next)
  const payload = {
    error: false,
    data: parsedData
  }
  res.render('list-page', payload)
})

async function loadSourceData() {
  const sourceData = await readFile('./app/source_data.json', {encoding: 'utf-8'})
  const parsedData = JSON.parse(sourceData)
  return await parsedData
}

module.exports = router
