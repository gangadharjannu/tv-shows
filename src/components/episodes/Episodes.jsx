import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { array } from 'prop-types';

import formatDay from '../../utils/date-utils';

import './Episodes.scss';

function Episodes({ list }) {
  let { url } = useRouteMatch();

  return (
    <div className="episodes__list">
      <h1>Episodes</h1>
      <div className="table">
        <div className="heading row">
          <div className="column">Season/Episode</div>
          <div className="column">Date</div>
          <div className="column">Name</div>
        </div>
      </div>
      {list.map((episode) => (
        <div className="row" key={episode.id}>
          <div className="column">{`S${episode.season} E${episode.number}`}</div>
          <div className="column">{formatDay(episode.airdate)}</div>
          <div className="column">
            <Link to={`${url}/episodes/${episode.id}`}>{episode.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

Episodes.propTypes = {
  list: array,
};

Episodes.defaultProps = {
  list: [],
};

export default Episodes;
