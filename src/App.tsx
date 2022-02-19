import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selected: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: 'Jam',
  };

  deleteItem = () => {
    this.setState({ selected: '' });
  };

  addItem(item: string) {
    this.setState({ selected: item });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        {selected === ''
          ? (
            <>
              <div className="title">
                <h1>No selected Goods</h1>
              </div>
            </>
          ) : (
            <>
              <div className="title">
                <h1>{`Selected good: ${selected}`}</h1>
                <button
                  className="button"
                  type="button"
                  onClick={this.deleteItem}
                >
                  Clear
                </button>
              </div>
            </>
          )}
        <ul className="goodList">
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className={classNames('goodStyle', {
                'goodStyle--selected': this.state.selected === item,
              })}
            >
              <p>
                {item}
              </p>
              {item === selected ? (
                <button
                  className="button"
                  type="button"
                  onClick={this.deleteItem}
                >
                  Delete
                </button>
              ) : (
                <button
                  className="button"
                  type="button"
                  onClick={() => this.addItem(item)}
                >
                  Add
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
