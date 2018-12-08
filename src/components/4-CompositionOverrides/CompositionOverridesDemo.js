import CompositionOverrides from './CompositionOverrides';

import React, { Component } from 'react';

import js from '!!raw-loader!./CompositionOverrides.js';
import css from '!!raw-loader!./CompositionOverrides.css';
import layoutCss from '!!raw-loader!shared/styles/layout.css';
import typographyCss from '!!raw-loader!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class CompositionOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'CompositionOverrides.js', source: js },
      { name: 'CompositionOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};
