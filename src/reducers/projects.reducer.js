const INITIAL_STATE = [
  {
    image: 'portfolio.png',
    title: 'Resume/Portfolio',
    summary:
      "Improvements done to the portfolio and interactive resume projects for Udacity's Front End Nanodegree. The new version is done using React, Webpack, Sass and Babel.",
    demoURL: 'https://gmmendezp.github.io/',
    codeURL: 'https://github.com/gmmendezp/portfolio'
  },
  {
    image: 'neighborhood.png',
    title: 'Neighborhood Map',
    summary:
      'A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.',
    demoURL: 'frontend-nanodegree-neighborhood-map/',
    codeURL: 'https://github.com/gmmendezp/frontend-nanodegree-neighborhood-map'
  },
  {
    image: 'nyssa.png',
    title: 'Nyssa FE Project Generator',
    summary:
      'Yeoman generator to create Front End projects using React, Babel, Jest, ESLint and other technologies.',
    codeURL: 'https://gitlab.com/gmmendezp/generator-nyssa-fe'
  },
  {
    image: 'sentry.png',
    title: 'Dota 2 Sentry Bot',
    summary:
      'Node library to gather Dota 2 player information as MMR, stats and lobby creation/management.',
    codeURL: 'https://gitlab.com/DogShell_Development/sentry'
  },
  {
    image: 'arcade.png',
    title: 'Classic Arcade Game Clone',
    summary:
      'An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.',
    demoURL: 'frontend-nanodegree-arcade-game/',
    codeURL: 'https://github.com/gmmendezp/frontend-nanodegree-arcade-game'
  },
  {
    image: 'feedreader.png',
    title: 'Feed Reader Testing',
    summary:
      "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
    demoURL: 'frontend-nanodegree-feedreader/',
    codeURL: 'https://github.com/gmmendezp/frontend-nanodegree-feedreader'
  }
]

export default function (state = INITIAL_STATE) {
  return state
}
