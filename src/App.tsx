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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  spans = document.getElementsByTagName('span');

  buttons = document.getElementsByTagName('button');

  render() {
    const { selectedGoods } = this.state;
    let phrase = 'No goods selected';

    if (selectedGoods.length === 1) {
      const selectedGood = selectedGoods[0];

      phrase = (selectedGood === 'Dumplings' || selectedGood === 'Eggs')
        ? `${selectedGood} are selected`
        : `${selectedGood} is selected`;
    }

    if (selectedGoods.length > 1) {
      phrase = `${[...selectedGoods].slice(0, -1).join(', ')} and ${[...selectedGoods.slice(-1)]} are selected`;
    }

    return (
      <div className="app">
        <h1>
          {`Selected good: - ${phrase}`}
          {' '}
          {(selectedGoods.length === 0)
            ? ''
            : (
              <button
                type="button"
                onClick={() => {
                  for (let i = 0; i < this.spans.length; i += 1) {
                    this.spans[i].classList.remove('selected');
                    this.buttons[i + 1].textContent = 'Add';
                  }

                  this.setState({ selectedGoods: [] });
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
                    const buttonText = (button as HTMLButtonElement).textContent;

                    const buttonToggle = (action: string): void => {
                      (button as HTMLButtonElement).textContent = action;

                      for (let i = 0; i < this.spans.length; i += 1) {
                        if (this.spans[i].textContent === product) {
                          this.spans[i].classList.toggle('selected');
                        }
                      }
                    };

                    switch (buttonText) {
                      case 'Remuve':
                        this.setState((prevState) => {
                          const indexOfProduct = prevState.selectedGoods.indexOf(product);

                          prevState.selectedGoods.splice(indexOfProduct, 1);
                          buttonToggle('Add');

                          return { selectedGoods: prevState.selectedGoods };
                        });

                        break;

                      case 'Add':
                        this.setState((prevState) => {
                          buttonToggle('Remuve');

                          return {
                            selectedGoods: [...prevState.selectedGoods, product],
                          };
                        });

                        break;

                      default:
                        break;
                    }
                  }}
                >
                  Add
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
