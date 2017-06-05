const INITIAL_STATE = [
  {
    title: 'Web Developer',
    company: 'Edify Software Consulting',
    startDate: '2015',
    endDate: 'Present',
    summary:
      'Development of projects for education entities. Projects are developed using Javascript, Ember, Java, Spring, CakePHP, MySQL, PostgreSQL, MongoDB, jQuery, Sass, etc.'
  },
  {
    company: 'Independent',
    title: 'Python and R Scripts Developer',
    startDate: '2013',
    endDate: '2014',
    summary:
      'Development of scripting projects using R and python. The projects involved parsing xml, performing data queries, creating plots and others.'
  },
  {
    title: 'Java Developer',
    company: 'PrestoSports',
    startDate: '2013',
    endDate: '2015',
    summary:
      'Continuous development of a CMS for college sports teams. Using Java, Spring, GWT, Javascript, jQuery, MySQL and others.'
  },
  {
    title: 'Software Engineer',
    company: 'Avionyx S.A.',
    startDate: '2011',
    endDate: '2013',
    summary:
      'Requirements, tests and code development for avionics systems following the DO-178B standard and made in C, C++ and assembly.'
  }
]

export default function (state = INITIAL_STATE) {
  return state
}
