import  { useState } from 'react';
export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < (stock || 1)) {
      setCount(prevCount => prevCount + 1);
    }
  };
  
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  const handleAdd = () => {
    onAdd(count);
  };
  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      <button onClick={handleAdd} disabled={stock === 0}>Add to Cart</button>
    </div>
  );
};