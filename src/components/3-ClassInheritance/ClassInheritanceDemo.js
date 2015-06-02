import ClassInheritance from './ClassInheritance';

import React, { Component } from 'react';

import js from '!!raw!./StyleVariantA/StyleVariantA.js';
import css from '!!raw!./StyleVariantA/StyleVariantA.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ClassInheritanceDemo extends Component {

  render() {
    return (
      <div>
        <br />
        <ClassInheritance />
        <br />
        <Snippet js={js} css={css} />
      </div>
    );
  }

};
