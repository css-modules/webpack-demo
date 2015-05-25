import React, { Component } from 'react';

import ScopedSelectors from './ScopedSelectors/ScopedSelectors';
import ClassInheritance from './ClassInheritance/ClassInheritance';
import InheritanceOverrides from './InheritanceOverrides/InheritanceOverrides';
import ScopedAnimations from './ScopedAnimations/ScopedAnimations';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>CSS Modules Example</h1>

        <h2>Scoped Selectors</h2>
        <p>In CSS Modules, selectors are scoped by default.</p>
        <p>The following component uses two classes, <strong>.root</strong> and <strong>.text</strong>, both of which would typically be too vague in a larger project.</p>
        <p>CSS Module semantics ensure that these <strong>classes are locally scoped</strong> to the component and don't collide with other classes in the global scope.</p>
        <ScopedSelectors />

        <h2>Class Inheritance</h2>
        <p>Both of the components below have <strong>locally scoped CSS</strong> that <strong>inherits from a common set of CSS Modules.</strong></p>
        <p>Since CSS Modules can be composed, the resulting markup is optimised by <b>reusing classes between components</b>.</p>
        <ClassInheritance />

        <h2>Inheritance Overrides</h2>
        <p>When extending classes, <strong>inherited style properties can be overridden</strong> as you'd expect.</p>
        <p>The following component extends two different classes, but provides overrides which then take precedence.</p>
        <InheritanceOverrides />

        <h2>Scoped Animations</h2>

        <p>CSS Modules even provide <strong>locally scoped animations</strong>, which are typically defined in the global scope.</p>
        <p>The animation's keyframes are private to the animations module, only exposed publicly via a class which this component inherits from.</p>
        <ScopedAnimations />

      </div>
    );
  }

};
