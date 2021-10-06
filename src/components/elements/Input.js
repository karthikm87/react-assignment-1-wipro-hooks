import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_label, feild_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {field_label}
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={feild_placeholder ? feild_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your details with anyone else.
      </div>
    </div>
  );
};

export default Input;
