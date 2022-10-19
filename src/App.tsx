import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods = [
  {
    name: 'Dumplings',
    id: 1,
  },
  {
    name: 'Carrot',
    id: 2,
  },
  {
    name: 'Eggs',
    id: 3,
  },
  {
    name: 'Ice cream',
    id: 4,
  },
  {
    name: 'Apple',
    id: 5,
  },
  {
    name: 'Bread',
    id: 6,
  },
  {
    name: 'Fish',
    id: 7,
  },
  {
    name: 'Honey',
    id: 8,
  },
  {
    name: 'Jam',
    id: 9,
  },
  {
    name: 'Garlic',
    id: 10,
  },
];

interface Good {
  name: string,
  id: number,
}

type State = {
  selectedGood: string;

};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const {
      selectedGood,
    } = this.state;

    function isGoodSelected(good: Good) {
      return selectedGood === good.name;
    }

    const buttonHandler = (good: Good) => {
      if (isGoodSelected(good)) {
        this.setState({ selectedGood: '' });
      } else {
        this.setState({ selectedGood: good.name });
      }
    };

    return (
      <main className="section container">
        <h1 className={!selectedGood
          ? 'title'
          : 'title is-flex is-align-items-center'}
        >
          {selectedGood === ''
            ? 'No goods selected'
            : (
              <>
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearSelectedGood}
                />
              </>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  classNames(
                    {
                      'has-background-success-light':
                      isGoodSelected(good),
                    },
                  )
                }
                key={good.id}
              >
                <td>
                  <button
                    data-cy={isGoodSelected(good)
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={
                      classNames('button',
                        { 'is-info': isGoodSelected(good) })
                    }
                    onClick={() => buttonHandler(good)}
                  >
                    {isGoodSelected(good)
                      ? '-'
                      : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
