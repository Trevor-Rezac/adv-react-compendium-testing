import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import PokemonPage from './views/Pokemon/PokemonPage'

export default function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/pokemon-list">
        <PokemonPage />
      </Route>
      <Route exact path='/'>
          <h1>Pokedex</h1>
          <Link to='/pokemon-list'>View all pokemon!</Link>
      </Route>
    </Switch>
  </Router>
  )
}
