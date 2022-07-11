import axios from 'axios'

import { backend_uri } from '../constants'

export const getItemsByQuery = (query) =>
  axios
    .get(encodeURI(`${backend_uri}?q=​:${query}`))
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })

export const getItemById = (id) =>
  axios
    .get(encodeURI(`${backend_uri}/${id}`))
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
