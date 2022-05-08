import React from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGoods: string[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  chooseGoodsHandler = (item: string) => {
    const { selectedGoods } = this.state;

    if (!(selectedGoods.includes(item))) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  };

  RemoveGoodsHandler = (item: string) => {
    this.setState(prevState => ({
      selectedGoods:
       prevState.selectedGoods.filter(element => element !== item),
    }));
  };

  resetSelectedGoods() {
    this.setState({
      selectedGoods: [],
    });
  }

  showGoodsHandler() {
    let SelectedValues = '';

    switch (this.state.selectedGoods.length) {
      case 1:
        SelectedValues = `${this.state.selectedGoods} is selected`;
        break;

      case 2:
        SelectedValues = `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected`;
        break;

      case 3:
        SelectedValues = `${this.state.selectedGoods[0]},${this.state.selectedGoods[1]}  and ${this.state.selectedGoods[2]} are selected`;
        break;
      case 0:
        SelectedValues = 'No items selected';
        break;

      default:
        SelectedValues = `${this.state.selectedGoods} are selected`;
        break;
    }

    return SelectedValues;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.showGoodsHandler()}
          {selectedGoods.length > 0
            ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => (
                  this.resetSelectedGoods()
                )}
              >
                X
              </button>
            )
            : ('')}
        </h1>
        <ul>
          {goodsFromServer.map((item: string) => (
            <li
              className={classNames(
                'd-flex justify-content-between align-items-center',
                {
                  active: (this.state.selectedGoods.includes(item)),
                },
              )}
              key={item}
            >
              {item}
              <div>
                <button
                  type="button"
                  className="addButton btn btn-success"
                  onClick={() => {
                    this.chooseGoodsHandler(item);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.RemoveGoodsHandler(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
