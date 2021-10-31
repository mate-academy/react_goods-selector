import React from 'react';

type Props = {
  goodsList: string[];
  selectedGoods: string[];
  selectGoods(all: string): void;
};

export const AllGoodsList: React.FC<Props> = (props) => {
  const { goodsList, selectedGoods, selectGoods } = props;

  return (
    <ul className="lists__all list">
      {goodsList.map(all => (
        <li key={all} className="list__all">
          {all.toLocaleUpperCase()}
          {
            !selectedGoods.some(selected => selected === all)
                && (
                  <button
                    type="button"
                    className="button button__add"
                    onClick={() => {
                      selectGoods(all);
                    }}
                  >
                    {' '}
                  </button>
                )
          }
        </li>
      ))}
    </ul>
  );
};
