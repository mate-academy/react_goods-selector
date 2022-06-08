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
  message: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    message: 'is selected',
  };

  render() {
    const { selectedGoods, message } = this.state;

    return (
      <div className="App box">
        <h1>
          {selectedGoods.join(', ')}
          {' '}
          {message}
          {' '}

          <button
            type="button"
            onClick={() => {
              selectedGoods.length = 0;
              this.setState({
                selectedGoods,
                message: 'No goods are selected',
              });
            }}
          >
            Clear
          </button>
        </h1>
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
                        this.setState({
                          selectedGoods,
                          message: 'are selected',
                        });
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
