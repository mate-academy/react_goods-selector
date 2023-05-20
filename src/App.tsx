import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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

export const App: React.FC = () => {
  const [name, setName] = useState('Nothing');
  const [clicked, setClicked] = useState(false);

  function clear() {
    setClicked(false);
    const tbody: any = document.querySelectorAll('tbody');
    const tbodyArray = [...tbody[0].childNodes];

    for (let i = 0; i < tbodyArray.length; i += 1) {
      const buttonClass = tbodyArray[i].childNodes[0].childNodes[0].className;

      if (buttonClass === 'button is-info') {
        tbodyArray[i].childNodes[0].childNodes[0].className = 'button';
        tbodyArray[i].childNodes[0].childNodes[0].childNodes[0].data = '+';
      }
    }

    setName('Nothing');
  }

  function goodChoice(event: React.MouseEvent<HTMLButtonElement>) {
    const copyEvent = event.currentTarget;

    if (clicked === true) {
      clear();
      setClicked(false);
    } else {
      clear();
      setName(event.currentTarget.parentNode?.nextSibling?.textContent || '');
      copyEvent.textContent = '-';
      copyEvent.className = 'button is-info';
      setClicked(true);
    }
  }

  return (

    <main className="section container">
      <h1 className="title">No goods selected</h1>

      <h1 className="title is-flex is-align-items-center">
        {name}
        is selected

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {clicked === true
          ? (
            <button
              aria-label="hide and clear"
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={clear}
            />
          ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good: string) => (
            <tr data-cy="Good" key={good}>
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={(event) => {
                    goodChoice(event);
                }}>
                +
                </button>
              </td>
              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
