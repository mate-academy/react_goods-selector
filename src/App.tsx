import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  infoString: string;
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    infoString: 'No goods selected',
    selectedGood: '',
  };

  componentDidMount() {
    this.setState({
      infoString: 'Jam is selected',
      selectedGood: 'Jam',
    });
  }

  render() {
    const { infoString, selectedGood } = this.state;

    return (
      <div className="App">
        <div className="info">
          <h1>{infoString}</h1>
        </div>
        <button
          type="button"
          className={
            classNames(
              'button-hidden',
              { 'button-visible': (selectedGood.length !== 0) },
            )
          }
          onClick={() => {
            this.setState({
              infoString: 'No goods selected',
              selectedGood: '',
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
                    { 'good-bg': selectedGood === good },
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
                    { 'button-hidden': selectedGood === good },
                  )
                }
                onClick={() => {
                  this.setState({
                    infoString: `${good} is selected`,
                    selectedGood: good,
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
