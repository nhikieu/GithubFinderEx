import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

export default function Search({ setAlert }) {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "warning");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-sm btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
