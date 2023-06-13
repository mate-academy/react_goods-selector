import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClickAddButton = (item: string) => (
    this.setState({ selectedGood: item })
  );

  handleClickRemoveButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {(selectedGood)
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.handleClickRemoveButton()}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(item => {
              const isSelected = selectedGood === item;

              return (
                <tr
                  data-cy="Good"
                  key={item}
                  className={cn(
                    (isSelected && 'has-background-success-light'),
                  )}
                >
                  <td>
                    <button
                      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={cn('button',
                        ((isSelected && 'is-info')))}
                      onClick={(isSelected)
                        ? (() => this.handleClickRemoveButton())
                        : (() => this.handleClickAddButton(item))}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
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
