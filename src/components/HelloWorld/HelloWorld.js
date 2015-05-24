import styles from './HelloWorld.css';

import React from 'react';

export default class Demo extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>HelloWorld</p>
      </div>
    );
  }

};
