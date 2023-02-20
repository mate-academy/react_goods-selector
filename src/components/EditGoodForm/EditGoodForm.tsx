import React, { FormEvent, useState } from 'react';
import colors from '../../api/colors';

interface Props {
  goodId: number;
  editGood: (goodId: number, colorId: number) => void;
}

export const EditGoodForm: React.FC<Props> = ({ goodId, editGood }) => {
  const [goodColorId, setGoodColorId] = useState(0);
  const [hasColorError, setHasColorError] = useState(false);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setGoodColorId(+value);
  };

  const resetForm = () => {
    setGoodColorId(0);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setHasColorError(!goodColorId);

    if (goodColorId) {
      editGood(goodId, goodColorId);

      resetForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <select
        value={goodColorId}
        onChange={handleSelect}
      >
        <option value="0" disabled>Choose a color</option>

        {colors.map((color) => (
          <option
            key={color.id}
            value={color.id}
          >
            {color.name}
          </option>
        ))}
      </select>

      {hasColorError && (
        <span>Color is empty</span>
      )}

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
