import React from 'react';
import classNames from 'classnames/bind';

import styles from './App.scss';

const cn = classNames.bind(styles);

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
    selectedGood: 'No goods selected',
    goods: [],
    buttonСleanHiden: true,
  }

  componentDidMount() {
    this.setState({
      goods: goodsFromServer.map(good => {
        return {
          'name': good,
          'hiden': false,
          'selected': false,
        };
      }),
    });
  }

  clickHandlerSelectedGood = () => {
    this.setState((state) => ({
      selectedGood: 'No goods selected',
      buttonСleanHiden: true,
      goods: state.goods.map(elem => {
        return {
          'name': elem.name,
          'hiden': false,
          'selected': false,
        };
      }),
    }));
  }

  clickHandlerGood = (good) => {
    this.setState((state) => ({
      selectedGood: `${good} is selected`,
      buttonСleanHiden: false,
      goods: state.goods.map(elem => {
        return {
          'name': elem.name,
          'hiden': elem.name === good ? true : false,
          'selected': elem.name === good ? true : false,
        };
      }),
    }));
  }

  render() {
    const { selectedGood, goods, buttonСleanHiden } = this.state;
    const buttonСleanClassName = cn(
      'buttonСlean',
      { hiden: buttonСleanHiden }
    );

    return (
      <div className="App">
        <div className="selectedGood">
          <h1>
            Selected good: -
            {selectedGood}
          </h1>
          <button
            type="button"
            className={buttonСleanClassName}
            onClick={this.clickHandlerSelectedGood}
          >
            X
          </button>
        </div>

        <ul>
          {goods.map((good) => {
            const goodName = good.name.split(' ').join('-');
            const classNameGood = cn(
              'good',
              {goodName},
              {selected: good.selected}
            );
            const classNameButton = cn(
              'button',
              {goodName},
              {hiden: good.hiden}
            );

            return (
              <li key={good.name}>
                <div className="goodBox">
                  <div className={classNameGood}>
                    <p className="goodName">
                      {good.name}
                    </p>
                  </div>
                  <div className="buttonBox">
                    <button
                      type="button"
                      className={classNameButton}
                      onClick={() => {
                        this.clickHandlerGood(good.name);
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
