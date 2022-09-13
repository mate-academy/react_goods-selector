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
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam'
  }

  render() {
    const {selectedGood} = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
          <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({selectedGood: ''})}
            />
          </h1>
        ) :
          <h1 className="title">No goods selected</h1>
        }

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
            data-cy="Good"
            className={
              selectedGood === good
                ? 'has-background-success-light'
                : ''
            }
            >
              <td>
                <button
                  data-cy={
                    selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    selectedGood === good
                      ? 'button is-info'
                      : 'button'
                  }
                  onClick={() => {
                    selectedGood === good
                      ? this.setState({selectedGood: ''})
                      : this.setState({selectedGood: good})
                  }}
                >
                  {selectedGood === good
                    ? '-'
                    : '+'
                  }
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
    )
  }
};
