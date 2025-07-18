import React, { useEffect, useState } from "react";

/**
 * CustomRating - Number-based rating component for priority or task scoring
 *
 * Props:
 * - max: number (default 10)
 * - value: number (selected value)
 * - onChange: function (callback with (value, name))
 * - name: string (input name)
 * - readonly: boolean (default false)
 * - colors: array of background colors per index
 * - textColor: string (default "#fff")
 * - buttonStyle: object (custom button style)
 * - wrapperStyle: object (custom wrapper style)
 * - scrollable: boolean (default true)
 */
const CustomRating = ({
  max = 10,
  value = 0,
  name = "rating",
  onChange,
  readonly = false,
  colors = [],
  textColor = "#fff",
  buttonStyle = {},
  wrapperStyle = {},
  scrollable = true,
}) => {
  const MAX_SAFE_LIMIT = 200;
  const finalMax = Math.min(Number(max) || 10, MAX_SAFE_LIMIT);
  const [selectedValue, setSelectedValue] = useState(Number(value));

  useEffect(() => {
    setSelectedValue(Number(value));
  }, [value]);

  // Generates a color if not defined (for indices beyond colors.length)
 const generateColor = (i) => {
  const hue = Math.floor((i / finalMax) * 120); // Red (0) → Green (120)
  return `hsl(${hue}, 80%, 60%)`;
};

  const getBackgroundColor = (index) =>
    colors[index] || generateColor(index);

  const handleClick = (rating) => {
    if (!readonly) {
      setSelectedValue(rating);
      onChange?.(rating, name);
    }
  };

  const wrapperBase = scrollable ? styles.scrollWrapper : styles.wrapWrapper;

  return (
    <div style={{ ...wrapperBase, ...wrapperStyle }}>
      {Array.from({ length: finalMax }).map((_, index) => {
        const ratingValue = index + 1;
        const isSelected = selectedValue >= ratingValue;

        return (
          <button
            key={ratingValue}
            onClick={() => handleClick(ratingValue)}
            disabled={readonly}
            style={{
              ...styles.button,
              ...buttonStyle,
              backgroundColor: isSelected
                ? getBackgroundColor(index)
                : "#f0f0f0",
              color: isSelected ? textColor : "#333",
              transform: isSelected ? "scale(1.05)" : "scale(1)",
              boxShadow: isSelected
                ? "0 4px 8px rgba(0,0,0,0.1)"
                : "none",
            }}
            aria-label={`Priority ${ratingValue}`}
          >
            {ratingValue}
          </button>
        );
      })}
    </div>
  );
};

const styles = {
  scrollWrapper: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "12px",
    scrollbarWidth: "thin",
  },
  wrapWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    padding: "12px",
    justifyContent: "center",
  },
  button: {
    minWidth: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
};

export default CustomRating;
