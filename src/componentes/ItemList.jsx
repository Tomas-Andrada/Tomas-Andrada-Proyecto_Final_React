import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items, showDetail }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} showDetail={showDetail} />
      ))}
    </div>
  );
};