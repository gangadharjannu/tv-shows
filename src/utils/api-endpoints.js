const origin = 'http://api.tvmaze.com';

// embed episodes, can be changed to load on demand but we are loading very less information
// for a given show so we can track the user's behavior and decide whether to load episodes
// on demand or embedded.
export const showUrl = `${origin}/shows/1955?embed=episodes`;
