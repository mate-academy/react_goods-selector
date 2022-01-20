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

interface State {
  goods: string[];
  selectedGood: string[];
  buttonStatus: string;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    selectedGood: [''],
    buttonStatus: 'list__button--green',
  };

  oldSelected = [''];

  addButton = (good: string) => {
    this.oldSelected = [...this.state.selectedGood];
    this.setState({
      selectedGood: [...this.oldSelected, good],
    });
  };

  removeButton = (good: string) => {
    // eslint-disable-next-line no-console
    console.log(good);

    this.oldSelected = [...this.state.selectedGood];
    this.setState({
      selectedGood: [...this.oldSelected.filter((item) => (item !== good))],
    });
  };

  pretier = (goods:string[]):string => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  render() {
    const { goods, selectedGood, buttonStatus } = this.state;

    if (selectedGood[0] === '') {
      selectedGood.length = 0;
    }

    return (
      <div className="App">
        <h1 className="title">
          {this.pretier(selectedGood)}
        </h1>
        <ul className="list">
          {goods.map((good) => {
            return (
              <li
                className="list__item"
                key={good}
              >
                <button
                  className={`list__button ${buttonStatus}`}
                  type="button"
                  onClick={() => {
                    if (selectedGood.includes(good)) {
                      this.removeButton(good);
                      this.setState({
                        buttonStatus: 'list__button--green',
                      });
                    } else {
                      this.addButton(good);
                      this.setState({
                        buttonStatus: 'list__button--red',
                      });
                    }
                  }}
                >
                  {
                    selectedGood.includes(good)
                      ? 'Remove'
                      : 'Add'
                  }
                </button>
                {good}
              </li>
            );
          })}
        </ul>
        {
          !!selectedGood.length
          && (
            <button
              className="close"
              type="button"
              onClick={() => (
                this.setState({
                  selectedGood: [''],
                })
              )}
            >
              X
            </button>
          )
        }
      </div>
    );
  }
}
