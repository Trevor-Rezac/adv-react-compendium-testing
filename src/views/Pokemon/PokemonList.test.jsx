import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PokemonList from './PokemonList'

describe('Pokemon List test', () => {
  it('should render an input field for searching and a list of cards with a pokemon id, name and image', async () => {
    render (
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    
    await screen.findByPlaceholderText('Find Pokemon')

    await screen.findByText(/16/i)   

    await screen.findByText(/butterfree/i)

    await screen.findAllByRole('img', { name: 'pokemon image'})

  })
})