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

  handleClick = (item: string) => {
    this.setState({ selectedGood: item });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>

                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.handleClick('')}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleClick(good)}

                      >
                        +
                      </button>
                    )}
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

/*
import { Component } from 'react';
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
  selectedGood: string[];
  selectGoodIndex: number;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: goods,
    selectGoodIndex: 8,
  };

  componentDidMount() {

  }

  render() {
    const { selectedGood, selectGoodIndex } = this.state;

    const selectItem = (i: number, target: EventTarget & HTMLButtonElement) => {
      this.setState({
        selectGoodIndex: i,
      });
      target.classList.add('is-info');
      target.setAttribute('data-cy', 'RemoveButton');
    };

    return (
      <main className="section container">

        {selectGoodIndex === -1
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood[selectGoodIndex]}
              {' '}
              is selected

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectGoodIndex: -1 });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {selectedGood.map((good, i) => (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(event) => {
                      const { currentTarget } = event;

                      selectItem(i, currentTarget);
                    }}
                  >
                    +
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

*/
