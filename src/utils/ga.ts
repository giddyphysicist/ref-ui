import * as ReactGA from 'react-ga';

export const initGA = (id: string) => {
  if (process.env.NEAR_ENV === 'mainnet') {
    ReactGA.initialize(id);
  }
};
