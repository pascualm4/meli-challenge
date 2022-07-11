import { render } from '@testing-library/react'
import Breadcumb from './Breadcumb'

describe('File: /components/Breadcumb/Breadcumb.js', () => {
  describe('Method: Breadcumb()', () => {
    it('should contain the category passed', () => {
      const mockCategory = 'mockCategory'
      const { container } = render(<Breadcumb categories={[mockCategory]} />)
      expect(container.getElementsByTagName('p')[0].innerHTML).toContain(
        mockCategory,
      )
    })
  })
})
