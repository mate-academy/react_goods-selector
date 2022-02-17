import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice-cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    name: 'Jam',
  };

  selected = (good: string) => {
    this.setState({ name: good });
  };

  unselected = () => {
    this.setState({ name: '' });
  };

  render(): React.ReactNode {
    const { goods, name } = this.state;

    return (
      <div className="App">
        <div className="display display__title">
          <h1>{name ? `${name} is selected` : 'No goods selected'}</h1>

          <button
            type="button"
            onClick={this.unselected}
            hidden={name === ''}
          >
            X
          </button>
        </div>
        <ul>
          {goods.map(good => (
            <div className="display">
              <li id={(name === good) ? good : ''}>{good}</li>

              <button
                type="button"
                onClick={() => this.selected(good)}
                hidden={name === good}
              >
                {`Select ${good}`}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
