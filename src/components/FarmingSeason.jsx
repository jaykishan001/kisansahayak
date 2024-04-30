import React, { useState } from "react";

const FarmingSeason = ({options}) => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    const stateInfo = options.find((state) => state.hasOwnProperty(stateName));
    setSelectedState(stateInfo ? stateInfo[stateName] : null);
  };

  return (
    <div className="bg-pink-200 mx-10 w-58 py-5">
      <h2 className="font-thin text-2xl">Select a State</h2>
      <select onChange={handleStateChange}>
        <option value="">Select a State</option>
        {options.map((stateObj, index) =>
          Object.keys(stateObj).map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))
        )}
      </select>
      {selectedState && (
        <div>
          <h3>{Object.keys(selectedState)[0]}</h3>
          <ul>
            {Object.entries(selectedState).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong>{" "}
                {Array.isArray(value) ? value.join(", ") : value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FarmingSeason;
