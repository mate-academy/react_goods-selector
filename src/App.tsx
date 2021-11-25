import React from 'react';
// import classNames from 'classnames';
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

class App extends React.Component {
  selectedGoodsArray: string[] = [];

  state = {
    selectedGood: 'Jam is selected',
  };

  onClick = (target: HTMLButtonElement, good: string, action: string) => {
    const button = target;
    const li = button.parentElement as HTMLLIElement;

    if (action === 'remove') {
      this.selectedGoodsArray
        = this.selectedGoodsArray.filter((valueGood: string) => valueGood !== good);

      li.classList.remove('chosen');
      const buttonAdd = button.previousElementSibling as HTMLElement;

      buttonAdd.style.visibility = 'visible';
    }

    if (action === 'add') {
      this.selectedGoodsArray.push(good);
      li.classList.add('chosen');
      const buttonRemove = button.nextElementSibling as HTMLElement;

      buttonRemove.style.visibility = 'visible';
    }

    button.style.visibility = 'hidden';

    let title = this.selectedGoodsArray.join(', ');
    const lengthArray = this.selectedGoodsArray.length;

    if (lengthArray >= 3) {
      const i = lengthArray - 1;

      const arr = this.selectedGoodsArray.slice(0, i);

      title = arr.join(', ');

      title = `${title} and ${this.selectedGoodsArray[i]}`;
    }

    const rest = lengthArray >= 2 ? 'are selected' : 'is selected';

    title = `${title} ${rest}`;

    title = lengthArray !== 0 ? title : 'No goods selected';
    this.setState({ selectedGood: title });
  };

  render() {
    const { selectedGood } = this.state;
    const selectedGoods = selectedGood === 'No goods selected' || selectedGood === 'Jam is selected';

    return (
      <div className="App">
        <h1>
          {selectedGood}
        </h1>
        <button
          style={selectedGoods ? { visibility: 'hidden' } : { visibility: 'visible' }}
          type="button"
          onClick={({ target }) => {
            const button = target as HTMLButtonElement;
            const ul = button.nextElementSibling as HTMLElement;

            button.style.visibility = 'hidden';

            this.setState({ selectedGood: 'No goods selected' });
            ul.childNodes.forEach(child => {
              const li = child as HTMLLIElement;

              li.classList.remove('chosen');
              (li.firstElementChild as HTMLButtonElement).style.visibility = 'visible';
              (li.lastElementChild as HTMLButtonElement).style.visibility = 'hidden';
            });

            this.selectedGoodsArray = [];
          }}
        >
          Clear list
        </button>
        <ul className="goods">
          {goodsFromServer.map((good: string, index: number) => {
            return (
              <li key={+index}>
                {good}
                <button
                  type="button"
                  onClick={({ target }) => {
                    this.onClick(target as HTMLButtonElement, good, 'add');
                  }}
                >
                  Add
                </button>
                <button
                  style={{ visibility: 'hidden' }}
                  type="button"
                  onClick={({ target }) => {
                    this.onClick(target as HTMLButtonElement, good, 'remove');
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
