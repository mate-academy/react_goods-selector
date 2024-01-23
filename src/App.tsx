import { Component } from 'react';
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

interface State {
  selectedGood: string,
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeSelection = () => (
    this.setState({ selectedGood: '' })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames('title',
          { 'is-flex is-align-items-center': selectedGood })}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected` }
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeSelection}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              const bgForSelectedGood = {
                'has-background-success-light': isSelected,
              };

              const handleSelection = () => (
                isSelected
                  ? this.setState({ selectedGood: '' })
                  : this.setState({ selectedGood: good })
              );

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(bgForSelectedGood)}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': isSelected },
                      )}
                      onClick={handleSelection}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
