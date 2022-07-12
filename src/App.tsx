import { Component } from 'react';
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
  selectedGood: string[]
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: ['Jam'],
  };

  render() {
    const { selectedGood } = this.state;
    const goodOrGoods = (goods:string[]) => {
      if (goods.length > 1) {
        return `${goods.slice(0, -1)
          .join(', ')} and ${goods[goods.length - 1]} are selected`;
      }

      return `${selectedGood.join(', ')} is selected`;
    };

    return (
      <div className="App content">
        <div className="content__container">
          <div className="head">
            <h2 className="head__tittle">
              { selectedGood.length
                ? (goodOrGoods(selectedGood))
                : ('No goods selected')}
            </h2>
            {!!selectedGood.length && (
              <button
                type="button"
                className="button is-warning"
                onClick={() => this.setState({ selectedGood: [] })}
              >
                Clear
              </button>
            )}
          </div>
          <ul className="content">
            {goodsFromServer.map(good => (
              <li
                className="message level list__item"
                key={good}
              >
                <p className="list__tittle">{good}</p>
                {!selectedGood.includes(good)
                  ? (
                    <button
                      className="button is-success"
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => {
                          return {
                            selectedGood: prevState.selectedGood
                              .concat([good]),
                          };
                        });
                      }}
                    >
                      Select
                    </button>
                  )
                  : (
                    <button
                      className="button is-danger"
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => {
                          return {
                            selectedGood: prevState.selectedGood
                              .filter(item => item !== good),
                          };
                        });
                      }}
                    >
                      Remove
                    </button>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
