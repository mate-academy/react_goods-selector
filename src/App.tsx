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
  selectedGood: string;
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: '',
  };

  spans = document.getElementsByTagName('span');

  buttons = document.getElementsByTagName('button');

  render() {
    const { selectedGood } = this.state;
    const phrase = (selectedGood === 'Dumplings' || selectedGood === 'Eggs')
      ? `${selectedGood} are selected`
      : `${selectedGood} is selected`;

    return (
      <div className="app">
        <h1>
          {(selectedGood)
            ? `Selected good: - ${phrase}`
            : 'Selected good: - No goods selected'}
          {' '}
          {(this.state.selectedGood === '')
            ? ''
            : (
              <button
                type="button"
                onClick={() => {
                  for (let i = 0; i < this.spans.length; i += 1) {
                    this.spans[i].classList.remove('selected');
                    this.buttons[i + 1].hidden = false;
                  }

                  this.setState({ selectedGood: '' });
                }}
              >
                X
              </button>
            )}
        </h1>
        <ul>
          {goodsFromServer.map((product) => {
            return (
              <li
                key={product}
              >
                <span>{product}</span>
                {' '}
                <button
                  type="button"
                  onClick={(e) => {
                    const button = e.target;

                    this.setState({
                      selectedGood: product,
                    });
                    for (let i = 0; i < this.spans.length; i += 1) {
                      if (this.spans[i].textContent === product) {
                        this.spans[i].classList.add('selected');
                        (button as HTMLButtonElement).hidden = true;
                      }
                    }
                  }}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
