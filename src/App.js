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
    good: ['Jam '],
  }

  render() {
    const { good } = this.state;
    const fileteredGoods = good.join(', ');

    return (
      <>
        <div className="header__wrapper">
          {good.length >= 1 ? (
            <h1>
              {`${fileteredGoods} selected`}
              <Button
                type="button"
                name="reset"
                onClick={() => {
                  this.setState({ good: [] });
                }}
              />
            </h1>
          ) : (<h1>No goods selected</h1>)}
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
                          { good: state.good.filter(
                            product => product !== element,
                          ) }));
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
