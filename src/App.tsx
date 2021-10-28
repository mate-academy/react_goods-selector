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
  selected: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selected: ['Carrot'],
  };

  selectItem = (item:string) => {
    this.setState(prevState => (
      {
        selected: [...prevState.selected, item],
      }
    ));
  };

  removeItem = (item:string) => {
    this.setState(prevState => (
      {
        selected: prevState.selected.filter((x:string):boolean => x !== item),
      }
    ));
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h3 className="title">
          {selected.length === 0 ? 'Select items' : ' Selected -'}
          {selected.map((item) => (
            <span className="selected-item" key={item}>
              {' '}
              { item }
              {' '}
            </span>
          ))}
        </h3>
        <ul>
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className={`goods-item ${selected.includes(item) ? 'isActive' : ''}`}
            >
              {item}
              {selected.includes(item) ? (
                <button
                  onClick={() => {
                    this.removeItem(item);
                  }}
                  type="button"
                >
                  remove
                </button>
              )
                : (
                  <button
                    onClick={() => {
                      this.selectItem(item);
                    }}
                    type="button"
                  >
                    select
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
