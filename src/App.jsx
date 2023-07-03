import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';
import { useState } from 'react';

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

export const App = () => {
  const [selectGoods, setSelectGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        { selectGoods
          ? `${selectGoods} is selected`
          : 'No goods selected'
        }

        {selectGoods && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectGoods('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => {
            const isSelected = item === selectGoods;

            return (
              <tr
                data-cy="Good"
                className={classnames({
                  'has-background-success-light': isSelected,
                })}
              >

                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={isSelected
                      ? 'button is-info'
                      : 'button'
                    }
                    onClick={() => {
                      setSelectGoods(item);
                    }}
                  >
                    {isSelected
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </main>
  );
};
