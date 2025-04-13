import React from 'react';

export interface ItemType {
  id: number;
  value: string;
  packed: boolean;
}

interface ItemProps extends ItemType {
  onCheckOff: () => void;
  onDelete: () => void;
}

const Item: React.FC<ItemProps> = ({ packed, value, onCheckOff, onDelete }) => {
  return (
    <article className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={onCheckOff} />
        {value}
      </label>
      <button className="delete" onClick={onDelete}>❌</button>
    </article>
  );
};

export default Item;
