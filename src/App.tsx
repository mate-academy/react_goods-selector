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
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  renderGoods = (goods: string[]): string => {
    if (goods.length > 1) {
      const string = goods.slice(0, goods.length - 1).join(', ');
      const endOfstring = goods[goods.length - 1];

      return `${string} and ${endOfstring} is selected`;
    }

    return `${goods[0]} is selected`;
  };

  changeList = (item: string) => {
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
    const { selectedGood } = this.state;

    return (
      <div className="container-sm">
        <h1 className="fs-3 pb-5">
          {selectedGood.length < 1
            ? 'No goods selected'
            : this.renderGoods(selectedGood)}
        </h1>
        <ul className="list-group list d-flex justify-content-between">
          {goodsFromServer.map(item => (
            <li
              key={goodsFromServer.indexOf(item)}
              className={`list-group-item row d-flex align-items-center justify-content-between fw-bold ${selectedGood.includes(item) && 'active'} `}
            >
              <p className="col-2 align-self-end">{item}</p>
              <button
                type="button"
                onClick={() => this.changeList(item)}
                className={`btn btn-${!selectedGood.includes(item) ? 'primary' : 'danger'} btn-sm m-2 col-2 fw-bold`}
              >
                {selectedGood.includes(item) ? 'Remove' : 'Select'}
              </button>
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
      </div>
    );
  }
}

export default App;
