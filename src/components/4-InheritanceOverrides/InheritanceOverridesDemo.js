import InheritanceOverrides from './InheritanceOverrides';

import React, { Component } from 'react';

import js from '!!raw!./InheritanceOverrides.js';
import css from '!!raw!./InheritanceOverrides.css';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class InheritanceOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'InheritanceOverrides.js', source: js },
      { name: 'InheritanceOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <InheritanceOverrides />
      </Snippet>
    );
  }

};
