import React from 'react';

type Props = {
  good: string,
  onClick: (name: string) => void,
  className: string
};

export const Good: React.FC<Props> = ({
  className, good, onClick,
}) => (
  <tr
    className={className}
    data-cy="Good"
  >
    <td>
      <button
        onClick={() => onClick(good)}
        data-cy="AddButton"
        type="button"
        className="button"
      >
        +
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered ">
      {good}
    </td>
  </tr>
);
