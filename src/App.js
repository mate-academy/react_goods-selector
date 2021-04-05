
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
].map((item, index) => (
  // eslint-disable-next-line no-param-reassign
  item = {
    id: index,
    nameGoods: item,
  }
));

export class App extends React.Component {
  state = {
    listGoods: ['Jam'],
  }

  getSelectedGoodsList() {
    const goods = this.state.listGoods;
    const selectedCount = goods.length;

    if (selectedCount === 1) {
      return `${goods[0]} is selected`;
    }

    if (selectedCount > 1) {
      const firstPart = goods.slice(0, -1).join(', ');

      return `${firstPart} and ${goods[selectedCount - 1]} are selected`;
    }

    return 'No goods selected';
  }

  addGoods = goods => (
    this.setState(prevState => ({
      listGoods: [...prevState.listGoods, goods],
    }))
  )

  removeGoods = (goods) => {
    const { listGoods } = this.state;

    if (listGoods.includes(goods)) {
      const index = listGoods.lastIndexOf(goods);

      if (index > -1) {
        listGoods.splice(index, 1);
        this.setState({
          listGoods,
        });
      }
    }
  }

  clearList = () => {
    this.setState({
      listGoods: [],
    });
  }

  render() {
    const { listGoods } = this.state;

    return (
      <>
        <div className="alert alert-success">
          {this.getSelectedGoodsList()}
        </div>
        <div className="box">
          {goodsFromServer.map(goods => (
            <div
              key={goods.id}
            >
              <h1>{goods.nameGoods}</h1>
              <button
                type="button"
                className="btn btn-warning margin"
                onClick={() => this.addGoods(goods.nameGoods)}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-success margin"
                onClick={() => this.removeGoods(goods.nameGoods)}
              >
                Done
              </button>
              <button
                type="button"
                className="btn btn-secondary margin"
                onClick={this.clearList}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-light margin"
              >
                {(listGoods.filter(product => (
                  product === goods.nameGoods
                )).length || null) + 0}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
