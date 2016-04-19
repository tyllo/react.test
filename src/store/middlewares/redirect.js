// https://maxfarseer.gitbooks.io/react-router-course-ru/content/actionredirect.html

import { browserHistory } from 'react-router';

export default store => next => action => {

  if ( !action.redirect ) { return next(action); }

  browserHistory.push(action.redirect);
}
