import React from 'react';
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
  selected: string;
  id: number
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selected: 'No goods selected',
    id: -1,
  };

  render() {
    const { selected, id } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {selected}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              this.setState({
                selected: 'No goods selected',
                id: -1,
              });
            }}
          />
        </h1>

        <table className="table">
          <tbody>
            {
              goods.map((product, index) => {
                const handleClick = () => {
                  if (id === index) {
                    this.setState({
                      selected: 'No goods selected',
                      id: -1,
                    });
                  } else {
                    this.setState({
                      selected: `${product} is selected`,
                      id: index,
                    });
                  }
                };

                return (
                  <tr data-cy="Good" className="has-background-success-light">
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className={index === id ? 'button is-info' : 'button'}
                        onClick={handleClick}
                      >
                        {index === id ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {product}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
