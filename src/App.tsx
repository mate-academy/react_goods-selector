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

interface State {
  selectedGood: string[];
  h1Content: string;
  isListLoaded: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    h1Content: 'No goods selected',
    selectedGood: ['Jam'],
    isListLoaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        h1Content: '',
        isListLoaded: true,
      });
    }, 3000);
  }

  selectGoodFromList = (good: string) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeGoodFromList = (good: string) => {
    this.setState(prevState => ({
      selectedGood: prevState
        .selectedGood
        .filter(goodItem => goodItem !== good),
    }));
  };

  createH1Content = () => {
    const goods = this.state.selectedGood;

    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods[0]} and ${goods[1]} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood, h1Content, isListLoaded } = this.state;

    return (
      <div className="App">
        <h1>{h1Content || this.createH1Content()}</h1>
        {goodsFromServer.length}
        {Boolean(selectedGood.length) && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                selectedGood: [],
              });
            }}
          >
            Clear
          </button>
        )}

        {
          isListLoaded
            ? (
              <ul className="list_of_goods">
                {goodsFromServer.map(item => {
                  return (
                    <li
                      className={selectedGood.includes(item)
                        ? 'good is-active'
                        : 'good'}
                      key={item}
                    >
                      {item}
                      {selectedGood.includes(item)
                        ? (
                          <button
                            type="button"
                            onClick={() => {
                              this.removeGoodFromList(item);
                            }}
                          >
                            Remove
                          </button>
                        )
                        : (
                          <button
                            type="button"
                            onClick={() => {
                              this.selectGoodFromList(item);
                            }}
                          >
                            Select
                          </button>
                        )}
                    </li>
                  );
                })}
              </ul>
            )
            : 'Loading...'
        }
      </div>
    );
  }
}

export default App;
