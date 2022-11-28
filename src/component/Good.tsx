import React from 'react';

type Props = {
  good: string,
  onClick: (name: string) => void,
  classNameGood: string,
  classNameButton: string,
  buttonInfo: string
};

export const Good: React.FC<Props> = ({
  classNameGood, good, onClick, classNameButton, buttonInfo,
}) => (
  <tr
    className={classNameGood}
    data-cy="Good"
  >
    <td>
      <button
        onClick={() => onClick(good)}
        data-cy="RemoveButton"
        type="button"
        className={classNameButton}
      >
        {buttonInfo === 'false' ? '+' : buttonInfo}
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
