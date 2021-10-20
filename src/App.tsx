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

type Props = {};

type State = {
  selectedGoods: string[];
  volume: boolean;
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
    volume: false,
  };

  render() {
    const { selectedGoods, volume } = this.state;

    return (
      <div className="App">
        <svg
          width="100%"
          height="100px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="path">
            <animate
              attributeName="d"
              from="m550,60 h0"
              to="m550,60 h1100"
              dur="3s"
              begin="4.5s"
              fill="freeze"
              repeatCount="1"
            />
          </path>
          <text fontSize="38px">
            <textPath href="#path">
              CHOOSE YOUR GOODS
            </textPath>
          </text>
        </svg>
        <video
          className="video"
          autoPlay
          muted
        >
          <source src="./video/videoplayback.mp4" />
          <track kind="captions" />
        </video>
        <audio
          autoPlay
          muted={volume}
        >
          <source src="./audio/mortalKombat.mp3" />
          <track kind="captions" />
        </audio>
        <button
          type="button"
          className={`button button__volume button__volume--${volume ? 'off' : 'on'}`}
          onClick={() => {
            this.setState((state) => ({ volume: !state.volume }));
          }}
        >
          {' '}
        </button>
        <div className="lists">
          <ul className="lists__all list">
            {goodsFromServer.map(all => (
              <li key={all} className="list__all">
                {all.toLocaleUpperCase()}
                {
                  !selectedGoods.some(selected => selected === all)
                    && (
                      <button
                        type="button"
                        className="button button__add"
                        onClick={() => (
                          this.setState((state) => {
                            const newState = state.selectedGoods;

                            newState.push(all);

                            return ({ selectedGoods: newState });
                          })
                        )}
                      >
                        {' '}
                      </button>
                    )
                }
              </li>
            ))}
          </ul>
          <div className="lists__selected list">
            {
              selectedGoods.length === 0
                ? <span>NO GOODS SELECTED</span>
                : (
                  <>
                    {
                      selectedGoods.length === 1
                        ? (
                          <span>
                            {selectedGoods[0].toLocaleUpperCase()}
                            {' IS SELECTED'}
                          </span>
                        )
                        : (
                          <>
                            {selectedGoods.map((selected, index) => {
                              if (index === selectedGoods.length - 2) {
                                return (
                                  <span key={selected}>
                                    {selected.toLocaleUpperCase()}
                                    {' AND '}
                                  </span>
                                );
                              }

                              if (index === selectedGoods.length - 1) {
                                return (
                                  <span key={selected}>
                                    {selected.toLocaleUpperCase()}
                                  </span>
                                );
                              }

                              return (
                                <span key={selected}>
                                  {selected.toLocaleUpperCase()}
                                  {', '}
                                </span>
                              );
                            })}
                            {' ARE SELECTED'}
                          </>
                        )
                    }
                  </>
                )
            }
            <button
              type="button"
              className="button button__clear"
              onClick={() => (
                this.setState({ selectedGoods: [] })
              )}
            >
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
