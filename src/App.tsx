import React, { useEffect, useState } from 'react';
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

type Props = {
  select: string,
  name: string,
  switchSelect: (name: string) => void
};

const Element: React.FC<Props> = ({ select, name, switchSelect }) => {
  const [check, setCheck] = useState<boolean>(select === name);

  useEffect(() => {
    setCheck(select === name);
  }, [select]);

  return (
    <tr
      data-cy="Good"
      className={check ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          data-cy={check ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={check ? 'button is-info' : 'button'}
          onClick={() => {
            switchSelect(!check ? name : '');
          }}
        >
          {check ? '-' : '+' }
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
};

export const App: React.FC = () => {
  const [select, setSelect] = useState<string>('Jam');

  return (
    <main className="section container">
      {!select && <h1 className="title">No goods selected</h1>}

      {select && (
        <h1 className="title is-flex is-align-items-center">
          {`${select} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelect('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods
            .map((el: string) => (
              <Element
                select={select}
                name={el}
                switchSelect={setSelect}
                key={el}
              />
            ))}
        </tbody>
      </table>
    </main>
  );
};
