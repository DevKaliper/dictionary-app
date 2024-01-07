import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
 
describe('Header', () => {
  it('renders a dropdown', () => {
    render(<Header />)
 
    const drop = screen.getByText(/Sans Serif/i)
 
    expect(drop).toBeInTheDocument()
    

  })

  it("renders the type correcty", () =>{
    const type = screen.getByText(/Sans Serif/i)
   
   
    

  })
})