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

class App extends React.Component<{}, {}> {
  state = {
    selectedGood: ['Jam'] as string[],
  };

  addGood = (good: string) => {
    const { selectedGood } = this.state;

    if (!selectedGood.includes(good)) {
      selectedGood.push(good);
    } else {
      const ind = selectedGood.indexOf(good);

      selectedGood.splice(ind, 1);
    }

    this.setState(() => {
      return { selectedGood };
    });
  };

  goToZero = () => {
    const { selectedGood } = this.state;

    selectedGood.length = 0;

    this.setState({ selectedGood });
  };

  renderTitle = () => {
    const { selectedGood } = this.state;

    let title;

    switch (true) {
      case (selectedGood.length === 0):
        title = 'No selected goods';
        break;
      case (selectedGood.length === 1):
        title = `${selectedGood.join('')} is selected`;
        break;
      case (selectedGood.length === 2):
        title = `${selectedGood.join(' and ')} are selected`;
        break;
      case (selectedGood.length > 2):
        title = selectedGood.reduce((text, listItem, i, arr) => {
          if (i === 0) {
            return listItem + text;
          }

          if (i === arr.length - 1) {
            return `${text} and ${listItem} are selected`;
          }

          return `${text}, ${listItem}`;
        }, '');
        break;
      default:
    }

    return title;
  };

  render() {
    return (
      <>
        {this.state.selectedGood.length !== 0 && (
          <button
            type="button"
            onClick={() => {
              this.goToZero();
            }}
          >
            X

          </button>
        )}
        <h1>{this.renderTitle()}</h1>
        <ul>
          {goodsFromServer.map((good) => {
            const isGoodAdded = this.state.selectedGood.includes(good);

            return (
              <>
                <li key={good}>{good}</li>
                <button
                  type="button"
                  onClick={() => {
                    this.addGood(good);
                  }}
                >
                  {isGoodAdded
                    ? 'Hide'
                    : 'Select' }
                </button>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
