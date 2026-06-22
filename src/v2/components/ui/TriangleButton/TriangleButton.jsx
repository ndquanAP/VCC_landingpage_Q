import React from "react";
import styles from "./TriangleButton.module.css";

const TriangleButton = ({
  direction = "right",
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type="button"
    > 
      <svg
        viewBox="0 0 40 40"
        className={
          direction === "right"
            ? styles.right
            : styles.left
        }
      >
        <polygon
          points="10,20 30,8 30,32"
          fill="#FFC400"
          stroke="#FF6A00"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default TriangleButton;