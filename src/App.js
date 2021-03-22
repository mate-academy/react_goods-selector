// import { ReactComponent } from '*.svg';
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

export class App extends React.Component {
  handleClick = (clickEvent) => {
    const header = document.querySelector('h1');
    const button = clickEvent.target;
    let markedGoods = [];
    const resetButton = `<button
      onclick="
        this.parentNode.textContent = 'No goods selected';
        [...document.querySelectorAll('.mark')].forEach(li =>{
          li.classList.remove('mark');
          li.lastElementChild.textContent = 'Select';
        })
      ">X</button>`;

    switch (button.textContent) {
      case 'Select':
        switchContent(
          'Cancel',
          className => button.parentElement.classList.add(className),
        );
        break;

      case 'Cancel':
        switchContent(
          'Select',
          className => button.parentElement.classList.remove(className),
        );
        break;

      default:
    }

    function switchContent(buttonText, listCallback) {
      button.textContent = buttonText;
      listCallback('mark');
      markedGoods = [...document.querySelectorAll('.mark .goodsName')];

      if (markedGoods.length === 0) {
        header.textContent = 'No goods selected';
      } else if (markedGoods.length === 1) {
        header.textContent = `${markedGoods[0].textContent} is selected `;
        header.insertAdjacentHTML('beforeend', resetButton);
      } else {
        header.textContent = markedGoods
          .reduce((text, goods, index, arr) => {
            if (index === arr.length - 1) {
              return `${text} and ${goods.textContent} are selected `;
            }

            if (index !== 0 && index !== arr.length - 1) {
              return `${text}, ${goods.textContent} `;
            }

            return `${text} ${goods.textContent} `;
          }, '');
        header.insertAdjacentHTML('beforeend', resetButton);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>No goods selected</h1>
        <ul>
          {goodsFromServer.map((goods, index) => (
            <div>
              <li>
                <span className="goodsName">{goods}</span>
                {` - `}
                <button
                  type="button"
                  onClick={this.handleClick}
                >
                  Select
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
