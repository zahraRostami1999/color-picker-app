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
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Pick Your background color:</h2>
        </div>
        <div>
          <input
            type="color"
            vlaue={color}
            onChange={handleChangeColor}
            name="color"
          />
          <p>hex: {color}</p>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
