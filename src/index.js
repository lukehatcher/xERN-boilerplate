import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
// for async await polyfill
// see https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babel
import "core-js/stable";
import "regenerator-runtime/runtime";

reactDOM.render(<App />, document.getElementById('root'));
