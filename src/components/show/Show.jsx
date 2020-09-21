import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

import Episodes from '../episodes/Episodes';
import Episode from '../episode/Episode';
import GoBack from '../go-back/GoBack';

import useFetch from '../../hooks/useFetch';
import { showUrl } from '../../utils/api-endpoints';

import './Show.scss';

function Show() {
  let { path } = useRouteMatch();
  const [fetchShow] = useFetch(showUrl);
  const [showState, setShowState] = useState({
    show: [],
    loading: true,
  });
  useEffect(() => {
    const { response } = fetchShow;
    if (response) {
      setShowState((prevRes) => ({
        ...prevRes,
        show: response,
        loading: false,
      }));
    }
  }, [fetchShow]);

  const { show, loading } = showState;

  const showContent = loading ? (
    'loading'
  ) : (
    <section className="show">
      <GoBack text="Go back to shows" />
      <h1 className="show__title">{show.name}</h1>
      <div className="show__content">
        <aside>
          <figure className="image__container">
            <img
              src={show.image.medium}
              alt="show name"
              className="show__image"
            />
          </figure>
        </aside>
        <article
          className="show__description clearfix"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
        <Episodes list={show._embedded.episodes} />
      </div>
    </section>
  );
  return (
    <Switch>
      <Route exact path={path}>
        {showContent}
      </Route>
      <Route
        path={`${path}/episodes/:episodeId`}
        render={(props) => {
          const data = show._embedded.episodes.find(
            // We should convert id to string because route params are string and episode id is number
            // eslint-disable-next-line react/prop-types
            ({ id }) => String(id) === props.match.params.episodeId
          );
          return <Episode data={data} {...props} />;
        }}
      ></Route>
    </Switch>
  );
}

export default Show;
