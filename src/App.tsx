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
        <h1 className={cn(
          'title',
          { 'is-flex': selectGood },
          { 'is-align-items-center': selectGood },
        )}
        >
          {selectGood
            ? `${selectGood} is selected`
            : 'No goods selected'}

          {selectGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState(removeGood);
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={cn(classGood(selectGood, good))}
              >
                <td>
                  <button
                    data-cy={selectGood === good
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn(
                      'button',
                      { 'is-info': selectGood === good },
                    )}
                    onClick={selectGood === good
                      ? removeGood
                      : () => addGood(good)}
                  >
                    {selectGood === good
                      ? '-'
                      : '+'}
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
    );
  }
}
