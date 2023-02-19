import React, { useEffect, useState } from 'react';
import { Good } from '../../types/Good';
import { getGoodById } from '../../api/api';

type Props = {
  goodId: number;
};

export const GoodInfo: React.FC<Props> = ({ goodId }) => {
  const [good, setGood] = useState<Good | null>(null);

  const getGood = async (id: number) => {
    try {
      const response = id === 0
        ? null
        : await getGoodById(id);

      setGood(response);
    } catch (error) {
      // process errors
    }
  };

  useEffect(() => {
    getGood(goodId);
  }, [goodId]);

  return (
    <p>
      {good?.name}
    </p>
  );
};
