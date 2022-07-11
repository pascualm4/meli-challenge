const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

const { getItems, getItem } = require('./actions')

app.get('/', (req, res) => {
  res.send('hello from my app')
})

app.get('/api/items/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  const response = await getItem(id)
  res.json(response)
})

app.get('/api/items', async (req, res) => {
  const { q } = req.query
  const response = await getItems(q)
  res.json(response)
})

app.listen(5000, () => {
  debug(`listening on port ${chalk.green('3000')}`)
})
