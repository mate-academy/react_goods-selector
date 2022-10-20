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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  cancelSelection = () => {
    this.setState({
      selectedGood: '',
    });
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames('title', {
          'is-flex': selectedGood,
          'is-align-items-center': selectedGood,
        })}
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
                  onClick={this.cancelSelection}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good, i) => {
              const isSelectedGood = selectedGood === good;
              const slug = `${i}-${good}`;

              return (
                <tr
                  key={slug}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelectedGood,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelectedGood
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': isSelectedGood,
                      })}
                      onClick={isSelectedGood
                        ? this.cancelSelection
                        : () => this.selectGood(good)}
                    >
                      {isSelectedGood ? '-' : '+'}
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
