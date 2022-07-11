import { render } from '@testing-library/react'
import Layout from './Layout'

describe('File: /components/Layout/Layout.js', () => {
  describe('Method: Layout()', () => {
    it('should render the children passed', () => {
      const mockChildren = 'mockChildren'
      const { container } = render(<Layout>{mockChildren}</Layout>)
      expect(container.innerHTML).toContain(mockChildren)
    })
  })
})
