import styles from './App.css';

import React, { Component } from 'react';

import Logo from './0-Logo/Logo';
import ScopedSelectorsDemo from './1-ScopedSelectors/ScopedSelectorsDemo';
import GlobalSelectorsDemo from './2-GlobalSelectors/GlobalSelectorsDemo';
import ClassCompositionDemo from './3-ClassComposition/ClassCompositionDemo';
import CompositionOverridesDemo from './4-CompositionOverrides/CompositionOverridesDemo';
import ScopedAnimationsDemo from './5-ScopedAnimations/ScopedAnimationsDemo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <h1>CSS Modules Webpack Demo</h1>

        <hr className={styles.hr} />

        <h2>Scoped Selectors</h2>
        <p>In CSS Modules, selectors are scoped by default.</p>
        <p>The following component uses two classes, <strong>.root</strong> and <strong>.text</strong>, both of which would typically be too vague in a larger project.</p>
        <p>CSS Module semantics ensure that these <strong>classes are locally scoped</strong> to the component and don't collide with other classes in the global scope.</p>
        <ScopedSelectorsDemo />

        <hr className={styles.hr} />

        <h2>Global Selectors</h2>
        <p>Although they should be used as sparingly as possible, <strong>global selectors are still available when required.</strong></p>
        <p>The following component styles all <strong>&lt;p&gt;</strong> tags nested inside it.</p>
        <GlobalSelectorsDemo />

        <hr className={styles.hr} />

        <h2>Class Composition</h2>
        <p>Both of the components below have <strong>locally scoped CSS</strong> that is <strong>composed from a common set of CSS Modules.</strong></p>
        <p>Since <strong>CSS Modules can be composed</strong>, the resulting markup is optimised by <b>reusing classes between components</b>.</p>
        <ClassCompositionDemo />

        <hr className={styles.hr} />

        <h2>Composition Overrides</h2>
        <p>When composing classes, <strong>inherited style properties can be overridden</strong> as you'd expect.</p>
        <p>The following component composes two different classes, but provides overrides which then take precedence.</p>
        <CompositionOverridesDemo />

        <hr className={styles.hr} />

        <h2>Scoped Animations</h2>
        <p>CSS Modules even provide <strong>locally scoped animations</strong>, which are typically defined in the global scope.</p>
        <p>The animation's keyframes are private to the animations module, only exposed publicly via a class which this component inherits from.</p>
        <ScopedAnimationsDemo />

      </div>
    );
  }

};
