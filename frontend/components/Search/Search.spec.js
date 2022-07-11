import { render, fireEvent } from '@testing-library/react'
import Search from './Search'

describe('File: /components/Search/Search.js', () => {
  describe('Method: Search()', () => {
    it('should contain a fom', () => {
      const { container } = render(<Search />)
      expect(container.getElementsByTagName('form').length).toEqual(1)
    })

    it('should contain an input with a placeholder', () => {
      const { container } = render(<Search />)
      expect(container.getElementsByTagName('input')[0].placeholder).toEqual(
        'Nunca dejes de buscar',
      )
    })

    it('should submit the form', () => {
      const { container } = render(<Search />)
      const form = container.getElementsByTagName('form')[0]
      fireEvent.submit(form)
    })
  })
})
