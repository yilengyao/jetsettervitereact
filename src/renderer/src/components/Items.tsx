import React from 'react';
import Item, { ItemType } from './Item';

interface defaultProps {
  title: string;
  items: ItemType[];
  onCheckOff: (item: ItemType) => void;
  onDelete: (item: ItemType) => void;
}

const Items: React.FC<defaultProps> = ({ title, items, onCheckOff, onDelete }) => {
  return (
    <section className="Items">
      <h2>{title}</h2>
      {items.map((item) => (
        <Item key={item.id} {...item} onCheckOff={() => onCheckOff(item)} onDelete={() => onDelete(item)}/>
      ))}
    </section>
  );
};

export default Items;
