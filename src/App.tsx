import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  selectedGoods: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App box">
        <h1>
          {selectedGoods.join(', ')}
          {' '}
          is selected
          {' '}

          <button
            type="button"
            onClick={() => {
              selectedGoods.length = 0;
              this.setState({ selectedGoods });
            }}
          >
            Clear
          </button>
        </h1>
        {goodsFromServer.length}
        <hr />
        <br />
        <ul>
          {
            goodsFromServer.map(item => (
              <>
                <label className="ListItem">
                  <li>{item}</li>
                  <button
                    type="button"
                    onClick={() => {
                      if (!selectedGoods.includes(item)) {
                        selectedGoods.push(item);
                        this.setState({ selectedGoods });
                      }
                    }}
                  >
                    Select
                  </button>
                </label>
              </>
            ))
          }
        </ul>
      </div>
    );
  }
}
