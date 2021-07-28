import { render, screen } from '@testing-library/react'

import Input from './'

describe('<Input />', () => {
  it('should render the heading', () => {
    const { container } = render(<Input />)
    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Input />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
