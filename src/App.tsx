import { Component } from 'react';
import classNames from 'classnames';
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

  handleItem = (item: string) => {
    const { selectedGood } = this.state;

    if (selectedGood === item) {
      this.removeItem();
    } else {
      this.addItem(item);
    }
  }

  render() {
    const { selectedGood, title } = this.state;

    function isItemSelected(item: string) {
      return selectedGood === item;
    }

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
                className={classNames({
                  'has-background-success-light': isItemSelected(item),
                })}
              >
                <td>
                  <button
                    data-cy={
                      isItemSelected(item)
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': isItemSelected(item),
                      },
                    )}
                    onClick={() => this.handleItem(item)}
                  >
                    {isItemSelected(item)
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
