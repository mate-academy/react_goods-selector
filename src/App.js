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

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  state = {
    selectedGood: [],
    domElem: [],
  }

  clearSelection = () => {
    if (this.state.selectedGood.length !== 0) {
      this.setState((state) => {
        state.domElem.map(elem => elem.classList.remove('selected'));

        return {
          domElem: state.domElem,
        };
      });
      this.setState({
        selectedGood: [],
        domElem: [],
      });
    }
  }

  clickHandler({ target }, good) {
    const targetElem = target.closest('li');

    if (this.state.selectedGood.includes(good)) {
      this.setState((state) => {
        const index = state.selectedGood.indexOf(good);

        state.selectedGood.splice(index, 1);
        state.domElem[index].classList.remove('selected');
        state.domElem.splice(index, 1);

        return {
          selectedGood: state.selectedGood,
          domElem: state.domElem,
        };
      });
    } else {
      this.setState((state) => {
        state.selectedGood.push(good);
        const length = state.domElem.push(targetElem);

        state.domElem[length - 1].classList.add('selected');

        return {
          selectedGood: state.selectedGood,
          domElem: state.domElem,
        };
      });
    }
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          { selectedGood.join(', ')}
          {' '}
          <button
            type="button"
            onClick={this.clearSelection}
          >
            X
          </button>
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
            >
              {`${good}  - `}
              <button
                type="button"
                onClick={e => this.clickHandler(e, good)}
              >
                Add/Remove
              </button>
            </li>
          ))
          }
        </ul>

      </div>
    );
  }
}
