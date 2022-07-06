import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  selecedGoods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selecedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((prevState) => (
      { selecedGoods: [...prevState.selecedGoods, good] }
    ));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selecedGoods: prevState.selecedGoods
        .filter(remaining => remaining !== good),
    }));
  };

  clear = () => {
    this.setState({ selecedGoods: [] });
  };

  buttonAction = (isSelected: boolean, good: string) => {
    return isSelected
      ? this.removeGood(good)
      : this.selectGood(good);
  };

  createMessage = () => {
    const { selecedGoods } = this.state;

    switch (selecedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selecedGoods[0]} is selected`;

      case 2:
        return `${selecedGoods[0]} and ${selecedGoods[1]} are selected`;

      default:
        return `${selecedGoods.slice(0, -1).join(', ')} and ${selecedGoods.slice(-1).join('')} are selected`;
    }
  };

  render() {
    return (
      <div className="container">
        <h1>
          {this.createMessage()}
        </h1>

        <ul className="list-group">
          {goodsFromServer.map(good => {
            const isSelected = this.state.selecedGoods.includes(good);
            const buttonText = isSelected ? 'Remove' : 'Select';

            return (
              <li key={good} className={`list-group-item ${isSelected ? 'selectedGood' : ''}`}>
                <span>
                  {good}
                </span>

                <button
                  type="button"
                  onClick={() => this.buttonAction(isSelected, good)}
                  className={`${isSelected ? 'btn btn-danger' : 'btn btn-success'}`}
                >
                  {buttonText}
                </button>
              </li>
            );
          })}
        </ul>

        {!!this.state.selecedGoods.length && (
          <button
            type="button"
            onClick={() => this.clear()}
            className="btn btn-secondary"
          >
            Clear selected goods
          </button>
        )}
      </div>
    );
  }
}

export default App;
