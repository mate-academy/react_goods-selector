import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  selectedGood: string;
};

type Props = {};

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

export class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  handelClick = (good: string) => {
    if (good === this.state.selectedGood) {
      this.clearSelection();
    } else {
      this.selectGood(good);
    }
  }

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood !== '' ? (
            <>
              {this.state.selectedGood} is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearSelection}
              />
            </>
          ) : (
            'No goods selected'
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    good === this.state.selectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        good === this.state.selectedGood
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        good === this.state.selectedGood
                          ? 'button is-info'
                          : 'button'
                      }
                      onClick={() => this.handelClick(good)}
                    >
                      {good === this.state.selectedGood ? '-' : '+'}
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
