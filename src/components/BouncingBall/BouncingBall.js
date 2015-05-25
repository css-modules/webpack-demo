import styles from './BouncingBall.css';

import React, { Component } from 'react';

export default class BouncingBall extends Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }

};
