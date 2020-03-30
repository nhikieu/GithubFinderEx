import React, { Fragment, Component } from "react";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      folowers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner color="primary" />;

    return (
      <Fragment>
        <div className="row">
          <div className="text-left col">
            <Link to="/" className="btn-sm btn-light">
              Back To Search
            </Link>
            <span className="ml-3"> Hireable: </span>
            {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
          </div>
          <div className="col" />
        </div>
        <div className="mt-3 card">
          <div className="mt-4 row">
            <div className="col-6">
              <img
                className="rounded-circle"
                style={{ width: "150px" }}
                src={avatar_url}
                alt=""
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className="text-left col-6">
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a className="mb-3 btn btn-dark" href={html_url}>
                Visit Github Profile
              </a>
              <p>Username: {login}</p>
              <p>Company: {company}</p>
              <p>Website: {blog}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
