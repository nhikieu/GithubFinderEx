import React from "react";
import UserItem from "./UserItem";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";

const Users = props => {
  if (props.loading) {
    return (
      <div>
        <Spinner color="primary" />
      </div>
    );
  } else {
    return (
      <div className="my-3 row">
        {props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
