import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

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
  selectedGood: string,
  visibleTitle: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
    visibleTitle: true,
  };

  clickHandler = (product: string) => {
    this.setState({
      selectedGood: product,
      visibleTitle: true,
    });
  };

  clear = () => {
    this.setState({
      selectedGood: '',
      visibleTitle: false,
    });
  };

  render() {
    const { selectedGood, visibleTitle } = this.state;

    return (
      <div className="app content">
        {visibleTitle && (
          <h1 className="title is-1">
            {selectedGood
              ? `${selectedGood} is/are selected`
              : 'No goods selected'}
          </h1>
        )}
        {visibleTitle && (
          <button
            type="button"
            onClick={this.clear}
            className="delete is-medium"
          >
            X
          </button>
        )}

        <ul>
          {goodsFromServer.map(product => (
            <li key={product} className={classNames('app__good', { app__selected: selectedGood === product })}>
              {product}
              {selectedGood !== product && (
                <button
                  className="button is-success is-outlined"
                  type="button"
                  onClick={() => (
                    this.clickHandler(product)
                  )}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
