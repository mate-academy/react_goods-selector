import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    selectedGoods: [],
  };

  showSelected = (selectedGoods) => {
    let output = 'No goods selected';

    if (selectedGoods.length > 1) {
      let firstPart = '';

      for (let i = 0; i < selectedGoods.length - 1; i += 1) {
        firstPart += selectedGoods[i];
        if (i < selectedGoods.length - 2) {
          firstPart += ', ';
        }
      }

      const lastPart = ` and ${selectedGoods[selectedGoods.length - 1]}`;

      output = `${firstPart + lastPart} are selected`;
    } else if (selectedGoods.length === 1) {
      output = `${selectedGoods} is selected`;
    }

    return output;
  };

  addGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  removeGood = (good) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(currentGood => (
        currentGood !== good
      )),
    }));
  };

  clearGoodsList = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="
          title
          d-flex
          flex-column
          justify-content-center
          align-items-center"
        >
          <button
            type="button"
            className={
              classNames(
                'title__delete-button',
                'btn-close',
                { invisible: this.state.selectedGoods.length < 1 },
              )
            }
            onClick={this.clearGoodsList}
          />
          <span className="title__selected-goods w-75">
            {`Selected good: ${this.showSelected(this.state.selectedGoods)}`}
          </span>
        </h1>
        <ol className="
            goods-list
            d-flex
            flex-column
            align-items-center
            gap-1
            container"
        >
          {goodsFromServer.map((good) => {
            const isSelectedGood = this.state.selectedGoods.includes(good);

            return (
              <li
                className="good row w-50 align-items-baseline gap-3"
                key={uuidv4()}
              >
                <span className={
                      classNames(
                        'good__name',
                        'col',
                        'lh-lg',
                        'text-center',
                        'border',
                        'border-dark',
                        'rounded',
                        { 'bg-success bg-gradient': isSelectedGood },
                      )
                    }
                >
                  {good}
                </span>
                <button
                  type="button"
                  className={
                        classNames(
                          'good__button',
                          'col',
                          'btn bg-gradient', {
                            'btn-primary': !isSelectedGood,
                            'btn-danger': isSelectedGood,
                          },
                        )
                      }
                  onClick={() => (
                    !isSelectedGood
                      ? this.addGood(good)
                      : this.removeGood(good)
                  )}
                >
                  {!isSelectedGood ? 'Add to list' : 'Remove from list' }
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
