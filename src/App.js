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
    selectedGood: null,
    goods: null,
    buttons: null,
    buttonСlean: null,
  }

  componentDidMount() {
    const app = document.querySelector('.App');
    const goods = [...app.querySelectorAll('.good')];
    const buttons = [...app.querySelectorAll('.button')];
    const buttonСlean = app.querySelector('.buttonСlean');

    this.setState({
      selectedGood: 'No goods selected',
      goods,
      buttons,
      buttonСlean,
    });
  }

  clickHandlerSelectedGood = () => {
    const { goods, buttons, buttonСlean } = this.state;

    this.setState({ selectedGood: 'No goods selected' });

    buttonСlean.classList.remove('show');
    buttonСlean.classList.add('hiden');

    goods.forEach((elem) => {
      elem.classList.remove('selected');
    });

    buttons.forEach((elem) => {
      elem.classList.remove('hiden');
    });
  }

  clickHandlerGood = (good) => {
    const { goods, buttons, buttonСlean } = this.state;

    this.setState({ selectedGood: `${good} is selected` });

    buttonСlean.classList.remove('hiden');
    buttonСlean.classList.add('show');

    goods.forEach((elem) => {
      elem.classList.remove('selected');

      if (elem.classList.contains(good.split(' ').join('-'))) {
        elem.classList.add('selected');
      }
    });

    buttons.forEach((elem) => {
      elem.classList.remove('hiden');

      if (elem.classList.contains(good.split(' ').join('-'))) {
        elem.classList.add('hiden');
      }
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="selectedGood">
          <h1>
            Selected good: -
            {selectedGood}
          </h1>
          <button
            type="button"
            className="buttonСlean hiden"
            onClick={() => {
              this.clickHandlerSelectedGood();
            }}
          >
            X
          </button>
        </div>

        <ul>
          {goodsFromServer.map((good) => {
            const goodName = good.split(' ').join('-');
            const classNameGood = `good ${goodName}`;
            const classNameButton = `button ${goodName}`;

            return (
              <li key={good}>
                <div className="goodBox">
                  <div className={classNameGood}>
                    <p>{good}</p>
                  </div>
                  <div className="buttonBox">
                    <button
                      type="button"
                      className={classNameButton}
                      onClick={() => {
                        this.clickHandlerGood(good);
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
