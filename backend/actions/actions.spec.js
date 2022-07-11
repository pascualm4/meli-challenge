const axios = require('axios')
const { getItems, getItem } = require('./index')
const data = require('./__mocks__/data.json')

jest.mock('axios')

describe('File: /actions/index.js', () => {
  describe('Method: getItems()', () => {
    it('should return the same object returned by api method', async () => {
      axios.get.mockResolvedValueOnce({ data: data.getAllItemsByQuery })
      const response = await getItems('')
      expect(response).toEqual(data.getItems)
    })
  })

  describe('Method: getItem()', () => {
    it('should return the same object returned by api method', async () => {
      axios.get.mockResolvedValueOnce({ data: data.getItemByIdApi })
      axios.get.mockResolvedValueOnce({ data: data.getItemDescriptionByIdApi })
      const response = await getItem('')
      expect(response).toEqual(data.getItemById)
    })
  })
})
