import React from 'react';
import './App.scss';

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
    goodsStatus: goodsFromServer.map(prod => ({
      value: prod,
      isSelected: false,
    })),

    selected: [],
  }

  render() {
    const { goodsStatus, selected } = this.state;

    const changeProdStat = (product, stat) => {
      // eslint-disable-next-line no-param-reassign
      product.isSelected = stat;
      this.setState({
        selected: goodsStatus.filter(
          prod => prod.isSelected,
        ).map(
          ({ value }) => value,
        ),
      });
    };

    const chooseNeme = () => {
      switch (selected.length) {
        case 0:
          return 'No goods selected';
        case 1:
          return `${selected[0]} is selected`;
        default:
          return `${selected.join(', ')} are selected`;
      }
    };

    return (
      <div className="App">
        <h1>
          { chooseNeme() }
        </h1>
        {goodsFromServer.length}

        <ul>
          {goodsStatus.map(product => (
            <li>
              { product.value }
              { product.isSelected ? (
                <button
                  type="button"
                  onClick={() => changeProdStat(product, false)}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => changeProdStat(product, true)}
                >
                  Add
                </button>
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
