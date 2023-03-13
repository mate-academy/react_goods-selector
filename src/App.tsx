import React, { Component } from 'react';
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

type BtnProps = {
  dataCy: string,
  content: string,
  classes?: string[],
  handler: () => void
};

const GoodsButton: React.FC<BtnProps> = (
  {
    dataCy,
    content,
    handler,
    classes = [],
  },
) => (
  <button
    data-cy={dataCy}
    type="button"
    className={classNames(...classes)}
    onClick={() => handler()}
  >
    {content}
  </button>
);

GoodsButton.defaultProps = {
  classes: ['button'],
};

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleAdd = (good: string) => {
    this.setState(
      {
        selectedGood: good,
      },
    );
  };

  handleRemove = () => {
    this.setState(
      {
        selectedGood: '',
      },
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                <GoodsButton
                  dataCy="ClearButton"
                  content=""
                  classes={['delete', 'ml-3']}
                  handler={this.handleRemove}
                />
              </h1>
            )
            : (<h1 className="title">No goods selected</h1>)
        }

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': good === selectedGood,
                  },
                )}
              >
                <td>
                  {
                    good === selectedGood
                      ? (
                        <GoodsButton
                          dataCy="RemoveButton"
                          content="-"
                          classes={['button', 'is-info']}
                          handler={this.handleRemove}
                        />
                      )
                      : (
                        <GoodsButton
                          dataCy="AddButton"
                          content="+"
                          handler={() => this.handleAdd(good)}
                        />
                      )
                  }
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
