import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  title = () => {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;
    let titleText = '';

    if (length === 0) {
      titleText = 'No goods selected';
    }

    if (length === 1) {
      titleText = `${selectedGoods} is selected`;
    }

    if (length > 1) {
      const firstPart = selectedGoods.slice(0, -1).join(', ');
      const secondPart = selectedGoods[length - 1];

      titleText = `${firstPart} and ${secondPart} is selected`;
    }

    return titleText;
  };

  deleteGoods(item: string) {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(
        product => product !== item,
      ),
    }));
  }

  addGoods(item: string) {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="text-center mt-3 mb-3">
          {this.title()}
        </h1>
        <ul className="col-4 list-group m-auto">
          {goodsFromServer.map(item => (
            <li
              className={classNames(
                selectedGoods.includes(item)
                  ? 'list-group-item list-group-item-primary'
                  : 'list-group-item list-group-item-secondary',
                'd-flex justify-content-between',
                'align-items-center',
              )}
              key={item}
            >
              {item}
              <div>
                <button
                  type="button"
                  className="btn btn-primary add-item-btn"
                  onClick={() => {
                    this.addGoods(item);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    this.deleteGoods(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          {(!!selectedGoods.length) && (
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={this.resetGoods}
            >
              Clear All Goods
            </button>
          )}
        </div>
      </div>
    );
  }
}
