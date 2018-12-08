import ScopedAnimations from './ScopedAnimations';

import React, { Component } from 'react';

import js from '!!raw-loader!./ScopedAnimations.js';
import css from '!!raw-loader!./ScopedAnimations.css';
import animationsCss from '!!raw-loader!shared/styles/animations.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedAnimationsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedAnimations.js', source: js },
      { name: 'ScopedAnimations.css', source: css },
      { name: 'shared/styles/animations.css', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};
