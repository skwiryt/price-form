import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioField.module.scss';

export const RadioField = ({label, error, children}) => (
  <div className={styles.component}>
    <p className={styles.label}>{label}</p>
    {children}
    {error && <p className={styles.error}>{error}</p>}
  </div>
);
RadioField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string, 
  error: PropTypes.string,
}
            