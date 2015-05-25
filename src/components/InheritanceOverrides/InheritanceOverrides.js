import styles from './InheritanceOverrides.css';

import React, { Component } from 'react';

export default class InheritanceOverrides extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Inherited Styles with Overrides</p>
      </div>
    );
  }

};
