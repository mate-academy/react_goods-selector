import React from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGoods: string[],
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getListInformation = () => {
    const { selectedGoods } = this.state;
    const listCopy = [...selectedGoods];

    const lastGood = listCopy.pop();

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods.join(' and ')} are selected`;
      default:
        return `${listCopy.join(', ')} and ${lastGood} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App_title box title">{this.getListInformation()}</h1>

        <div className="App_box box">
          {!!this.state.selectedGoods.length && (
            <button
              type="button"
              className="button is-danger is-outlined"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              X
            </button>
          )}
          <ul className="App_list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={classNames(
                  'App_list-item box',
                  {
                    'has-background-primary-light': this.state.selectedGoods.includes(good),
                  },
                )}
              >
                {good}
                {' '}
                {this.state.selectedGoods.includes(good) ? (
                  <button
                    type="button"
                    className="button is-danger is-outlined"
                    onClick={() => this.setState(({ selectedGoods }) => ({
                      selectedGoods: selectedGoods.filter(el => el !== good),
                    }))}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-primary is-outlined"
                    onClick={() => this.setState(({ selectedGoods }) => ({
                      selectedGoods: [...selectedGoods, good],
                    }))}
                  >
                    Add
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
