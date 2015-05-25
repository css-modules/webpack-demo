import React, { Component } from 'react';

import HelloWorld from './HelloWorld/HelloWorld';
import FooBar from './FooBar/FooBar';

import BouncingBall from './BouncingBall/BouncingBall';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>CSS Modules Example</h1>

        <p>Below we have two components: <strong>HelloWorld</strong> and <strong>FooBar</strong>.</p>
        <p>Both of these components have <strong>locally scoped CSS</strong> that inherit from a common set of CSS Modules.</p>
        <p>Since CSS Modules can be composed, the resulting markup is optimised by <b>reusing classes between components</b>.</p>

        <HelloWorld />
        <br />
        <FooBar />

        <p>CSS Modules even provide <strong>locally scoped animations</strong>, which are typically defined in the global scope.</p>
        <p>The following <strong>BouncingBall</strong> component extends a <strong>".bounce"</strong> class from a separate animations module.</p>
        <p>The <strong>"bounce"</strong> keyframes are private to the animations module, only exposed via the <strong>".bounce"</strong> class to those that either extend from it or import it.</p>

        <BouncingBall />

      </div>
    );
  }

};
