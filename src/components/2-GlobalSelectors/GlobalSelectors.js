import styles from './GlobalSelectors.css';

import React, { Component } from 'react';

export default class GlobalSelectors extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p className="text">Global Selectors</p>
      </div>
    );
  }

};
