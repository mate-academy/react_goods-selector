/* eslint-disable jsx-a11y/control-has-associated-label */

import { Component, FC, ReactNode } from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

const goods = [
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

type State = { selectedGood: string };
type GoodProps = { good: string };
type ButtonProps = {
  isSelected: boolean,
  setSelected: () => void
};

export class App extends Component<{}, State> {
  state = { selectedGood: 'Jam' };

  Good: FC<GoodProps> = ({ good }) => {
    const { selectedGood } = this.state;
    const isSelected = good === selectedGood;

    const setSelected = () => (
      this.setState({
        selectedGood: isSelected
          ? ''
          : good,
      })
    );

    return (
      <tr data-cy="Good">
        <td>
          <this.Button
            isSelected={isSelected}
            setSelected={setSelected}
          />
        </td>

        <td
          data-cy="GoodTitle"
          className={cn(
            'is-vcentered', {
              'has-background-success-light': isSelected,
            },
          )}
        >
          {good}
        </td>
      </tr>
    );
  };

  Button: FC<ButtonProps> = ({ isSelected, setSelected }) => (
    <button
      type="button"
      data-cy={isSelected
        ? 'RemoveButton'
        : 'AddButton'}
      className={cn(
        'button',
        { 'is-info': isSelected },
      )}
      onClick={setSelected}
    >
      {isSelected ? '-' : '+'}
    </button>
  );

  GoodList: FC<{}> = () => (
    <table className="table">
      <tbody>
        {goods.map(good => (
          <this.Good
            key={good}
            good={good}
          />
        ))}
      </tbody>
    </table>
  );

  Title: FC<{}> = () => {
    const { selectedGood } = this.state;
    const clearSelected = () => (
      this.setState({ selectedGood: '' })
    );

    return (
      <h1
        className={cn(
          'title', {
            'is-flex is-align-items-center': selectedGood,
          },
        )}
      >
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearSelected}
              />
            </>
          )
          : 'No goods selected'}
      </h1>
    );
  };

  render = (): ReactNode => (
    <main className="section container">
      <this.Title />
      <this.GoodList />
    </main>
  );
}
