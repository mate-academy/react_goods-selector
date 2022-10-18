import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  selectedGood: string;
  title: string;
};

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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    title: '',
  };

  addItem = (item: string) => {
    this.setState({
      selectedGood: item,
      title: '',
    });
  };

  removeItem = () => {
    this.setState({
      selectedGood: '',
      title: 'No goods selected',
    });
  };

  render() {
    const { selectedGood, title } = this.state;

    return (
      <main className="section container">
        {title ? (
          <h1 className="title">{title}</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.removeItem}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((item: string, index: number) => (
              <tr
                data-cy="Good"
                key={item + String(index)}
                className={
                  selectedGood === item
                    ? 'has-background-success-light'
                    : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === item
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={`button ${
                      selectedGood === item
                        ? 'is-info'
                        : ''
                    }`}
                    onClick={() => {
                      return selectedGood === item
                        ? this.removeItem()
                        : this.addItem(item);
                    }}
                  >
                    {selectedGood === item
                      ? '-'
                      : '+'}
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
