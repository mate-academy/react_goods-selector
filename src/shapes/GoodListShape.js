import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodListShape = {
  preparedGoods: PropTypes.arrayOf(GoodShape).isRequired,
  selectTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
