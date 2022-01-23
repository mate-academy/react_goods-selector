import React from 'react';
import './App.scss';
import classNames from 'classnames';
// import { render } from 'react-dom';

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
  isGoodSelected: boolean;
  infoString: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isGoodSelected: false,
    infoString: 'No goods selected',
  };

  render() {
    const { isGoodSelected } = this.state;
    const { infoString } = this.state;

    return (
      <div className="App">
        <h1 className="info">{infoString}</h1>
        <button
          type="button"
          className={
            classNames(
              'button-hidden',
              { 'button-visible': isGoodSelected },
            )
          }
          onClick={() => {
            this.setState({
              isGoodSelected: !isGoodSelected,
              infoString: '',
            });
          }}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={
                  classNames(
                    'good',
                    { 'good-bg': isGoodSelected },
                  )
                }
              >
                {good}
              </li>
              <button
                type="button"
                className={
                  classNames(
                    'button',
                    { 'button-hidden': isGoodSelected },
                  )
                }
                onClick={() => {
                  this.setState({
                    isGoodSelected: !isGoodSelected,
                    infoString: `${good} is selected`,
                  });
                }}
              >
                Select
              </button>
              <br />
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
