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
  selectedGood : string[];
  checked2: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
    checked2: [],
  };

  renderGoods = (goods: string[]): string => {
    if (goods.length > 1) {
      return `${goods.slice(0, goods.length - 1).join(', ')}
      and ${goods[goods.length - 1]}`;
    }

    return goods[0];
  };

  changeItem = (item: string) => {
    const { selectedGood } = this.state;

    if (selectedGood.includes(item)) {
      this.setState(prevState => ({
        selectedGood: prevState.selectedGood.filter(good => good !== item),
      }));
    } else {
      this.setState({ selectedGood: [...selectedGood, item] });
    }
  };

  render() {
    const { selectedGood, checked2 } = this.state;

    return (
      <div className="container-sm">
        <h1 className="fs-3 pb-5">
          {selectedGood.length < 1
            ? 'No goods selected'
            : this.renderGoods(selectedGood)}
        </h1>
        <ul className="list-group">
          {goodsFromServer.map(item => (
            <li
              key={goodsFromServer.indexOf(item)}
              className={`list-group-item row d-flex align-items-center fw-bold ${selectedGood.includes(item) && 'active'} `}
            >
              <p className="col-2 align-self-end">{item}</p>
              <button
                type="button"
                onClick={() => this.changeItem(item)}
                className={`btn btn-${!selectedGood.includes(item) ? 'primary' : 'danger'} btn-sm m-2 col-2 fw-bold`}
              >
                {selectedGood.includes(item) ? 'Remove' : 'Select'}
              </button>
              { !selectedGood.includes(item)
              && (
                <div className="checkbox col-auto">
                  <input
                    type="checkbox"
                    id={item}
                    value={item}
                    onChange={() => (
                      this.setState({ checked2: [...checked2, item] }))}
                    className="me-2"
                  />
                  <label htmlFor={item}>
                    Chose
                  </label>
                </div>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-danger my-3 me-2 fw-bold"
          onClick={() => this.setState({ selectedGood: [] })}
        >
          Clear
        </button>
        <button
          className="btn btn-success my-3 fw-bold"
          type="button"
          onClick={() => (
            this.setState({ selectedGood: [...selectedGood, ...checked2] }))}
        >
          Add checked
        </button>
      </div>
    );
  }
}

export default App;
