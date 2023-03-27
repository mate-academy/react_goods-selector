import React from 'react';

type Props = {
  item: string;
  selectedGood: string;
  addGood:(item: string) => void;
  removeItem:() => void;
};

export class GoodItem extends React.Component<Props, {}> {
  state = {};

  render() {
    const {
      item,
      selectedGood,
      addGood,
      removeItem,
    } = this.props;

    return (
      <td>
        {item === selectedGood
          ? (
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={removeItem}
            >
              -
            </button>
          ) : (
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => addGood(item)}
            >
              +
            </button>
          )}
      </td>
    );
  }
}
