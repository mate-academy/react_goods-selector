import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  title = () => {
    const { selectedGoods } = this.state;
    let message;

    if (selectedGoods.length === 0) {
      message = 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length >= 2) {
      const firstPart = selectedGoods.slice(0, selectedGoods.length - 1);
      const secondPart = selectedGoods[selectedGoods.length - 1];

      message = `${firstPart.join(', ')} and ${secondPart} are selected`;
    }

    return message;
  };

  selectedItem = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  };

  removedItem = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== item),
    }));
  };

  getRelevantFunction = (item: string) => {
    if (this.state.selectedGoods.includes(item)) {
      this.removedItem(item);
    } else {
      this.selectedItem(item);
    }
  };

  clearButton = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="container-sm">
        <div className="text-center">
          <h1 className="">
            {this.title()}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              className="rounded border-0"
              type="button"
              onClick={() => this.clearButton()}
            >
              Clear the list
            </button>
          )}
        </div>

        <ul className="pt-5 row row-cols-auto d-flex justify-content-center">
          {goodsFromServer.map(good => (
            <div className={classNames(`
            col-6
            d-flex
            flex-column
            justify-content-center
            align-items-center
            border
            border-secondary
            rounded
            w-25
            m-2`,
            { 'bg-success text-light': this.state.selectedGoods.includes(good) })}
            >
              <li
                key={good}
                className="w-100 text-center"
              >
                {good}
                {' '}
              </li>

              <button
                className="rounded border-0 my-2"
                type="button"
                onClick={() => this.getRelevantFunction(good)}
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
