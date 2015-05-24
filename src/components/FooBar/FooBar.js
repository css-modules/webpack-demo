import styles from './FooBar.css';

import React from 'react';

export default class Demo extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>FooBar</p>
      </div>
    );
  }

};
