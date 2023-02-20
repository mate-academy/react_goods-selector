import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import {
  addGood, editGood, getGoods, removeGood,
} from './api/api';
import { GoodInfo } from './components/GoodInfo';
import { Good } from './types/Good';
import { AddGoodForm } from './components/AddGoodForm';
import { getColorById } from './utils/getColorById';
import colors from './api/colors';
import { GoodsList } from './components/GoodsList';
import { EditGoodForm } from './components/EditGoodForm';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedGoodId, setSelectedGoodId] = useState(0);
  const [editGoodId, setEditGoodId] = useState(0);

  const fetchAllGoods = async () => {
    const goodsFromServer = await getGoods();

    setGoods(goodsFromServer);
  };

  useEffect(() => {
    fetchAllGoods();
  }, []);

  const addNewGood = async (name: string, colorId: number) => {
    const color = getColorById(colorId, colors);

    await addGood(name, color?.name || 'white');
    await fetchAllGoods();
  };

  const deleteGood = async (goodId: number) => {
    await removeGood(goodId);
    await fetchAllGoods();
  };

  const selectGood = (goodId: number) => {
    setSelectedGoodId(goodId);
  };

  const setEditGood = (goodId: number) => {
    setEditGoodId(goodId);
  };

  const editGoodColor = async (goodId: number, colorId: number) => {
    const color = getColorById(colorId, colors);

    await editGood(goodId, color?.name || 'white');
    await fetchAllGoods();
    setEditGoodId(0);
  };

  return (
    <main className="section container">
      <h1 className="title">No goods selected</h1>

      <GoodInfo goodId={selectedGoodId} />

      <GoodsList
        goods={goods}
        selectGood={selectGood}
        deleteGood={deleteGood}
        setEditGood={setEditGood}
      />

      {editGoodId !== 0 && (
        <EditGoodForm
          goodId={editGoodId}
          editGood={editGoodColor}
        />
      )}

      <AddGoodForm addNewGood={addNewGood} />
    </main>
  );
};
