import { useState, useEffect } from "react";
import BrightnessRange from "./Components/BrightnessRange";
import FontPicker from "./Components/FontPicker";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [affirmation, setAffirmation] = useState("");
  const [brightness, setBrightness] = useState(3);
  const [font, setFont] = useState("Comforter");

  const fetchAffirmation = async () => {
    const response = await fetch(
      "https://cassia-proxy-server-0e93eb694b50.herokuapp.com/affirmation"
    );
    const data = await response.json();
    setAffirmation(data.affirmation);
    setLoading(false);
  };

  useEffect(() => {
    fetchAffirmation();
    localStorage.getItem("brightness") &&
      setBrightness(localStorage.getItem("brightness"));
    localStorage.getItem("font") && setFont(localStorage.getItem("font"));
  }, []);

  return (
    <div className={`background brightness-${brightness}`}>
      <header>
        <FontPicker font={font} setFont={setFont} />
        <BrightnessRange
          brightness={brightness}
          setBrightness={setBrightness}
        />
      </header>
      {loading && <div className="loader">Loading...</div>}
      <p className="affirmation" style={{ fontFamily: font }}>
        {affirmation}
      </p>
      <footer>
        <button className="fetchButton" onClick={fetchAffirmation}>
          Get a New Affirmation
        </button>
      </footer>
    </div>
  );
}

export default App;
