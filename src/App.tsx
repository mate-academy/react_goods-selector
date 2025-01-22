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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleDeleteClick = () => {
    this.setState({
      selectedGood: '',
    });
  };

  handleGoodsClick = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length !== 0 ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleDeleteClick}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames({
                    'has-background-success-light': selectedGood === good,
                  })}
                >
                  <td>
                    <button
                      data-cy={
                        good === selectedGood ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={
                        good === selectedGood ? 'button is-info' : 'button'
                      }
                      onClick={
                        good === selectedGood
                          ? this.handleDeleteClick
                          : () => this.handleGoodsClick(good)
                      }
                    >
                      {good === selectedGood ? '-' : '+'}
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
