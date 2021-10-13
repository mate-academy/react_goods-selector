import React from 'react';
import './App.scss';

import classNames from 'classnames';

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

interface State {
  selectedGoods: string[],
}

export default class App extends React.Component<{}, State>{
  state:State = {
    selectedGoods: [],
  };

  toggleSelectedItem = (good:string) => {
    this.setState((prevState) => {
      const goods = [...prevState.selectedGoods];

      if(goods.includes(good)) {
        
        goods.splice(goods.indexOf(good), 1)
      } else {
        goods.push(good);
      }

      return ({
        selectedGoods: goods,
      });
    });
  };

  clearSelectedGoods = () => {
    this.setState({selectedGoods: []})
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="selected-goods">
          {
          selectedGoods.length < 2
          ? 'Selected good: '
          : 'Selected goods: '
          }
          {
            selectedGoods.length
            ? selectedGoods.join(', ')
            : '-'
          }
        </h1>

          {selectedGoods.length ? (<button
            type="button"
            className="btn-clear"
            onClick={this.clearSelectedGoods}
          >
            Clear
          </button>)
          : (<button
            type="button"
            className="btn-clear"
            onClick={this.clearSelectedGoods}
            style={{visibility:'hidden'}}
          >
            Clear
          </button>)  
        }
  

        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good}
                className={classNames('list__item', {
                  list__item_selected: selectedGoods.includes(good),
                })}
            >
              <span className="list__name">{good}</span>
              <button 
                type="button"
                className={classNames('list__button', {
                  list__button_selected: selectedGoods.includes(good),
                })}
                onClick={() => {
                  this.toggleSelectedItem(good);
                }}
              >
                {
                  selectedGoods.includes(good)
                    ? 'Remove'
                    : 'Add'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}