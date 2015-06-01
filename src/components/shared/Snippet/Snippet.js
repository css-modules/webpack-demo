import styles from './Snippet.css';

import React, { Component } from 'react';

export default class Snippet extends Component {

  render() {
    return (
      <div>
        <pre className={styles.pre}>{ this.props.js }</pre>
        <pre className={styles.pre}>{ this.props.css }</pre>
      </div>
    );
  }

};
