const express = require('express')
const { readFile } = require('fs').promises

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.redirect('/list')
})

router.get('/table', async (req, res, next) => {
  const parsedData = await loadSourceData(next)
  // const tags = getTags(parsedData)
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

async function loadSourceData () {
  const sourceData = await readFile('./app/source_data.json', { encoding: 'utf-8' })
  const parsedData = JSON.parse(sourceData)
  return await parsedData
}

// function getTags(parsedData) {
//   const allTags = new Set()
//   for (let server of parsedData.servers) {
//     for (let app of server.apps) {
//       for (let tag of app.tags) {
//         allTags.add(tag)
//       }
//     }
//   }
//   const sortedTags = [...allTags].sort()
//   return sortedTags
// }

module.exports = router
