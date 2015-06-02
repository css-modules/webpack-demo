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
        <Snippet files={[
          { name: 'ScopedAnimations.js', source: js },
          { name: 'ScopedAnimations.css', source: css }
        ]} />
      </div>
    );
  }

};
