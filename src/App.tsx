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
  activeGood: boolean;
};

type Props = {
  goods: string[];
};

export class App extends React.Component< Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    activeGood: true,
  };

  indexGood = goods.indexOf('Jam');

  handleClick = (good: string) => {
    this.indexGood = this.props.goods.indexOf(good);
    this.setState({
      selectedGood: good,
      activeGood: true,
    });
  };

  handleClickClear = () => {
    this.indexGood = -1;
    this.setState({
      selectedGood: '',
      activeGood: false,
    });
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { selectedGood, activeGood } = this.state;

    return (
      <main className="section container">
        {(activeGood === true)
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                aria-label="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClickClear}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <table className="table">
          <tbody>
            {this.props.goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light':
                    this.props.goods.indexOf(good) === this.indexGood,
                })}
              >
                <td>
                  {(this.indexGood !== this.props.goods.indexOf(good))
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.handleClick(good);
                        }}
                      >
                        +
                      </button>
                    )

                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleClickClear}
                      >
                        -
                      </button>
                    )}

                </td>
                <td
                  data-cy="GoodTitle"
                  key={good}
                  className="is-vcentered"
                >
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
