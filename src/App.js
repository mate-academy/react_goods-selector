import React from 'react';
import './App.scss';

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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    selectedGoods: [],
    selectedGoodsNames: [],
  }

  render() {
    const { selectedGoods, selectedGoodsNames, goods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected goods:
          {`\n`}
          {
            selectedGoodsNames.length
              ? selectedGoodsNames.join(', ')
              : "Anything wasn't select"
          }
        </h1>

        <button
          type="button"
          onClick={(event) => {
            this.setState({
              selectedGoods: [],
              selectedGoodsNames: [],
            });
          }}
        >
          Clear
        </button>

        <ul>
          {goods.map(good => (
            <li
              key={good}
              className={
                `${selectedGoodsNames.includes(good) ? 'selected' : ''}`}
            >
              {good}

              {' '}

              <button
                type="button"
                onClick={(event) => {
                  const selectedGood = event.target.parentElement;
                  const textOfSelectedGood = event.target
                    .parentElement.childNodes[0]
                    .wholeText.trim();

                  if (selectedGoods.includes(selectedGood)) {
                    return;
                  }

                  this.setState(state => ({
                    selectedGoods: [
                      ...state.selectedGoods,
                      selectedGood,
                    ],
                    selectedGoodsNames: [
                      ...state.selectedGoodsNames,
                      textOfSelectedGood,
                    ],
                  }));
                }}
              >
                Select
              </button>

              {' '}

              <button
                type="button"
                onClick={(event) => {
                  const selectedGood = event.target.parentElement;
                  const textOfSelectedGood = event.target
                    .parentElement.childNodes[0]
                    .wholeText.trim();

                  if (!selectedGoods.includes(selectedGood)) {
                    return;
                  }

                  this.setState(state => ({
                    selectedGoods: [...state.selectedGoods]
                      .filter(g => g !== selectedGood),
                    selectedGoodsNames: [...state.selectedGoodsNames]
                      .filter(text => text !== textOfSelectedGood),
                  }));
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}
