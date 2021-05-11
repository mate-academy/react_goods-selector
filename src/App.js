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
    selectedGoodsArr: ['No goods'],
  };

  render() {
    return (
      <div className="App">
        <h1>
          {' '}
          {`${this.state.selectedGoodsArr.map(
            good => ` ${good}`,
          )} are selected`}
          <button
            type="button"
            id="xButton"
            style={{ visibility: 'hidden' }}
            onClick={() => {
              this.setState({ selectedGoodsArr: ['No goods'] });
              document.getElementById('xButton').style.visibility = 'hidden';
            }}
          >
            {' '}
            X
            {' '}
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li>
              {' '}
              {good}
              <button
                type="button"
                id={good}
                onClick={() => {
                  if (this.state.selectedGoodsArr[0] === 'No goods') {
                    this.setState(() => ({ selectedGoodsArr: [good] }));
                  } else {
                    this.setState(prevState => (
                      prevState.selectedGoodsArr.push(good)));
                  }

                  const button = document.getElementById(good);

                  button.style.visibility = 'hidden';
                  document.getElementById('xButton').style.visibility
                    = 'visible';
                }}
              >
                {' '}
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState(prev => (
                    { selectedGoodsArr: prev.selectedGoodsArr.filter(
                      arrGood => arrGood !== good,
                    ) }));
                  if (
                    this.state.selectedGoodsArr.length === 1
                    && this.state.selectedGoodsArr[0] === good
                  ) {
                    this.setState({ selectedGoodsArr: ['No goods'] });
                  }

                  document.getElementById(good).style.visibility = 'visible';
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
