// https://maxfarseer.gitbooks.io/react-router-course-ru/content/actionredirect.html

import { hashHistory } from 'react-router';

export default store => next => action => {
  if ( !action.redirect ) { return next(action); }
  setTimeout(() => hashHistory.push(action.redirect), 100);
  return next(action);
}
