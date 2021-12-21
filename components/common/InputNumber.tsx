import { useState } from 'react';

export const InputNumber = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = () => {
    console.log('s');
  };
  return (
    <div className="quantity">
      <span className="minus" onClick={() => setQuantity(quantity - 1)}>
        -
      </span>
      <input type="number" value={quantity} onChange={handleQuantity} />
      <span className="plus" onClick={() => setQuantity(quantity + 1)}>
        +
      </span>
    </div>
  );
};
