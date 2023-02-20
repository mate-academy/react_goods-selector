import React from 'react';
import { Good } from '../../types/Good';

interface Props {
  goods: Good[];
  selectGood: (goodId: number) => void;
  deleteGood: (goodId: number) => void;
}

export const GoodsList: React.FC<Props> = ({
  goods,
  selectGood,
  deleteGood,
}) => (
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
                selectGood(good.id);
              }}
            >
              +
            </button>
          </td>

          <td
            data-cy="GoodTitle"
            className="is-vcentered"
            style={{ background: good.color }}
          >
            {good.name}
          </td>

          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => {
                deleteGood(good.id);
              }}
            >
              X
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
