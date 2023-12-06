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

export class App extends Component {
  state = {
    selected: 'Jam',
  };

  clearItem = () => {
    this.setState({ selected: '' });
  }

  selectItem = (itemName: string) => {
    return () => this.setState({ selected: itemName });
  }

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {selected ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selected} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearItem}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((item) => (
              <tr
                data-cy="Good"
                key={item}
                className={
                  item === selected ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={item === selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${item === selected ? 'is-info' : ''}`}
                    onClick={
                      item === selected
                        ? this.clearItem
                        : this.selectItem(item)
                    }
                  >
                    {item === selected ? '-' : '+'}
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
