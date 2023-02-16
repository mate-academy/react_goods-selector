import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Good } from './Good';
import { getGoods2 } from './api';
import { GoodInfo } from './GoodInfo';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedGoodId, setSelectedGoodId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const goodsFromServer = await getGoods2();

      setGoods(goodsFromServer);
    };

    fetchData();
  }, []);

  return (
    <main className="section container">
      <h1 className="title">No goods selected</h1>

      <GoodInfo goodId={selectedGoodId} />

      <h1 className="title is-flex is-align-items-center">
        Jam is selected

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" key={good.id}>
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => {
                    setSelectedGoodId(good.id);
                  }}
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
