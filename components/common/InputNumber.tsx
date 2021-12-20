import { useState } from 'react';

export const InputNumber = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="quantity">
      <span className="minus" onClick={() => setQuantity(quantity - 1)}>
        -
      </span>
      <input type="number" value={quantity} />
      <span className="plus" onClick={() => setQuantity(quantity + 1)}>
        +
      </span>
    </div>
  );
};
