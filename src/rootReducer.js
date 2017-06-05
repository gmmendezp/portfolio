import { combineReducers } from 'redux'
import infoReducer from './reducers/info.reducer.js'
import socialReducer from './reducers/social.reducer.js'
import aboutReducer from './reducers/about.reducer.js'
import projectsReducer from './reducers/projects.reducer.js'
import experienceReducer from './reducers/experience.reducer.js'
import educationReducer from './reducers/education.reducer.js'

const rootReducer = combineReducers({
  info: infoReducer,
  social: socialReducer,
  about: aboutReducer,
  projects: projectsReducer,
  experience: experienceReducer,
  education: educationReducer
})

export default rootReducer
