import React from 'react';

type Props = {
  selectedGoods: string[];
  clearList(): void;
  removeGood(selected: string): void;
};

export const SelectedGoodsList: React.FC<Props> = (props) => {
  const { selectedGoods, clearList, removeGood } = props;

  return (
    <div className="lists__selected list">
      {
        selectedGoods.length === 0
          ? <span>NO GOODS SELECTED</span>
          : (
            <>
              {
                selectedGoods.length === 1
                  ? (
                    <span>
                      {selectedGoods[0].toLocaleUpperCase()}
                      <button
                        type="button"
                        className="button button__remove"
                        onClick={
                          () => {
                            removeGood(selectedGoods[0]);
                          }
                        }
                      >
                        {' '}
                      </button>
                      {' IS SELECTED'}
                    </span>
                  )
                  : (
                    <>
                      {selectedGoods.map((selected, index) => {
                        if (index === selectedGoods.length - 2) {
                          return (
                            <span key={selected}>
                              {selected.toLocaleUpperCase()}
                              <button
                                type="button"
                                className="button button__remove"
                                onClick={
                                  () => {
                                    removeGood(selected);
                                  }
                                }
                              >
                                {' '}
                              </button>
                              {' AND '}
                            </span>
                          );
                        }

                        if (index === selectedGoods.length - 1) {
                          return (
                            <span key={selected}>
                              {selected.toLocaleUpperCase()}
                              <button
                                type="button"
                                className="button button__remove"
                                onClick={
                                  () => {
                                    removeGood(selected);
                                  }
                                }
                              >
                                {' '}
                              </button>
                            </span>
                          );
                        }

                        return (
                          <span key={selected}>
                            {selected.toLocaleUpperCase()}
                            <button
                              type="button"
                              className="button button__remove"
                              onClick={
                                () => {
                                  removeGood(selected);
                                }
                              }
                            >
                              {' '}
                            </button>
                            {', '}
                          </span>
                        );
                      })}
                      {' ARE SELECTED'}
                    </>
                  )
              }
            </>
          )
      }
      <button
        type="button"
        className="button button__clear"
        onClick={
          () => {
            clearList();
          }
        }
      >
        CLEAR ALL
      </button>
    </div>
  );
};
