import React from 'react';
import './App.scss';
import { Button } from './Button';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  addSelection = (product) => {
    this.setState({ selectedGood: product });
  }

  removeSelection =() => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            {
            selectedGood
              ? `${selectedGood} is selected`
              : `No goods selected`
            }
            {
            selectedGood && (
            <Button
              callback={this.removeSelection}
              text="X"
            />
            )
            }
          </h1>
        </div>

        <ul className="list">
          {goodsFromServer.map(product => (
            <li key={product}>
              <span className={
                selectedGood === product ? 'active' : ''
                }
              >
                {product}
              </span>
              {' '}
              {
              selectedGood !== product
              && (
                <Button
                  callback={() => this.addSelection(product)}
                  text="Select"
                />
              )
            }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
