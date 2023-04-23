import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

type Good = string;

interface State {
  selected: string;
}

export const goods: Good[] = [
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
  state: State = {
    selected: 'Jam',
  };

  handleButton = (item: string) => () => {
    this.setState({ selected: item });
  };

  handleRemoveButton = () => () => {
    this.setState({ selected: '' });
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selected
            ? `${this.state.selected} is selected`
            : 'No goods selected'}

          {this.state.selected && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemoveButton()}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((item: string) => {
              const isSelected = this.state.selected === item;

              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleRemoveButton()}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={this.handleButton(item)}
                      >
                        +
                      </button>
                    )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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

export default App;
