import React, { FormEvent, useState } from 'react';
import colors from '../../api/colors';

interface Props {
  addNewGood: (name: string, colorId: number) => void;
}

export const AddGoodForm: React.FC<Props> = ({ addNewGood }) => {
  const [goodName, setGoodName] = useState('');
  const [hasNameError, setHasNameError] = useState(false);

  const [goodColorId, setGoodColorId] = useState(0);
  const [hasColorError, setHasColorError] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setGoodName(value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setGoodColorId(+value);
  };

  const resetForm = () => {
    setGoodName('');
    setGoodColorId(0);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setHasNameError(!goodName);
    setHasColorError(!goodColorId);

    if (goodName && goodColorId) {
      addNewGood(goodName, goodColorId);

      resetForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={goodName}
        onChange={handleInput}
      />

      {hasNameError && (
        <span>Name is empty</span>
      )}

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
