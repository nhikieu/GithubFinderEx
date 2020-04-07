import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Search({
  searchUsers,
  clearUsers,
  setAlert,
  showClear
}) {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="my-2 form">
        <input
          type="text"
          name="text"
          className="my-2 form-control"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-sm btn-dark btn-block">
          Search
        </button>
      </form>
      {showClear && (
        <button className="btn btn-sm btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
