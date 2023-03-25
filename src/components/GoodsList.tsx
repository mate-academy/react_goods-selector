import React from 'react';
import classNames from 'classnames';
import { GoodItem } from './GoodItem';

type Props = {
  goods: string [];
  addGood:(item: string) => void;
  removeItem:() => void;
  selectedGood: string;
};

export class GoodsList extends React.Component<Props, {}> {
  state = {};

  render() {
    const {
      goods,
      selectedGood,
      addGood,
      removeItem,
    } = this.props;

    return (
      <tbody>
        {goods.map(item => (
          <tr
            data-cy="Good"
            key={item}
            className={classNames({
              'has-background-success-light': item === selectedGood,
            })}
          >
            <GoodItem
              item={item}
              selectedGood={selectedGood}
              addGood={addGood}
              removeItem={removeItem}
            />
            <td data-cy="GoodTitle" className="is-vcentered">
              {item}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
