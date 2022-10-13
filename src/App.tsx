import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  selectGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectGood: good });
  };

  removeGood = () => {
    this.setState({ selectGood: '' });
  };

  classGood = (selectGood: string, good: string) => (
    selectGood === good && 'has-background-success-light'
  );

  render() {
    const { selectGood } = this.state;
    const {
      addGood,
      removeGood,
      classGood,
    } = this;

    return (
      <main className="section container">
        {selectGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState(removeGood);
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={cn(classGood(selectGood, good))}
              >
                <td>
                  {selectGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={removeGood}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => addGood(good)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
