import React from 'react';

export class GoodList extends React.Component {
  state = {
    goods: this.props,
  }

  render() {
    const { goods } = this.state;

    return (
      <ul>
        {this.goods.map(good => (
          <li>{good}</li>
        ))}
      </ul>
    );
  }
}
