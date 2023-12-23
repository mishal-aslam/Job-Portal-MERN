import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="Islamabad"
          title="Islamabad"
          name="test"
        />  
        <InputField
          handleChange={handleChange}
          name="test"
          value="Karachi"
          title="Karachi"
        />
        <InputField
          handleChange={handleChange}
          value="Bahawalpur"
          name="test"
          title="Bahawalpur"
        />
        <InputField
          handleChange={handleChange}
          value="Lahore"
          name="test"
          title="Lahore"
        />
      </div>
    </div>
  );
};

export default Location;
