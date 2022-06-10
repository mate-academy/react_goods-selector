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
  'Garlic'];

  type State = {
    selectedGood: string[];
  };
class App extends React.Component<{}, State> {
  state:State = {
    selectedGood: ['Jam'],
  };

  getClick = (item: string) => {
    if (this.state.selectedGood.includes(item)) {
      this.setState(prevState => ({
        selectedGood: prevState.selectedGood.filter((goods) => goods !== item),
      }));
    } else {
      this.setState(prevState => ({
        selectedGood: [...prevState.selectedGood, item],
      }));
    }
  };

  addItem = (selectedGood: string[]) => {
    if (selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    if (selectedGood.length > 1) {
      return `${selectedGood.slice(0, -1).join(', ')}
        and ${selectedGood[selectedGood.length - 1]} are selected`;
    }

    return 'No goods selected';
  };

  getChange = (item:string, firstArg:string, secondArg:string) => {
    return this.state.selectedGood.includes(item) ? firstArg : secondArg;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.addItem(selectedGood)}
          {(selectedGood.length !== 0) && (
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.setState({ selectedGood: [] });
              }}
            >
              X
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map(item => {
            return (
              <div className="list">
                <li
                  key={goodsFromServer.indexOf(item)}
                  className={this.getChange(item, 'list__selected', 'list__notSelected')}
                >
                  {item}
                </li>
                <button
                  type="button"
                  onClick={() => {
                    this.getClick(item);
                  }}
                  className={this.getChange(item, 'btn btn__isNotVisible', 'btn btn__isVisible')}
                >
                  {this.getChange(item, 'Remove', 'Add')}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
