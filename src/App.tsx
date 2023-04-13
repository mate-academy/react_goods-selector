import React from 'react';
import classNames from 'classnames';
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
  selectedValue: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedValue: 'Jam',
  };

  clearValue = () => {
    this.setState({ selectedValue: '' });
  };

  selectValue = (value: string) => {
    this.setState({ selectedValue: value });
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedValue
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedValue} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearValue}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light':
                    item === this.state.selectedValue,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={
                      item === this.state.selectedValue
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': item === this.state.selectedValue,
                    })}
                    onClick={(event) => {
                      if (event.currentTarget.dataset.cy === 'AddButton') {
                        this.selectValue(item);
                      } else {
                        this.clearValue();
                      }
                    }}
                  >
                    {item === this.state.selectedValue
                      ? '+'
                      : '-'}
                  </button>
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
