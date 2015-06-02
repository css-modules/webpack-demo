import InheritanceOverrides from './InheritanceOverrides';

import React, { Component } from 'react';

import js from '!!raw!./InheritanceOverrides.js';
import css from '!!raw!./InheritanceOverrides.css';
import Snippet from 'shared/Snippet/Snippet';

export default class InheritanceOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'InheritanceOverrides.js', source: js },
      { name: 'InheritanceOverrides.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <InheritanceOverrides />
      </Snippet>
    );
  }

};
