import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextAreaField.module.scss';

export const TextAreaField = ({onChange, id, value, name, disabled, label, error}) => (
  <div className={styles.component}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <textarea className={styles.textBox} onChange={onChange} type="text" id={id} value={value} name={name} disabled={disabled}></textarea>
    { error && <p className={styles.error}>{error}</p>}
  </div>
);
TextAreaField.propTypes = {
  onChange: PropTypes.func, 
  id: PropTypes.string,
  value: PropTypes.string, 
  name: PropTypes.string, 
  disabled: PropTypes.bool,
  label: PropTypes.string, 
  error: PropTypes.string,
}