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
  selected: string | null;
};
export class App extends Component<{}, State> {
  state = {
    selected: 'Jam',
  };

  handleSelect = (good: string) => {
    this.setState({ selected: good });
  };

  handleClear = () => {
    this.setState({ selected: '' });
  };

  render() {
    const { selected } = this.state;
    const { handleSelect, handleClear } = this;

    return (
      <main className="section container">

        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selected} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleClear}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(selectedGood => {
              const isGoodSelected = selected === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isGoodSelected,
                  })}
                  key={selectedGood}
                >
                  <td>
                    <button
                      data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': isGoodSelected,
                      })}
                      onClick={() => (
                        isGoodSelected
                          ? handleClear()
                          : handleSelect(selectedGood)
                      )}
                    >
                      {isGoodSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {selectedGood}
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
