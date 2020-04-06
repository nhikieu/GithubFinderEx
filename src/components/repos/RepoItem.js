import React from "react";
import Proptypes from "prop-types";

export default function RepoItem({ repo }) {
  return (
    <div className="pl-5 text-left card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

RepoItem.propTypes = {
  repo: Proptypes.object.isRequired
};
