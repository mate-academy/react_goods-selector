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

type State = {
  select: string[];
};

class App extends React.Component<{}, State> {
  state = {
    select: ['Jam'],
  };

  selecetAdd = (value: string) => {
    this.setState((prevState) => ({
      select: [...prevState.select, value],
    }));
  };

  clearSelect = () => {
    this.setState({ select: [] });
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

  selectRemove = (good: string) => {
    this.setState(prevState => ({
      select: prevState.select.filter(value => value !== good),
    }));
  };

  render() {
    const { select } = this.state;

    return (
      <div className="wrap">
        <div className="app">
          <header className="app__header">
            <h1 className="app__title">
              {`Selected: ${this.addText(select)}`}
            </h1>
          </header>
          <ul className="app__list">
            {goodsFromServer.map((good) => {
              const goodActive = select.includes(good);

              return (
                <div className="app__main">
                  <li className="app__value" key={good}>
                    {good}
                  </li>
                  <button
                    type="button"
                    className="button"
                    onClick={
                      goodActive
                        ? () => this.selectRemove(good)
                        : () => this.selecetAdd(good)
                    }
                  >
                    {goodActive ? 'Remove' : 'Selecet'}
                  </button>
                </div>
              );
            })}
          </ul>
          {
            (select.length > 0) && (
              <button
                type="button"
                className="button-clear"
                onClick={this.clearSelect}
              >
                Clear
              </button>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
