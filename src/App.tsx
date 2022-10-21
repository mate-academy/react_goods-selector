import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { uuid } from 'uuidv4';

type Goods = string[];
type State = {
  selectedGood: string;
};

export const goods: Goods = [
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    function isSelected(good: string) {
      return selectedGood === good;
    }

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex is-align-items-center': selectedGood },
        )}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeGood}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={uuid()}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected(good),
                })}
              >
                <td>
                  <button
                    data-cy={isSelected(good)
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': isSelected(good) },
                    )}
                    onClick={isSelected(good)
                      ? this.removeGood
                      : () => this.addGood(good)}
                  >
                    {isSelected(good)
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
