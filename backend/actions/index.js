const {
  getAllItemsByQuery,
  getItemById,
  getItemDescriptionById,
} = require('../api')

const { author } = require('../constants')

module.exports = {
  getItems: async (query) => {
    try {
      const { results, available_filters } = await getAllItemsByQuery(query)
      const data = {
        author,
        categories: available_filters
          .find(({ id }) => id === 'category')
          .values.map((category) => category.name),

        items: results.map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item?.decimals,
          },
          picture: item.thumbnail,
          condition: item?.condition,
          free_shipping: item.shipping.free_shipping,
        })),
      }
      return data
    } catch (error) {
      return error.response.data
    }
  },

  getItem: async (id) => {
    try {
      const item = await getItemById(id)
      const { pictures, shipping } = item
      const { plain_text } = await getItemDescriptionById(id)
      const data = {
        author,
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item?.decimals,
          },
          picture: pictures[0].url,
          condition: item.condition,
          free_shipping: shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: plain_text,
        },
      }
      return data
    } catch (error) {
      return error.response.data
    }
  },
}
