import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

var main = document.createElement('div');
main.id = 'react-view';
document.body.appendChild(main);
render(<App />, main);
