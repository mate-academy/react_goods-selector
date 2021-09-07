import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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

    return (
      <div className="w-25 mx-auto">
        <h1 className="text-center display-6">
          {
            selectedGood === ''
              ? 'No goods selected'
              : `${selectedGood} is selected`
          }
        </h1>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className={classNames(`
            btn
            btn-secondary
            my-1 
            mx-4`,
            { invisible: !selectedGood })}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            X
          </button>
        </div>

        <ul className="list-group">
          {goodsFromServer.map(good => (
            <li className={classNames(`
            list-group-item 
            d-flex 
            justify-content-between
            align-items-center`,
            { active: good === selectedGood })}
            >
              {good}

              <button
                type="button"
                className={classNames(`
                btn 
                btn-secondary`,
                { invisible: good === selectedGood })}
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
              >
                Select
              </button>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
