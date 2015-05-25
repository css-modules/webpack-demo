import React, { Component } from 'react';

import StyleVariantA from './StyleVariantA/StyleVariantA';
import StyleVariantB from './StyleVariantB/StyleVariantB';

export default class ClassInheritance extends Component {

  render() {
    return (
      <div>
        <StyleVariantA />
        <br />
        <StyleVariantB />
      </div>
    );
  }

};
