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

type State = {
  selectedGoods: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  handleClick = (goodTitle: string) => {
    if (this.state.selectedGoods === goodTitle) {
      this.setState({ selectedGoods: null });
    } else {
      this.setState({ selectedGoods: goodTitle });
    }
  };

  handleClearButton = () => {
    this.setState({ selectedGoods: null });
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedGoods ? (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGoods} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearButton}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(goodTitle => {
              const isSelected = this.state.selectedGoods === goodTitle;

              return (
                <tr
                  key={goodTitle}
                  data-cy="Good"
                  className={
                    isSelected ? 'has-background-success-light' : undefined
                  }
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={isSelected ? 'button is-info' : 'button'}
                      onClick={() => this.handleClick(goodTitle)}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {goodTitle}
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
