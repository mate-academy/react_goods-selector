/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
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

type Props = {
  goods: string[];
};

type State = {
  selectedGoods: string;
};

export class App extends React.Component<Props, State> {
  state = {
    selectedGoods: 'Jam',
  };

  clear = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({
      selectedGoods: '',
    });
  };

  select = (event: React.MouseEvent, item: string) => {
    event.preventDefault();
    this.setState({
      selectedGoods: item,
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const isSelected = (item: string) => item === selectedGoods;

    return (
      <main className="section container">

        {!selectedGoods ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <>
            <h1 className="title is-flex is-align-items-center">
              {selectedGoods}
              {' '}
              is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clear}
              />
            </h1>
          </>
        )}

        <table className="table">
          <tbody>

            {this.props.goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={isSelected(item)
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected(item) ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.clear}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={(event) => this.select(event, item)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </main>
    );
  }
}
