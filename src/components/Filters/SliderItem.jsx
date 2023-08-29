import { useState } from "react";
import { Slider } from "@mui/material";

export default function SliderItem({ category, onSliderValueChange }) {
  const [value, setValue] = useState(0);

  function getDescription() {
    const adjustedValue = value === 0 ? 0 : value - 0.25;
    const index = Math.floor(adjustedValue * 4);
    return value === 0 ? "" : category.descriptions[index];
  }

  function handleSliderChange(_, newValue) {
    setValue(newValue);
    if (newValue !== 0) {
      const apiCategoryTitle = category.title.split(':')[0].trim().toLowerCase();
      const minValue = newValue - 0.25;
      const maxValue = newValue;
      onSliderValueChange(apiCategoryTitle, minValue, maxValue);
    }
  }

  return (
    <div className="text-dk-ntr">
      <h3 className="text-t-md font-header mb-8">{category.title}</h3>
      <p className="font-body text-b-lg">{getDescription()}</p>
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
