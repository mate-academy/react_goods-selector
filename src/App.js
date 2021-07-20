import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import b from './image/ball.png';
import ob from './image/cBall.png';
import './App.scss';

const pokemonsFromServer = [
  'Bulbasaur',
  'Charmander',
  'Squirtle',
  'Butterfree',
  'Pidgey',
  'Jigglypuff',
  'Oddish',
  'Meowth',
  'Pikachu',
  'Diglett',
].map(pokemon => ({
  id: uuidv4(),
  pokemon,
}));

class App extends Component {
  state = {
    selectedPokemons: ['Pikachu'],
  }

  renderTitle = () => {
    const { selectedPokemons } = this.state;

    switch (selectedPokemons.length) {
      case 0:
        return `SELECT POKEMON`;
      case 1:
        return `${selectedPokemons[0]} is selected`;
      default:
        return `${selectedPokemons.slice(0, -1).join(', ')} and
          ${selectedPokemons.slice(-1)} are selected`;
    }
  }

  addPokemons = (pokemon) => {
    this.setState(prevState => ({
      selectedPokemons: [...prevState.selectedPokemons, pokemon],
    }));
  }

  removePokemons = (pokemon) => {
    this.setState(prevState => ({
      selectedPokemons: prevState.selectedPokemons.filter(
        selectedPokemon => selectedPokemon !== pokemon,
      ),
    }));
  }

  resetSelectedPokemons = () => this.setState({ selectedPokemons: [] })

  render() {
    return (
      <div className="app">
        <h1 className="title">{this.renderTitle()}</h1>

        <button
          type="button"
          className="button-reset"
          onClick={this.resetSelectedPokemons}
          disabled={!this.state.selectedPokemons.length}
        >
          New round
        </button>

        <ul className="pokemons-list">
          {pokemonsFromServer.map(pokemon => (
            <li
              key={pokemon.id}
              className="pokemon"
            >
              <p>
                {pokemon.pokemon}
                <span
                  className={
                    this.state.selectedPokemons.includes(pokemon.pokemon)
                      ? 'show' : 'hide'}
                >
                  {'! '}
                  &nbsp;&nbsp;I choose you!
                </span>
              </p>

              <button
                type="button"
                className="button"
                onClick={() => (
                  this.state.selectedPokemons.includes(pokemon.pokemon)
                    ? this.removePokemons(pokemon.pokemon)
                    : this.addPokemons(pokemon.pokemon)
                )}
              >
                <img
                  className="img"
                  src={this.state.selectedPokemons.includes(pokemon.pokemon)
                    ? ob : b}
                  alt="ball"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
