import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsFromServer: [
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
      ],
      selected: null,
    };
  }

  clickHandler = (item) => {
    this.setState({
      selected: item,
    });
  }

  closeHandler = () => {
    this.setState({ selected: null });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {
            this.state.selected ? (
              <span>
                {this.state.selected}
                {' '}
                <button
                  type="button"
                  onClick={this.closeHandler}
                >
                  X
                </button>
              </span>
            ) : '-'
          }
        </h1>
        <div>
          {this.state.goodsFromServer.map(item => (
            <button
              type="button"
              key={item}
              className={
                this.state.selected === item ? 'item, selected' : 'item'
              }
              onClick={() => this.clickHandler(item)}
            >
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
