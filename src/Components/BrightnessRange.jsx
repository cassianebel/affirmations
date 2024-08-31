import { FiSun, FiMoon } from "react-icons/fi";

const BrightnessRange = ({ brightness, setBrightness }) => {
  return (
    <div className="brightness-range">
      <FiSun />
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={brightness}
        onChange={(e) => setBrightness(e.target.value)}
      />
      <FiMoon />
    </div>
  );
};

export default BrightnessRange;
