import ScopedSelectors from './ScopedSelectors';

import React, { Component } from 'react';

import js from '!!raw!./ScopedSelectors.js';
import css from '!!raw!./ScopedSelectors.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedSelectorsDemo extends Component {

  render() {
    return (
      <div>
        <ScopedSelectors />
        <Snippet js={js} css={css} />
      </div>
    );
  }

};
