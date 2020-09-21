import React from 'react';
import { withRouter } from 'react-router-dom';

import { object, string } from 'prop-types';

import './GoBack.scss';

const GoBack = ({ history, text }) => (
  <a className="go-back" onClick={() => history.goBack()} href="">
    {text}
  </a>
);

GoBack.propTypes = {
  history: object,
  text: string,
};

GoBack.defaultProps = {
  history: {},
  text: 'Go back',
};

export default withRouter(GoBack);
