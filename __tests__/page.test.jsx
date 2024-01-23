import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
 
describe('Header', () => {
  xit('renders a dropdown', () => {
    render(<Header />)
 
    const drop = screen.getByText(/Sans Serif/i)
 
    expect(drop).toBeInTheDocument()
    

  })

  xit("renders the type correcty", () =>{
    const type = screen.getByText(/Sans Serif/i)
   
   
    

  })
})