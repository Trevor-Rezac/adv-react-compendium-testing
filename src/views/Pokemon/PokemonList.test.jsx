import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PokemonList from './PokemonList'
import userEvent from '@testing-library/user-event'

describe('Pokemon List test', () => {
  it('should render an input field for searching and a list of cards with a pokemon id, name and image', async () => {
    render (
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    
    await screen.findByPlaceholderText('Find Pokemon')  

    await screen.findByText(/butterfree/i)

    await screen.findAllByRole('img', { name: 'pokemon image'})

  })

  it('should test user searching for a pokemon', async () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    //wait for the "Loading Pokemon" element to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading pokemon/i))
    
    //grabs the search input box by placeholder
    const searchInput = screen.getByPlaceholderText(/find pokemon/i);
    console.log('searchInput!!!!', searchInput);
    
    //user event of typing 'butter'
    userEvent.type(searchInput, 'butter')
    console.log('searchInput after userEVENT', searchInput)
    
    //checks that only butterfree appears on screen after user event
    return waitFor(() => {
      const searchResult = screen.getByText(/butterfree/i)
      screen.debug();
      expect(searchResult.textContent).toEqual('butterfree')
    })
  })
})