import React from 'react';
import { AllGoodsList } from './AllGoodsList';
import { SelectedGoodsList } from './SelectedGoodsList';

type Props = {
  goodsList: string[];
};
type State = {
  selectedGoods: string[];
};

export class Lists extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => {
      const newState = state.selectedGoods;

      newState.push(good);

      return ({ selectedGoods: newState });
    });
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  removeGood = (good: string) => {
    this.setState((state) => {
      const newState = state.selectedGoods;

      newState.splice(newState.findIndex(item => item === good), 1);

      return ({ selectedGoods: newState });
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const { goodsList } = this.props;

    return (
      <div className="lists">
        <AllGoodsList
          goodsList={goodsList}
          selectedGoods={selectedGoods}
          selectGoods={this.selectGood}
        />
        <SelectedGoodsList
          selectedGoods={selectedGoods}
          clearList={this.clearList}
          removeGood={this.removeGood}
        />
      </div>
    );
  }
}
