import { render } from '@testing-library/react'
import SearchList from './SearchList'
import data from './__mocks__/data.json'

describe('File: /components/SearchList/SearchList.js', () => {
  describe('Method: SearchList()', () => {
    it('should render the same rows of data items', () => {
      const { container } = render(<SearchList items={data.items.items} />)
      expect(container.getElementsByClassName('product-img').length).toEqual(
        data.items.items.length,
      )
    })
  })
})
