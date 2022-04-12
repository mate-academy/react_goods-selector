import React from 'react';
import './App.scss';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  goodsFromServer = [
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

  state = {
    selectedGood: '',
  };

  componentDidMount() {
  }

  componentDidUpdate(prevState: State) {
    if (prevState.selectedGood !== this.state.selectedGood) {
      const initialText = document.querySelector('.initial_text');
      const stateLength = this.state.selectedGood.split(',').length;

      if (initialText !== null) {
        if (stateLength === 1 && this.state.selectedGood !== '') {
          initialText.textContent = `${this.state.selectedGood.replaceAll('_', ' ')} is selected`;
        } else if (this.state.selectedGood === '') {
          initialText.textContent = 'No goods selected';
        } else {
          initialText.textContent = `${this.state.selectedGood.replaceAll('_', ' ')} are selected`;
        }
      }
    }
  }

  addItem = (item: string, event: React.MouseEvent) => {
    const nonActiveItem = document.querySelector(`.${item}`);
    const clickedButton = event.target;
    const buttons = document.querySelectorAll('.button');
    const buttonX: HTMLElement | null = document.querySelector('.buttonX');

    if (buttonX !== null) {
      buttonX.hidden = false;
    }

    buttons.forEach(button => {
      if (button === clickedButton) {
        button.classList.add('hidden');
      }
    });

    nonActiveItem?.classList.add('active');

    if (this.state.selectedGood === '') {
      this.setState({ selectedGood: item });
    } else {
      this.setState((state) => ({
        selectedGood: `${state.selectedGood}, ${item}`,
      }));
    }
  };

  removeItem = (item: string) => {
    const activeElement = document.querySelector(`.${item}`);
    const buttons = document.querySelectorAll('.button');
    const buttonX: HTMLElement | null = document.querySelector('.buttonX');

    buttons.forEach(button => {
      if (button.classList.contains(item)) {
        button.classList.remove('hidden');
      }
    });

    activeElement?.classList.remove('active');

    this.setState((state) => {
      const itemsArray = state.selectedGood.split(',');

      if (itemsArray.length === 1 && state.selectedGood.includes(item)) {
        if (buttonX !== null) {
          buttonX.hidden = true;
        }

        return { selectedGood: '' };
      }

      for (let i = 0; i < itemsArray.length; i += 1) {
        if (itemsArray[i].replace(' ', '') === item) {
          itemsArray.splice(i, 1);
        }
      }

      return { selectedGood: itemsArray.join(',') };
    });
  };

  clearSelect = () => {
    const initialText = document.querySelector('.initial_text');
    const activeElement = document.querySelectorAll('.active');
    const buttons = document.querySelectorAll('.button');
    const buttonX: HTMLElement | null = document.querySelector('.buttonX');

    if (buttonX !== null) {
      buttonX.hidden = true;
    }

    if (initialText !== null) {
      initialText.textContent = '';
    }

    activeElement.forEach(element => element.classList.remove('active'));

    buttons.forEach(button => button.classList.remove('hidden'));

    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="header">
            <div className="initial_text">No goods selected</div>
            <div className="buttonX" hidden>
              <button
                type="button"
                onClick={this.clearSelect}
              >
                X
              </button>
            </div>
          </h1>
        </div>
        <div className="listOfGoods">
          <ul>
            {this.goodsFromServer.map((item) => (
              <li
                key={item}
                className="listOfGoods item"
              >
                <div className={`listOfGoods ${item.replaceAll(' ', '_')}`}>{item}</div>

                <div>
                  <button
                    type="button"
                    className={`listOfGoods button ${item.replaceAll(' ', '_')}`}
                    onClick={(event) => {
                      this.addItem(item.replaceAll(' ', '_'), event);
                    }}
                  >
                    Add
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className={`listOfGoods button ${item.replaceAll(' ', '_')}`}
                    onClick={() => {
                      this.removeItem(item.replaceAll(' ', '_'));
                    }}
                  >
                    Remove
                  </button>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
