import React, { Component } from 'react';

import HelloWorld from './HelloWorld/HelloWorld';
import FooBar from './FooBar/FooBar';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>CSS Modules Example</h1>

        <p>On this page we have two components: <strong>HelloWorld</strong> and <strong>FooBar</strong>.</p>
        <p>Both of these components have locally scoped CSS that inherit from a common set of CSS Modules.</p>
        <p>Since CSS Modules can be composed, the resulting markup is optimised to reuse classes between components.</p>

        <HelloWorld />
        <br />
        <FooBar />

      </div>
    );
  }

};
