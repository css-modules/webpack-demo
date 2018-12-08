import GlobalSelectors from './GlobalSelectors';

import React, { Component } from 'react';

import js from '!!raw-loader!./GlobalSelectors.js';
import css from '!!raw-loader!./GlobalSelectors.css';
import Snippet from 'shared/Snippet/Snippet';

export default class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};
