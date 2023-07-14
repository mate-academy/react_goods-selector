import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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

type AppState = {
  selectedGood: string,
};

export class App extends React.Component<{}, AppState> {
  state = {
    selectedGood: goods[goods.indexOf('Jam')] || goods[0],
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <main className="section container">
          {selectedGood ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            </h1>
          ) : <h1 className="title">No goods selected</h1>}

          <table className="table">
            <tbody>
              {goods.map(good => (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': good === selectedGood,
                  })}
                >
                  <td>
                    <button
                      data-cy={
                        !(selectedGood === good) ? 'AddButton' : 'RemoveButton'
                      }
                      type="button"
                      className={classNames('button', {
                        'is-info': selectedGood === good,
                      })}
                      onClick={() => this.setState({
                        selectedGood: (selectedGood === good) ? '' : good,
                      })}
                    >
                      {selectedGood === good ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}
