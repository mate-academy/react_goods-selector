import React from 'react';
import './App.scss';
// import classNames from 'classnames';
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
  selectedGoods: string[];
  selectedGood: string,
  bgColor: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: goodsFromServer,
    selectedGood: 'Jam',
    bgColor: 'bg-success text-light',
  };

  titleHandler = (selectedGood: string) => {
    return this.state.selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';
  };

  selectedItem = (word: string) => {
    this.setState({ selectedGood: word });
  };

  clearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGoods, selectedGood, bgColor } = this.state;

    return (
      <div className="container-sm">
        <div className="text-center">
          <h1 className="">
            {this.titleHandler(selectedGood)}
          </h1>
          {selectedGood && (
            <button
              className="rounded border-0"
              type="button"
              onClick={() => this.clearButton()}
            >
              Clear the list
            </button>
          )}
        </div>
        <ul className="pt-5 row row-cols-auto">
          {selectedGoods.map(good => (
            <div className={`
              col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-center
              border
              border-secondary
              rounded
              w-25
              m-2
              ${good === selectedGood ? bgColor : ''}`}
            >
              <li
                key={good}
                className="w-100 text-center"
              >
                {good}
                {' '}
              </li>
              {selectedGood !== good
                && (
                  <button
                    className="rounded border-0 my-2"
                    type="button"
                    onClick={() => this.selectedItem(good)}
                  >
                    Select
                  </button>
                )}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
