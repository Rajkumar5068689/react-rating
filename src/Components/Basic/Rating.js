import React, { useEffect, useState } from "react";

const CustomRating = ({ max, value, handleInputChange, name, readonly }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setSelectedValue(+value);
  }, [value]);

  const getColorForRating = (rating) => {
    if (selectedValue >= 1 && rating <= selectedValue) {
      switch (rating) {
        case 1: return '#ff4d4d';
        case 2: return '#ff6666';
        case 3: return '#ff8080';
        case 4: return '#ff9999';
        case 5: return '#ffb366';
        case 6: return '#ffd633';
        case 7: return '#ffff66';
        case 8: return '#ccff66';
        case 9: return '#80ff80';
        default: return '#33cc33';
      }
    } else {
      return '#f0f0f0';
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px' }}>
      {Array.from({ length: max }).map((_, index) => {
        const ratingValue = index + 1;
        const isSelected = selectedValue >= ratingValue;

        return (
          <button
            key={ratingValue}
            name={name}
            value={selectedValue}
            onClick={() => {
              if (!readonly) {
                setSelectedValue(ratingValue);
                handleInputChange({ target: { name, value: ratingValue } });
              }
            }}
            style={{
              backgroundColor: isSelected ? getColorForRating(ratingValue) : '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '6px',
              width: '40px',
              height: '40px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: isSelected ? '#fff' : '#555',
              cursor: readonly ? 'default' : 'pointer',
              transition: 'all 0.2s ease-in-out',
              boxShadow: isSelected ? '0 2px 6px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            {ratingValue}
          </button>
        );
      })}
    </div>
  );
};

export default CustomRating;
