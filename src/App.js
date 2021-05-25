import React from 'react';
import classNames from 'classnames';
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
    goods: ['Jam'],
    titleStatus: true,
  };

  changeTitle() {
    const lengthArr = [...this.state.goods].sort((a, b) => (
      a.localeCompare(b)));

    switch (lengthArr.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${lengthArr[0]} is selected`;

      default:
        return `${lengthArr.splice(0, lengthArr.length - 1).join(', ')}`
        + ` and ${lengthArr[lengthArr.length - 1]} are selected!`;
    }
  }

  addGood(product) {
    this.setState(state => ({
      goods: [...state.goods, product],
      titleStatus: true,
    }));
  }

  deleteGood(product) {
    this.setState(state => ({
      goods: state.goods.filter(
        element => element !== product,
      ),
    }));

    if (this.state.goods.length === 1) {
      this.setState({ titleStatus: false });
    }
  }

  clearСache() {
    this.setState({
      goods: [], titleStatus: false,
    });
  }

  render() {
    const { titleStatus } = this.state;
    const { goods } = this.state;

    return (
      <main>
        <section className="container">
          <h1 className="title">
            {this.changeTitle()}
            {titleStatus && (
              <button
                type="button"
                onClick={() => this.clearСache()}
                className="button_title button"
              >
                Clear
              </button>
            )}
          </h1>

          <ul className="list">
            {goodsFromServer.map(name => (
              <li
                key={name}
                className={classNames('item', {
                  active: goods.includes(name),
                })}
              >
                {name}

                {goods.includes(name) ? (
                  <button
                    className="remove button"
                    onClick={() => this.deleteGood(name)}
                    type="button"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="select button"
                    onClick={() => this.addGood(name)}
                    type="button"
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default App;
