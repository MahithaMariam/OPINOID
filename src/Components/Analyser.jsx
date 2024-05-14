// Analyser.jsx
import React, { useState } from "react";
import "./styles/Analyser.css";


const Analyser = () => {
    const [url, setUrl] = useState("");

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    const handleAnalyseClick = () => {
        console.log("Analyzing URL:", url);
    };

    return (
        <div>
            <div className="analyser-container">
                <div className="form-container">
                    <div className="field">
                        <label className="label">Please enter your URL here:</label>
                        <input
                            type="text"
                            className="input"
                            value={url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="button" onClick={handleAnalyseClick}>Analyse</button>
                </div>
            </div>
        </div>
    );
};

export default Analyser;
