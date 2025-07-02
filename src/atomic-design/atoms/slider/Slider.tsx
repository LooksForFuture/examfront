import { useEffect, useRef } from "react";

interface LowMidHighSliderProps {
  defaultValue: number;
}

const Slider = ({ defaultValue }: LowMidHighSliderProps) => {
  const id = Math.floor(Math.random() * 10000);
  const sliderRef = useRef(null);
  const _value = {
    low: 0,
    medium: 1,
    high: 2,
  };

  useEffect(() => {
    const sliderElement = document.getElementById(`slider-pips-${id}`);

    // @ts-ignore
    if (sliderElement && !sliderElement.noUiSlider) {
      try {
        // @ts-ignore
        noUiSlider.create(sliderElement, {
          start: [defaultValue], // Starting at "mid"
          behaviour: "tap-drag",
          step: 1, // Step between each value
          tooltips: false,
          connect: "lower",
          orientation: "vertical",
          range: {
            min: 1,
            max: 5,
          },
          direction: "rtl", // Reverse direction to flip the values
          pips: {
            mode: "values",
            values: [1, 2, 3, 4, 5], // "low", "mid", "high"
            density: 10,
          },
        });
        // @ts-ignore
        sliderRef.current = sliderElement.noUiSlider;
      } catch (error) {
        console.error("nouislider error: ", error);
      }
    }
  }, []);

  return (
    <div
      className="pb-4 pt-4"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="noUi-secondary"
        style={{ height: 100 }}
        id={`slider-pips-${id}`}
      ></div>
    </div>
  );
};

export default Slider;
