import React from 'react';

interface Props {
  type: string,
  className: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  // eslint-disable-next-line react/require-default-props
  name?: string,
}

export class Button extends React.PureComponent<Props, {}> {
  render(): React.ReactNode {
    const {
      type,
      className,
      onClick,
      name = '',
    } = this.props;

    return (
      <button
        data-cy={type}
        type="button"
        className={className}
        onClick={onClick}
      >
        {name && name}
      </button>
    );
  }
}
