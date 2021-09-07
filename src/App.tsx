import classNames from 'classnames';
import React from 'react';
// import classNames from 'classnames';

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
  message: string,
  selectedGood: string | null,
  selectedId: number,
};

class App extends React.Component<{}, State> {
  state = {
    message: 'No goods selected',
    selectedGood: 'Jam',
    selectedId: 8,
  };

  componentDidMount() {
    const { selectedGood } = this.state;
    const test = Array.from(document.getElementsByClassName('goods-selector__list-item active') as HTMLCollectionOf<HTMLElement>);

    test[0].getElementsByTagName('button')[0].style.visibility = 'hidden';
    this.setState({ message: `${selectedGood} is selected` });
  }

  render() {
    return (
      <div className="App">
        <div className="goods-selector">
          <div className="container">
            <div className="row">
              <div className="goods-selector__header-container">
                <h1 className="goods-selector__header">
                  {'Selected goods: '}
                  <br />
                  <strong className="goods-selector__header-message">{this.state.message}</strong>
                </h1>
                <button
                  type="button"
                  className="goods-selector__header-button btn btn-dark"
                  onClick={(event) => {
                    const eventHendle = event;

                    eventHendle.currentTarget.style.visibility = 'hidden';
                    const test = Array.from(document.getElementsByClassName('goods-selector__list-item active') as HTMLCollectionOf<HTMLElement>);

                    test[0].classList.remove('active');
                    test[0].getElementsByTagName('button')[0].style.visibility = 'visible';
                    this.setState({ message: 'No goods selected' });
                  }}
                >
                  X
                </button>
              </div>
              <ul className="goods-selector__list col">
                {goodsFromServer.map((good, index) => {
                  return (
                    <li key={good} className={classNames('goods-selector__list-item list-group-item ', { active: this.state.selectedId === index })}>
                      {good}
                      <button
                        type="button"
                        className="btn btn-primary goods-selector__list-button"
                        onClick={(event) => {
                          this.setState(currentState => {
                            if (currentState.selectedGood !== good) {
                              this.setState({
                                selectedGood: good,
                                selectedId: goodsFromServer.indexOf(good),
                                message: `${good} is selected`,
                              });
                            }
                          });
                          const eventHendle = event;

                          eventHendle.currentTarget.style.visibility = 'hidden';
                          const test = Array.from(document.getElementsByClassName('goods-selector__list-button') as HTMLCollectionOf<HTMLElement>);

                          test.forEach((element) => {
                            if (element !== eventHendle.currentTarget) {
                              const el = element;

                              el.style.visibility = 'visible';
                            }
                          });

                          const btnHeader = document.querySelector('.goods-selector__header-button') as HTMLButtonElement;

                          if (btnHeader.style.visibility === 'hidden') {
                            btnHeader.style.visibility = 'visible';
                          }
                        }}
                      >
                        Select
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
