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
    selectedGoods: [],
  }

  makeUnselected = (item) => {
    const itemsLi = [...document.querySelectorAll('.item')];

    itemsLi.forEach((itemLi) => {
      if (itemLi.textContent === item) {
        itemLi.classList.remove('selected');

        this.setState((prevState) => {
          /* const index = prevState.selectedGoods.findIndex(item);

          const newSelectedGoods = prevState.selectedGoods.splice(index, 1);

          return {
            selectedGoods: newSelectedGoods,
          }; */
        });
      }
    });
  };

  makeUnSelectedAll = () => {
    const itemsLi = [...document.querySelectorAll('.item')];

    this.setState({
      selectedGoods: [],
    });

    itemsLi.forEach((itemLi) => {
      itemLi.classList.remove('selected');
    });
  };

  renderList = (array) => {
    if (array.length === 0) {
      return 'No goods selected';
    }

    if (array.length === 1) {
      return `${array[0]} is selected`;
    }

    const selectedItems = [];
    let index = 0;

    array.forEach((item) => {
      if (index === array.length - 2) {
        selectedItems.push(`${item}`);
      } else if (index === array.length - 1) {
        selectedItems.push(` and ${item} `);
      } else {
        selectedItems.push(`${item}, `);
      }

      index += 1;
    });

    return `${selectedItems.join('')} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          <span>
            {' '}
            {this.renderList(selectedGoods)}
          </span>
          {' '}
          <button
            type="button"
            onClick={(e) => {
              this.setState({
                selectedGoods: [],
              });
            }}
          >
            X
          </button>
        </h1>
        <h2>List of goods:</h2>
        <ul>

          {goodsFromServer.map(item => (
            <>
              <li
                key={item}
                className={`item ${selectedGoods.includes(item)
                  ? 'selected'
                  : ''}`}
              >
                {item}
              </li>
              <button
                type="button"
                onClick={(e) => {
                  if (!selectedGoods.includes(item)) {
                    this.setState(prevState => ({
                      selectedGoods: [...prevState.selectedGoods, item],
                    }));
                  }
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={(e) => {
                  if (selectedGoods.includes(item)) {
                    this.setState((prevState) => {
                      const index = prevState.selectedGoods.indexOf(item);

                      prevState.selectedGoods.splice(index, 1);

                      return {
                        selectedGoods: prevState.selectedGoods,
                      };
                    });
                  }
                }}
              >
                Remove
              </button>
            </>
          ))}

        </ul>
      </div>
    );
  }
}

export default App;
