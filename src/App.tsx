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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const title = selectedGood;

    return (
      <div className="container">
        <h1 className="text-center">
          {
            title === ''
              ? 'No goods selected'
              : `${title} is selected`
          }
        </h1>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className={classNames(`
            btn
            btn-danger`,
            { invisible: !selectedGood })}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            X
          </button>
        </div>

        <div>
          {goodsFromServer.map(good => (
            <div className={classNames(`
            d-flex 
            justify-content-between`,
            { active: good === title })}
            >
              {good}

              <button
                type="button"
                className={classNames(`
                btn 
                btn-dark`,
                { invisible: good === selectedGood })}
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
