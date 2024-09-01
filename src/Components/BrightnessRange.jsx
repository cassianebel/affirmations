import { FiSun, FiMoon } from "react-icons/fi";

const BrightnessRange = ({ brightness, setBrightness }) => {
  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
    localStorage.setItem("brightness", event.target.value);
  };
  return (
    <div className="brightness-range">
      <FiSun />
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={brightness}
        onChange={(e) => handleBrightnessChange(e)}
      />
      <FiMoon />
    </div>
  );
};

export default BrightnessRange;
