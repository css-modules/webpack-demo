import ScopedSelectors from './ScopedSelectors';

import React, { Component } from 'react';

import js from '!!raw-loader!./ScopedSelectors.js';
import css from '!!raw-loader!./ScopedSelectors.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedSelectors.js', source: js },
      { name: 'ScopedSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};
