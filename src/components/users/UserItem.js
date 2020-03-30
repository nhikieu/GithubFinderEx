import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-sm-4">
      <div className="mb-2 card text-center">
        <img
          style={{ width: "60px" }}
          className="my-2 mx-auto rounded-circle"
          src={avatar_url}
          alt=""
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
