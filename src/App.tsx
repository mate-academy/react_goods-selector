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
  goods: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer[8],
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="head">
          {goods
            ? (`${goods} is selected`)
            : ('No goods selected')}

          {goods
       && (
         <button
           className="button"
           type="button"
           onClick={() => this.setState({ goods: '' })}
         >
           Clear
         </button>
       )}
        </h1>
        <ul>
          {goodsFromServer.map((item) => (
            <li className="list" key={item}>
              <div>{item}</div>
              {item && (
                <button
                  disabled={goods === item}
                  onClick={() => this.setState({ goods: item })}
                  className="button"
                  type="button"
                >
                  {(goods !== item) ? 'select' : 'selected'}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
