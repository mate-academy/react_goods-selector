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

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  resetSelector = () => {
    this.setState({ selectedGood: '' });
  };

  resetButton = (good: string, selectedGood: string) => (
    selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good })
  );

  render() {
    const { selectedGood } = this.state;

    const handleClick = () => {
      this.setState({ selectedGood: '' });
    };

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClick}
            />
          )}
        </h1>
        <table className="table">
          {goods.map((good) => (
            <tr
              data-cy="Good"
              className={
                classNames('',
                  {
                    'has-background-success-light': good === selectedGood,
                  })
              }
            >

              <td>
                <button
                  data-cy={
                    good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    classNames('button',
                      { 'button is-info': good === selectedGood })
                  }
                  onClick={() => (
                    good === selectedGood
                      ? this.setState({ selectedGood: '' })
                      : this.setState({ selectedGood: good })
                  )}
                >
                  {selectedGood === good
                    ? '-'
                    : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </table>
      </main>
    );
  }
}
