import React from "react";

const FontPicker = ({ font, setFont }) => {
  const handleFontChange = (event) => {
    setFont(event.target.value);
  };
  return (
    <div className="font-picker">
      <div>
        <span>Choose Your Font</span>
      </div>
      <div className="fonts">
        <input
          type="radio"
          id="Comforter"
          name="fonts"
          value="Comforter"
          checked={font === "Comforter"}
          onChange={handleFontChange}
        />
        <label htmlFor="Comforter">
          <span style={{ fontFamily: "Comforter" }}>Comforter</span>
        </label>

        <input
          type="radio"
          id="Henny-Penny"
          name="fonts"
          value="Henny Penny"
          checked={font === "Henny Penny"}
          onChange={handleFontChange}
        />
        <label htmlFor="Henny-Penny">
          <span style={{ fontFamily: "Henny Penny" }}>Henny Penny</span>
        </label>

        <input
          type="radio"
          id="Mouse-Memoirs"
          name="fonts"
          value="Mouse Memoirs"
          checked={font === "Mouse Memoirs"}
          onChange={handleFontChange}
        />
        <label htmlFor="Mouse-Memoirs">
          <span style={{ fontFamily: "Mouse Memoirs" }}>Mouse Memoirs</span>
        </label>

        <input
          type="radio"
          id="Titan-One"
          name="fonts"
          value="Titan One"
          checked={font === "Titan One"}
          onChange={handleFontChange}
        />
        <label htmlFor="Titan-One">
          <span style={{ fontFamily: "Titan One" }}>Titan One</span>
        </label>
      </div>
    </div>
  );
};

export default FontPicker;
