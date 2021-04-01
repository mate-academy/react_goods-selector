import React from 'react';
import './App.scss';

import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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

export class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  clearGoodsList = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  addToList = (product) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, product],
    }));
  }

  removeFromList = (selectedProduct) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(product => product !== selectedProduct),
    }));
  }

  showGoods = (listLength) => {
    const { selectedGoods } = this.state;
    const lastProduct = listLength > 2
      && selectedGoods[selectedGoods.length - 1];

    switch (listLength) {
      case 0:
        return ' No goods selected';
      case 1:
        return ` ${selectedGoods} is selected`;
      case 2:
        return ` ${selectedGoods.join(' and ')} are selected`;
      default:
        return ` ${selectedGoods.slice(0, -1).join(', ')} `
          + ` and ${lastProduct} are selected`;
    }
  }

  buttonCreator = product => (
    <>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => this.addToList(product)}
      >
        Add to list
      </Button>
      {this.state.selectedGoods.includes(product)
        ? (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => this.removeFromList(product)}
          >
            Remove from list
          </Button>
        )
        : null
      }
    </>
  )

  render() {
    const { selectedGoods } = this.state;

    return (
      <div>
        <ul className="products">
          {
            goodsFromServer.map(product => (
              <li key={product} className="products__option">
                <h2
                  className={
                    classNames('product', {
                      product__select: selectedGoods.includes(product),
                    })
                  }
                >
                  {product}
                </h2>
                {this.buttonCreator(product)}
              </li>
            ))
          }
        </ul>
        <h1 className="goods-list">
          Selected good:
          {this.showGoods(selectedGoods.length)}
        </h1>
        {
          selectedGoods.length !== 0
            && (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={this.clearGoodsList}
              >
                Delete
              </Button>
            )
        }
      </div>
    );
  }
}
