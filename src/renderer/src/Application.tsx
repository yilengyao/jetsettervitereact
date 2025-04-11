import React, { useState } from 'react';
import NewItem from './components/NewItem';
import Items from './components/Items';
import { ItemType } from './components/Item';

const Application: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([
    { value: 'Pants', id: Date.now(), packed: false },
  ]);

  const addItem = (item: ItemType) => {
    setItems([...items, item]);
  };

  const markAsPacked = (item: ItemType) => {
    const otherItems = items.filter((i) => i.id !== item.id);
    const updatedItem = { ...item, packed: !item.packed };
    setItems([...otherItems, updatedItem]);
  };

  const markAllAsUnpacked = () => {
    const markedItems = items.map((item) => ({ ...item, packed: false }));
    setItems(markedItems);
  };

  const unpackedItems = items.filter((item) => !item.packed);
  const packedItems = items.filter((item) => item.packed);

  return (
    <div className="Application">
      <NewItem onSubmit={addItem} />
      <Items title="Unpacked Items" items={unpackedItems} onCheckOff={markAsPacked} />
      <Items title="Unpacked Items" items={packedItems} onCheckOff={markAsPacked} />
      <button className="button fullWidth" onClick={markAllAsUnpacked}>
        Mark All As Unpacked
      </button>
    </div>
  );
};

export default Application;
