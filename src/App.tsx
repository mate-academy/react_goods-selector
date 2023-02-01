import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
//

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

const preparedGoods = goods.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

interface States {
  selectedGood: string;
}

export class App extends Component<{}, States> {
  state = {
    selectedGood: 'Jam',
  };

  select = (good: string) => {
    if (good === this.state.selectedGood) {
      this.setState({
        selectedGood: '',
      });

      return;
    }

    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;
    let title = (<h1 className="title">No goods selected</h1>);

    if (selectedGood) {
      title = (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      );
    }

    return (
      <main className="section container">

        {title}

        <table className="table">
          <tbody>
            {preparedGoods.map(good => {
              if (good.name === selectedGood) {
                return (
                  <tr
                    data-cy="Good"
                    className="has-background-success-light"
                    key={good.id}
                  >
                    <td>
                      <button
                        onClick={() => {
                          this.select(good.name);
                        }}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good.name}
                    </td>
                  </tr>
                );
              }

              return (
                <tr data-cy="Good" key={good.id}>
                  <td>
                    <button
                      onClick={() => {
                        this.select(good.name);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good.name}
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
