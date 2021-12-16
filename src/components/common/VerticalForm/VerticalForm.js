import React from 'react';
import styles from './VerticalForm.module.scss';

export const VerticalForm = (props) => (
  <div className={styles.component}>
    {props.children}
  </div>
);
