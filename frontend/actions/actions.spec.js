import axios from 'axios'
import { getItemsByQuery, getItemById } from './index'
import data from './__mocks__/data.json'

jest.mock('axios')

describe('File: /actions/index.js', () => {
  describe('Method: getItemsByQuery()', () => {
    it('should return the same object returned by api method', async () => {
      axios.get.mockResolvedValueOnce({ data: data.getItems })
      const response = await getItemsByQuery('')
      expect(response).toEqual(data.getItems)
    })
  })

  describe('Method: getItemById()', () => {
    it('should return the same object returned by api method', async () => {
      axios.get.mockResolvedValueOnce({ data: data.getItemById })
      const response = await getItemById('')
      expect(response).toEqual(data.getItemById)
    })
  })
})
