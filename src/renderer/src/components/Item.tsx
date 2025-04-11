import React from 'react';

export interface ItemType {
  id: number;
  value: string;
  packed: boolean;
}

interface ItemProps extends ItemType {
  onCheckOff: () => void;
}

const Item: React.FC<ItemProps> = ({ packed, value, onCheckOff }) => {
  return (
    <article className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={onCheckOff} />
        {value}
      </label>
    </article>
  );
};

export default Item;
