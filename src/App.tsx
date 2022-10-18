import { Component, MouseEvent } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
  { name: 'Dumplings', id: 1 },
  { name: 'Carrot', id: 2 },
  { name: 'Eggs', id: 3 },
  { name: 'Ice cream', id: 4 },
  { name: 'Apple', id: 5 },
  { name: 'Bread', id: 6 },
  { name: 'Fish', id: 7 },
  { name: 'Honey', id: 8 },
  { name: 'Jam', id: 9 },
  { name: 'Garlic', id: 10 },
];

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeOnClick = () => {
    this.setState({ selectedGood: '' });
  };

  addOnClick = (_event: MouseEvent<HTMLButtonElement>, good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeOnClick}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(({ name, id }) => {
              const isSelected = name === selectedGood;

              return (
                <tr
                  key={id}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-info': isSelected,
                        },
                      )}
                      onClick={isSelected
                        ? this.removeOnClick
                        : (event) => {
                          this.addOnClick(event, name);
                        }}
                    >
                      {isSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {name}
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
