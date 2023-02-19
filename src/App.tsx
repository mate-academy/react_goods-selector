import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { getGoods } from './api/api';
import { GoodInfo } from './components/GoodInfo';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedGoodId, setSelectedGoodId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const goodsFromServer = await getGoods();

      setGoods(goodsFromServer);
    };

    fetchData();
  }, []);

  return (
    <main className="section container">
      <h1 className="title">No goods selected</h1>

      <GoodInfo goodId={selectedGoodId} />

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
