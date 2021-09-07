import React from 'react';

interface Props {
  goods: string[];
  addedToCart: string[];
  removeGood: (good:string) => void;
  addGood: (good:string) => void;
}

export const GoodsList: React.FC<Props> = (props) => {
  const {
    goods,
    addedToCart,
    removeGood,
    addGood,
  } = props;

  return (
    <div className="Goods">
      {goods.length && (
        goods.map((good: string) => (
          <div className="GoodItem">
            <h3 key={good} className={!addedToCart.includes(good) ? ('text-primary') : ('text-light bg-dark')}>{good}</h3>
            {!addedToCart.includes(good) && (
              <button
                type="submit"
                onClick={() => {
                  addGood(good);
                }}
                className="btn btn-primary"
              >
                Add
              </button>
            )}
            {addedToCart.includes(good) && (
              <button
                type="submit"
                onClick={() => {
                  removeGood(good);
                }}
                className="btn btn-danger"
              >
                X
              </button>
            )}
          </div>
        )))}
    </div>
  );
};
