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
  goods: string[]
};

export class App extends React.Component<{}, State> {
  state = {
    goods: ['jam'],
  };

  createMessage = () => {
    const { goods } = this.state;

    switch (goods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${goods[0]} is selected`;

      case 2:
        return `${goods.join(' and ')} are selected`;

      default:
        return `${goods.slice(0, -1).join(', ')} and ${
          goods[goods.length - 1]} are selected`;
    }
  };

  goodSelected = (good: string) => {
    this.setState((prevState) => ({
      goods: [...prevState.goods, good],
    }));
  };

  goodRemoved = (good: string) => {
    this.setState((prevState) => ({
      goods: prevState.goods.filter(item => item !== good),
    }));
  };

  clear = () => {
    this.setState({ goods: [] });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.createMessage()}
          {' '}

          <button
            className="button ClearButton"
            type="button"
            onClick={() => this.clear()}
          >
            Clear
          </button>
        </h1>

        <br />

        <ul className="goodsList">
          {goodsFromServer.map((good) => {
            const buttonText = goods.includes(good) ? 'Remove' : 'Select';
            const handleClick = () => (goods.includes(good)
              ? this.goodRemoved(good)
              : this.goodSelected(good));

            return (
              <label
                className=""
                key={good}
              >
                <li className="">{good}</li>

                <button
                  className="button SelectionButton"
                  type="button"
                  onClick={handleClick}
                >
                  {buttonText}
                </button>
              </label>
            );
          })}
        </ul>
      </div>
    );
  }
}
