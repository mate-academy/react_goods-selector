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
  selectedItem: string
  title: string
};

export class App extends Component<{}, State> {
  state = {
    selectedItem: 'Jam',
    title: 'Jam is selected',
  };

  noItemsMessage = 'No goods selected';

  selectButtonHandler = (isSelected: boolean, item: string) => {
    this.setState(() => {
      return isSelected
        ? {
          selectedItem: '',
          title: this.noItemsMessage,
        }
        : {
          selectedItem: item,
          title: `${item} is selected`,
        };
    });
  };

  render() {
    const {
      selectedItem,
      title,
    } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {title}

          {selectedItem && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({
                  selectedItem: '',
                  title: this.noItemsMessage,
                });
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => {
              const selected = selectedItem === item;

              return (
                <tr
                  data-cy="Good"
                  key={item}
                  className={classNames(
                    { 'has-background-success-light': selected },
                  )}
                >
                  <td>
                    <button
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': selected },
                      )}
                      data-cy={selected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      onClick={() => this.selectButtonHandler(selected, item)}
                    >
                      {selected
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td
                    className="is-vcentered"
                    data-cy="GoodTitle"
                  >
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
