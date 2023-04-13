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
  selectedGood: string | null;
};

export class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  isSelected = true;

  handleClick = (good: string | null) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: good === selectedGood ? null : good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.handleClick(null);
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              this.isSelected = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames('', {
                    'has-background-success-light': this.isSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={this.isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'button is-info': this.isSelected,
                      })}
                      onClick={() => {
                        this.handleClick(good);
                      }}
                    >
                      {this.isSelected ? '-' : '+'}
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
