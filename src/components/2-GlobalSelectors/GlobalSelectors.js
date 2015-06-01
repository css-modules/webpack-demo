import styles from './GlobalSelectors.css';

import React, { Component } from 'react';

export default class GlobalSelectors extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p>Global Selectors</p>
      </div>
    );
  }

};
