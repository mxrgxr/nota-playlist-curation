import { useState } from "react";
import { Slider } from "@mui/material";

export default function SliderItem({ category }) {
  const [value, setValue] = useState(0);

  function handleSliderChange(_, newValue) {
    setValue(newValue);
  }

  function getDescription() {
    const adjustedValue = value === 0 ? 0 : value - 0.25;
    const index = Math.floor(adjustedValue * 4);
    return value === 0 ? "" : category.descriptions[index];
  }

  return (
    <div>
      <h3>{category.title}</h3>
      <p>{getDescription()}</p>
      <Slider
        value={value}
        min={0}
        max={1}
        step={0.25}
        onChange={handleSliderChange}
      />
    </div>
  );
}