import { render } from '@testing-library/react'
import Header from './Header'

describe('File: /components/Header/Header.js', () => {
  describe('Method: Header()', () => {
    it('should contain an image and a form', () => {
      const mockCategory = 'mockCategory'
      const { container } = render(<Header categories={[mockCategory]} />)
      expect(container.getElementsByClassName('logo-img').length).toEqual(1)
      expect(container.getElementsByTagName('form').length).toEqual(1)
    })
  })
})
