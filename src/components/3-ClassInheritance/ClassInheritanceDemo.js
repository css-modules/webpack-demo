import ClassInheritance from './ClassInheritance';

import React, { Component } from 'react';

import js from '!!raw!./StyleVariantA/StyleVariantA.js';
import css_a from '!!raw!./StyleVariantA/StyleVariantA.css';
import css_b from '!!raw!./StyleVariantB/StyleVariantB.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ClassInheritanceDemo extends Component {

  render() {
    return (
      <div>
        <br />
        <ClassInheritance />
        <br />
        <Snippet files={[
          { name: 'StyleVariantA.js', source: js },
          { name: 'StyleVariantA.css', source: css_a },
          { name: 'StyleVariantB.css', source: css_b }
        ]} />
      </div>
    );
  }

};
