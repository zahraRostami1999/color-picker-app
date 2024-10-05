import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const handleChangeColor = (e) => {
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };
  return (
    <>
      <div className={styles.pickerContainer}>
        <div className={styles.titleBox}>
          <h2>Pick Your background color:</h2>
        </div>
        <div className={styles.pickBox}>
          <input
            type="color"
            vlaue={color}
            onChange={handleChangeColor}
            name="color"
          />
        </div>
        <div className={styles.hexBox}>
          <p>Hex color: {color}</p>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
