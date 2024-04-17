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

    const [selectedGood, setSelectedGood] = useState('Jam');

    const handleChange = (good: string) => {
      good === selectedGood ? setSelectedGood('') : setSelectedGood(good);
    }

    return (
      <>
          <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {`${selectedGood !== '' ? `${selectedGood} is selected` : 'No goods selected'}`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            {selectedGood !== '' && (
                <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood('')}
              />
            )
            }

      </h1>

      <table className="table">
            <tbody>
                {goods.map((good, index) => (
                  <tr
                    data-cy="Good"
                    className={`${good === selectedGood && ('has-background-success-light')}`}
                  >
                          <td>
                      <button
                        key={index}
                        value={good}
                        onClick={() => handleChange(good)}
                        data-cy={`${good === selectedGood ? 'RemoveButton' : 'AddButton'}`}
                        type="button"
                        className={`${good === selectedGood && ('is-info')} button`}>
                              {good === selectedGood ? '-' : '+'}
                            </button>
                          </td>

                          <td data-cy="GoodTitle" className="is-vcentered">
                            {good}
                          </td>
                        </tr>
                ))}

        </tbody>
      </table>
    </main>
      </>

    )

    };
