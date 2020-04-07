import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

export default function User({ match }) {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

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
            <ul className="pl-0" style={{ listStyle: "none" }}>
              {login && (
                <li>
                  <strong>Username: {login}</strong>
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: {company}</strong>
                </li>
              )}
              {blog && (
                <li>
                  <strong>Website: {blog}</strong>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-3 card">
        <div className="card-body">
          <div className="mx-3 badge badge-primary">Followers: {followers}</div>
          <div className="mx-3 badge badge-danger">Following: {following}</div>
          <div className="mx-3 badge badge-warning">
            Public Repos: {public_repos}
          </div>
          <div className="mx-3 badge badge-info">
            Public Gists: {public_gists}
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
}
