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
}

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleSelect = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };
  handleRemove = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;
    return (
      <main className="section container">
        {selectedGood
          ? (<h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
      
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleRemove}
            />
          </h1>)
        : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelected = good === selectedGood;
              return (
                <tr 
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                    })}
                  key = {good}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleRemove}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => (
                          this.handleSelect(good)
                        )}
                        >
                          +
                        </button>
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )})}
          </tbody>
        </table>
      </main>
    );
  }
}
