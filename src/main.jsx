import React from 'react';
import { render } from 'react-dom';

import Router from 'containers/router';

var main = document.createElement('div');
main.id = 'react-view';
document.body.appendChild(main);

render(<Router />, main);
