import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';

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
    good: ['Jam'],
  }

  getGoodsLength = () => {
    const { good } = this.state;

    if (good.length === 0) {
      return `No goods selected`;
    }

    if (good.length === 1) {
      return `${good[0]} is selected`;
    }

    return `${good.slice(0, -1).join(', ')}
      and ${good[good.length - 1]} are selected`;
  }

  render() {
    const { good } = this.state;
    const { getGoodsLength } = this;

    return (
      <>
        <div className="header__wrapper">
          <h1>
            {getGoodsLength()}
          </h1>
          <Button
            type="button"
            name="reset"
            onClick={() => {
              this.setState({ good: [] });
            }}
          />
          <ul className="list__wrapper">
            {goodsFromServer.map(element => (
              <>
                <li
                  key={uuidv4()}
                  className={'list'
                    + ` ${good.includes(element) ? 'active' : 'inactive'}`}
                >
                  {element}
                  <Button
                    className={`${good.includes(element)
                      ? 'active' : 'inactive'}`}
                    type="button"
                    name={good.includes(element) ? 'remove' : 'add to list'}
                    onClick={() => {
                      if (this.state.good.includes(element)) {
                        return this.setState(state => (
                          {
                            good: good.filter(
                              product => product !== element,
                            ),
                          }));
                      }

                      this.setState({
                        good: [...good, element],
                      });

                      return '';
                    }}
                  />
                </li>
              </>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
