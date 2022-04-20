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

class App extends React.Component {
  state = {
    initialHeader: 'No goods selected',
    // selectedGood: 'Jam',
  };

  previousSelectedButton: HTMLElement | null
  = document.querySelector('.buttonSelected');

  previousSelectedGood: HTMLElement | null
  = document.querySelector('.selected');

  render() {
    return (
      <div className="App">
        {goodsFromServer.map(good => (
          <>
            <div
              className="goodContainer"
              key={good}
            >
              <div className="goodName">
                {good}
              </div>
              <button
                type="button"
                onClick={(event) => {
                  this.setState({
                    // selectedGood: good,
                    initialHeader: `Selected good is: - ${good}`,
                  });
                  const selectedButton = event.target as HTMLElement;
                  const selectedElement
                  = selectedButton.previousElementSibling as HTMLElement;

                  const clearSelection
                    = document.querySelector('.deleteSelection');

                  if (clearSelection) {
                    clearSelection.className = 'deleteSelection';
                  }

                  if (selectedElement) {
                    selectedElement.className = 'goodName selected';
                  }

                  selectedButton.className = 'buttonSelected hidden';
                  if (this.previousSelectedButton) {
                    this.previousSelectedButton.className = '';
                  }

                  if (this.previousSelectedGood) {
                    this.previousSelectedGood.className = 'goodName';
                  }

                  this.previousSelectedButton = selectedButton;

                  if (selectedElement) {
                    this.previousSelectedGood = selectedElement;
                  }
                }}
              >
                Select
              </button>
            </div>
          </>
        ))}
        <div className="headerContainer">
          <h1>
            {this.state.initialHeader}
          </h1>
          <button
            type="button"
            className="deleteSelection hidden"
            onClick={() => {
              this.setState({
                initialHeader: 'Selected good is: - ',
              });

              const selectedButton = document.querySelector('.buttonSelected');
              const goodSelected = document.querySelector('.selected');

              if (selectedButton) {
                selectedButton.className = '';
              }

              if (goodSelected) {
                goodSelected.className = 'goodName';
              }

              const clearSelection = document.querySelector('.deleteSelection');

              if (clearSelection) {
                clearSelection.className = 'deleteSelection hidden';
              }
            }}
          >
            x
          </button>
        </div>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
