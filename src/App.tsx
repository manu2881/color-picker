import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div className="color-options">
        <div
          className={`color-option ${
            selectedColor === 'red' ? 'selected' : ''
          }`}
          onClick={() => handleColorSelect('red')}
          style={{ backgroundColor: 'red' }}
        >
          RED
        </div>
        <div
          className={`color-option ${
            selectedColor === 'blue' ? 'selected' : ''
          }`}
          onClick={() => handleColorSelect('blue')}
          style={{ backgroundColor: 'blue' }}
        >
          BLUE
        </div>
        <div
          className={`color-option ${
            selectedColor === 'green' ? 'selected' : ''
          }`}
          onClick={() => handleColorSelect('green')}
          style={{ backgroundColor: 'green' }}
        >
          GREEN
        </div>
      </div>
      {selectedColor && (
        <p>
          Selected Color:{' '}
          <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
}

export default ColorPicker;
