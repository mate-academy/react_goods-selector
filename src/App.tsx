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
] as const;

type Good = typeof goods[number];
interface State {
  selectedGood: Good | null;
}

export class App extends React.Component<{}, State>  {
  state = {
    selectedGood: 'Jam' as const,
  }

  private clearSelectedHandler = () => {
    this.setState({selectedGood: null});
  }

  private createAddSelectedGoodHandler = (good: Good) => {
    return () => {
      this.setState({selectedGood: good});
    }
  }

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    const title = selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';

    const buttonAdd = (good: Good) =>  (
      <button data-cy="AddButton" type="button" className="button" onClick={this.createAddSelectedGoodHandler(good)}>
      +
      </button>
    );

    const buttonRemove = (
      <button
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
        onClick={this.clearSelectedHandler}
      >
        -
      </button>
    );

    const selectedCssClass = 'has-background-success-light';

    return (
    <main className="section container">
      <h1 className="title">
        {title}
        {selectedGood && <button data-cy="ClearButton" type="button" className="delete ml-3"  onClick={this.clearSelectedHandler}/>}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr key={good} className={selectedGood === good ? selectedCssClass : ''} data-cy="Good">
              <td>
                {selectedGood === good ? buttonRemove : buttonAdd(good)}
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
