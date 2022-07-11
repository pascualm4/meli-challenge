const axios = require('axios')

const { api_base_url } = require('../constants')

module.exports = {
  getAllItemsByQuery: (query) =>
    axios
      .get(encodeURI(`${api_base_url}/sites/MLA/search?q=​${query}`))
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        throw error
      }),

  getItemById: (id) =>
    axios
      .get(encodeURI(`${api_base_url}/items/${id}`))
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        throw error
      }),

  getItemDescriptionById: (id) =>
    axios
      .get(encodeURI(`${api_base_url}/items/${id}/description`))
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        throw error
      }),
}
