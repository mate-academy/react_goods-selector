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

class App extends React.Component {
  state = {
    selectedGoods: 'Jam',
  };

  changeSelected = ((good: string | undefined) => {
    this.setState({ selectedGoods: good });
  });

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.selectedGoods
            ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    this.changeSelected(undefined);
                  }}
                  className="App__button App__button--remove"
                >
                  X
                </button>
                <>
                  {`${this.state.selectedGoods} is selected`}
                </>
              </>
            )
            : 'No goods selected'}
        </h1>
        <ul className="goods">
          {goodsFromServer.map((good) => {
            return (
              <li
                key={goodsFromServer.indexOf(good)}
                className={this.state.selectedGoods === good
                  ? 'goods__item goods__item--selected'
                  : 'goods__item'}
              >
                {this.state.selectedGoods !== good
                  ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.changeSelected(good);
                      }}
                      className="App__button App__button--select"
                    >
                      {'Select '}
                    </button>
                  )
                  : ''}
                {good}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
