import React, { useState, useEffect } from 'react';
import NewItem from './components/NewItem';
import Items from './components/Items';
import { ItemType } from './components/Item';

const Application: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  }, []);

  const addItem = (item: ItemType) => {
    window.api.database.addItem(item);
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  };

  const markAsPacked = (item: ItemType) => {
    window.api.database.markAsPacked(item.id);
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  };

  const markAllAsUnpacked = () => {
    window.api.database.markAllAsUnpacked();
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  };

  const deleteItem = (item: ItemType) => {
    window.api.database.deleteItem(item.id);
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  };

  const deleteUnpackedItems = () => {
    window.api.database.deleteUnpackedItems();
    window.api.database.fetchItems().then((items: ItemType[]) => {
      setItems(items);
    });
  };

  const unpackedItems = items.filter((item) => !item.packed);
  const packedItems = items.filter((item) => item.packed);

  return (
    <div className="Application">
      <NewItem onSubmit={addItem} />
      <Items title="Unpacked Items" items={unpackedItems} onCheckOff={markAsPacked} onDelete={deleteItem} />
      <Items title="Packed Items" items={packedItems} onCheckOff={markAsPacked} onDelete={deleteItem} />
      <button className="button fullWidth" onClick={markAllAsUnpacked}>
        Mark All As Unpacked
      </button>
      <button className="button fullWidth" onClick={deleteUnpackedItems}>
        Delete Unpacked Items
      </button>
    </div>
  );
};

export default Application;
