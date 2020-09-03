import React from 'react';
import './App.scss';

const goodsFromServer = [
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
    selector: false,
  };

  closeButton = (text) => {
    this.setState({ selector: false });
  }

  writeSelector = (event, value) => {
    this.setState({ selector: value });
  }

  render() {
    const { selector } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          { selector }
          <button
            type="button"
            style={{
              display: 'inline-block',
            }}
            className={selector && 'close'}
            onClick={this.closeButton}
          />
        </h1>
        {goodsFromServer.map(good => (
          <p>
            <button
              type="button"
              className={selector === good ? 'selected' : ''}
              onClick={(event) => {
                this.writeSelector(event, good);
              }}
            >
              {good}
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default App;
