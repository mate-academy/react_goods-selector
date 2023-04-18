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
  selected: string | null;
};
export class App extends Component<{}, State> {
  state = {
    selected: 'Jam',
  };

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {/* <h1 className="title">No goods selected</h1> */}

        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selected} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selected: null });
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(selectedGood => (
              <tr
                data-cy="Good"
                className={selected === selectedGood
                  ? 'has-background-success-light' : ''}
                key={selectedGood}
              >
                <td>
                  <button
                    data-cy={selected === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={selected === selectedGood
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => {
                      this.setState({
                        selected: selected === selectedGood
                          ? null
                          : selectedGood,
                      });
                    }}
                  >
                    {selected === selectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {selectedGood}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
