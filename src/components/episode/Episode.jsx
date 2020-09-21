import React, { Fragment } from 'react';
import { object } from 'prop-types';

import GoBack from '../go-back/GoBack';

import './Episode.scss';
function Episode({ data }) {
  return (
    <Fragment>
      <GoBack text="Go back to show" />
      <div className="episode">
        <h1>{data.name}</h1>
        <img
          src={data.image.medium}
          alt={data.name}
          className="episode__image"
        />
        <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
      </div>
    </Fragment>
  );
}

Episode.propTypes = {
  data: object,
};

Episode.defaultProps = {
  data: [],
};

export default Episode;
