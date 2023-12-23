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
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          name="test"
          value="seattle"
          title="Seattle"
        />
        <InputField
          handleChange={handleChange}
          value="madrid"
          name="test"
          title="Madrid"
        />
        <InputField
          handleChange={handleChange}
          value="Boston"
          name="test"
          title="Boston"
        />
      </div>
    </div>
  );
};

export default Location;
