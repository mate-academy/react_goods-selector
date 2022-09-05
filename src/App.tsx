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

type Props = {
  goodsList: string[],
};

type State = {
  selectedGood: string,
};

export class App extends Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { goodsList } = this.props;
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {
            selectedGood
              ? `${selectedGood} is selected`
              : <h1 className="title">No goods selected</h1>
          }

          {
            selectedGood && (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedGood: '' })}
              />
            )
          }
        </h1>

        <table className="table">
          <tbody>
            {goodsList.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={
                  (good === selectedGood)
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
                    className={
                      selectedGood === good
                        ? 'button is-info'
                        : 'button'
                    }
                    type="button"
                    onClick={() => (
                      selectedGood === good
                        ? this.setState({ selectedGood: '' })
                        : this.setState({ selectedGood: good })
                    )}
                  >
                    {selectedGood === good ? '-' : '+'}
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
