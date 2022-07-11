import { render } from '@testing-library/react'
import SearchItemDetail from './SearchItemDetail'
import data from './__mocks__/data.json'

describe('File: /components/SearchItemDetail/SearchItemDetail.js', () => {
  describe('Method: SearchItemDetail()', () => {
    it('should contain an img', () => {
      const { container } = render(<SearchItemDetail item={data.item.item} />)
      expect(container.getElementsByClassName('product-img').length).toEqual(1)
    })

    it('should contain a title', () => {
      const { container } = render(<SearchItemDetail item={data.item.item} />)
      expect(container.getElementsByTagName('h3')[0].innerHTML).toContain(
        data.item.item.title,
      )
    })
  })
})
