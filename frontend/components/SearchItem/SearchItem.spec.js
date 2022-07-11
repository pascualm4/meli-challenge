import { render } from '@testing-library/react'
import SearchItem from './SearchItem'
import data from './__mocks__/data.json'

describe('File: /components/SearchItem/SearchItem.js', () => {
  describe('Method: SearchItem()', () => {
    it('should contain an img', () => {
      const { container } = render(<SearchItem item={data.item} />)
      expect(container.getElementsByClassName('product-img').length).toEqual(1)
    })

    it('should contain 3 p', () => {
      const { container } = render(<SearchItem item={data.item} />)
      expect(container.getElementsByTagName('p').length).toEqual(3)
    })

    it('should have 1 p with an amount', () => {
      const { container } = render(<SearchItem item={data.item} />)
      expect(container.getElementsByTagName('p')[0].innerHTML).toContain(
        data.item.price.currency + ' ' + data.item.price.amount,
      )
    })
  })
})
