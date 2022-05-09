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

type Props = {};
type State = {
  goodSelect: string[];
};

class App extends React.Component<Props, State> {
  state = {
    goodSelect: ['Jam'],
  };

  addSelecetGood = (item: string) => {
    this.setState((prevState) => ({
      goodSelect: [...prevState.goodSelect, item],
    }));
  };

  removeSelectGood = (good: string) => {
    this.setState(({ goodSelect }) => {
      const item = goodSelect.indexOf(good);

      goodSelect.splice(item, 1);

      return { goodSelect };
    });
  };

  addText = (text: string[]) => {
    switch (text.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${text[0]} is selected`;

      default:
        return `${text.slice(0, -1).join(', ')} and ${text[text.length - 1]} are selected`;
    }
  };

  clearGoods = () => {
    this.setState({ goodSelect: [] });
  };

  render() {
    const { goodSelect } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">
            Selected:
            {' '}
            {this.addText(goodSelect)}
          </h1>
        </header>
        <button
          type="button"
          className="button-clear"
          onClick={this.clearGoods}
        >
          Clear
        </button>
        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const goodActive = goodSelect.includes(good);

            return (
              <div className="App__main">
                <button
                  type="button"
                  className="button"
                  onClick={
                    goodActive
                      ? () => this.removeSelectGood(good)
                      : () => this.addSelecetGood(good)
                  }
                >
                  {goodActive ? 'Remove' : 'Selecet'}
                </button>
                <li className="App__item">{good}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
