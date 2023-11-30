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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addGoodHandler = (element: string) => {
    this.setState({ selectedGood: element });
  }

  removeGoodHandler = () => {
    this.setState({ selectedGood: '' });
  }

  render() {
    return (
      <main className="section container">
        {this.state.selectedGood.length > 0
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeGoodHandler}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>) }

        <table className="table">
          <tbody>
            {goods.map((element => (
              <tr
                data-cy="Good"
                key={element}
                className={this.state.selectedGood === element
                  ? ('has-background-success-light') : ('')}
              >
                <td>
                  {this.state.selectedGood === element
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.removeGoodHandler}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={
                          () => this.addGoodHandler(element)
                        }
                      >
                        +
                      </button>
                    ) }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {element}
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </main>
    );
  }
}

/*
export const App: React.FC = () => (
  <main className="section container">
    <h1 className="title">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected

      //{ eslint-disable-next-line jsx-a11y/control-has-associated-label }
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>

    <table className="table">
      <tbody>
        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr>
      </tbody>
    </table>
  </main>
);
*/
