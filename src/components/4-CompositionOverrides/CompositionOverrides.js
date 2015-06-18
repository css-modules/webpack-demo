import styles from './CompositionOverrides.css';

import React, { Component } from 'react';

export default class CompositionOverrides extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Class Composition with Overrides</p>
      </div>
    );
  }

};
