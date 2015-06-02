import ScopedAnimations from './ScopedAnimations';

import React, { Component } from 'react';

import js from '!!raw!./ScopedAnimations.js';
import css from '!!raw!./ScopedAnimations.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedAnimationsDemo extends Component {

  render() {
    return (
      <div>
        <br />
        <ScopedAnimations />
        <br />
        <Snippet js={js} css={css} />
      </div>
    );
  }

};
