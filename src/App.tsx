import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
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
    selectedGood: 'Jam',
  };

  render() {
    const { goodsFromServer, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {` ${selectedGood} is selected`}
          { selectedGood !== '' && (
            <button
              type="button"
              onClick={() => {
                const elements = document.querySelectorAll('li');

                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < elements.length; i++) {
                  elements[i].classList.remove('selected');
                }

                this.setState({ selectedGood: '' });
              }}
            >
              X
            </button>
          )}
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(product => (
            <li key={product} id={product}>
              {product}
              { ' - ' }
              { selectedGood !== product && (
                <button
                  type="button"
                  onClick={() => {
                    const elements = document.querySelectorAll('li');

                    // eslint-disable-next-line no-plusplus
                    for (let i = 0; i < elements.length; i++) {
                      elements[i].classList.remove('selected');
                    }

                    this.setState({ selectedGood: product });
                    const elem = document.getElementById(product);

                    elem?.classList.add('selected');
                  }}
                >
                  Select
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
