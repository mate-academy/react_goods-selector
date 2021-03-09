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

class App extends React.Component {
  state ={
    choosenGoods: [],
    isButtonForDeleteAllVisible: false,
  }

  addGood = ({ target }, good) => {
    const clickedButton = target;

    if (this.state.choosenGoods.includes(good)) {
      this.setState(prevState => (
        { choosenGoods: prevState.choosenGoods.filter(el => el !== good) }
      ));

      clickedButton.innerText = 'ADD';
    } else {
      this.setState(prevState => (
        {
          choosenGoods: [...prevState.choosenGoods, good],
        }));

      clickedButton.innerText = 'DELETE';
      this.setState({ isButtonForDeleteAllVisible: true });
    }
  }

  deletingAllButton = () => {
    this.setState(
      {
        choosenGoods: [],
        isButtonForDeleteAllVisible: false,
      },
    );
    const buttons = document.querySelectorAll('.App__button-select');
    // eslint-disable-next-line
    for (let button of buttons) {
      button.innerText = 'ADD';
    }
  }

  render() {
    const { choosenGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          { (choosenGoods.length === 0)
            ? 'No goods selected'
            : `Selected: ${choosenGoods.join(', ')}`
          }
        </h1>
        {this.state.isButtonForDeleteAllVisible && (
          <button
            type="button"
            onClick={this.deletingAllButton}
            className="App__button-delete-all"
          >
            X
          </button>
        )}
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li key={`${good}`}>
              {` ${good} `}
              <button
                type="button"
                className="App__button-select"
                onClick={(event) => {
                  this.addGood(event, good);
                }}
              >
                ADD
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
