import { useState, useEffect } from 'react';

import { errorKeys } from '../utils/constants';

/**
 * This hook fetches the data based upon passed url.
 * @function useFetch
 * The passed url is managed in state url.
 * setUrl can be used to trigger a new call,
 * by updating the state variable url.
 *
 * The fetched data is managed in state fetchData, which includes
 * response - to manage successful response,
 * error - to handle error response,
 * isLoading - to indicate whether the call is on going.
 *
 * @param {string} initialUrl
 * @returns {object, function} fetchData, setUrl
 */
export default function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [fetchData, setFetchData] = useState({
    isLoading: false,
    response: null,
    error: null,
  });

  useEffect(() => {
    // Prevent hooks call after component unmount (prevents memory leak)
    let isCancelled = false;

    const getData = async () => {
      if (!isCancelled) {
        setFetchData({ isLoading: true, response: null, error: null });

        try {
          const response = await fetch(url);
          const data = await response.json();
          const hasError = !data;

          setFetchData({
            isLoading: false,
            response: !hasError ? data : null,
            error: hasError ? data : null,
          });
        } catch (error) {
          setFetchData({
            isLoading: false,
            response: null,
            error: { errorKey: errorKeys.INTERNAL_ERROR },
          });
        }
      }
    };

    if (url) {
      getData(url);
    }

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return [fetchData, setUrl];
}
