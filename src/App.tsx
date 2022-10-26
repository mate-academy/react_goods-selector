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

// interface Good {
//   name: string,
//   id:number,
// }

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good:string) => {
    this.setState({ selectedGood: good });
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames('title', {
            'is-flex': selectedGood,
            'is-align-items-center': selectedGood,
          })}
        >
          {!selectedGood ? (
            'No goods selected'
          ) : (
            <>
              {`${selectedGood} is selected`}
              <button
                aria-label="Select good"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelectedGood}
              />
            </>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const goodIsSelected = good === selectedGood;
              const removeOrAdd = goodIsSelected ? 'RemoveButton' : 'AddButton';

              return (
                <>
                  <tr
                    key={good}
                    data-cy="Good"
                    className={classNames({
                      'has-background-success-light': goodIsSelected,
                    })}
                  >
                    <td>
                      <button
                        data-cy={removeOrAdd}
                        type="button"
                        className={classNames('button', {
                          'is-info': goodIsSelected,
                        })}
                        onClick={goodIsSelected
                          ? this.removeSelectedGood
                          : () => {
                            this.selectGood(good);
                          }}
                      >
                        {goodIsSelected
                          ? '-'
                          : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
