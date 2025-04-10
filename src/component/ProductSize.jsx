import React, { useState } from 'react';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const ProductSize = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedSize(eventKey);
  };

  return (
    <DropdownButton
      as={ButtonGroup}
      id="dropdown-size"
      variant="danger"
      title={selectedSize || '사이즈 선택'}
      onSelect={handleSelect}
      className="my-3"
    >
      {sizes.map((size, index) => (
        <Dropdown.Item
          eventKey={size}
          key={index}
          active={selectedSize === size}
        >
          {size}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default ProductSize;
