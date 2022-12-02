import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

type State = {
  selectedGood: string,
  currentTitle: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    currentTitle: 'Jam is selected',
  };

  render() {
    const { selectedGood, currentTitle } = this.state;

    const alterTitle = () => {
      this.setState({
        selectedGood: '',
        currentTitle: 'No goods selected',
      });
    };

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {currentTitle}
          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                alterTitle();
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames('', {
                  'has-background-success-light': good === selectedGood,
                })}
              >
                {selectedGood !== good ? (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState({
                          selectedGood: good,
                          currentTitle: `${good} is selected`,
                        });
                      }}
                    >
                      +
                    </button>
                  </td>
                )
                  : (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          alterTitle();
                        }}
                      >
                        -
                      </button>
                    </td>
                  )}

                <td data-cy="GoodTitle" className="is-vcentered ">
                  {good}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </main>
    );
  }
}
