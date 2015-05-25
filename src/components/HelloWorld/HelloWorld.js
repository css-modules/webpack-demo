import styles from './HelloWorld.css';

import React, { Component } from 'react';

export default class HelloWorld extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>HelloWorld</p>
      </div>
    );
  }

};
