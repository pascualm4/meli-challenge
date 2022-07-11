const axios = require('axios')
const data = require('./__mocks__/data.json')
const {
  getAllItemsByQuery,
  getItemById,
  getItemDescriptionById,
} = require('./index')

jest.mock('axios')

describe('File: /api/index.js', () => {
  describe('Method: getAllItemsByQuery()', () => {
    it('should return the same object returned by axios', async () => {
      axios.get.mockResolvedValueOnce({ data: data.allItems })
      const items = await getAllItemsByQuery('')
      expect(items).toEqual(data.allItems)
    })
  })

  describe('Method: getItemById()', () => {
    it('should return the same object returned by axios', async () => {
      axios.get.mockResolvedValueOnce({ data: data.item })
      const items = await getItemById('')
      expect(items).toEqual(data.item)
    })
  })

  describe('Method: getItemDescriptionById()', () => {
    it('should return the same object returned by axios', async () => {
      axios.get.mockResolvedValueOnce({ data: data.itemDescription })
      const items = await getItemDescriptionById('')
      expect(items).toEqual(data.itemDescription)
    })
  })
})
