import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

export const TextField = ({onChange, id, value, name, disabled, label, error}) => (
  <div className={styles.component}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <input className={styles.textBox} onChange={onChange} type="text" id={id} value={value} name={name} disabled={disabled}></input>
    { error && !disabled && <p className={styles.error}>{error}</p>}
  </div>
);
TextField.propTypes = {
  onChange: PropTypes.func, 
  id: PropTypes.string,
  value: PropTypes.string, 
  name: PropTypes.string, 
  disabled: PropTypes.bool,
  label: PropTypes.string, 
  error: PropTypes.string,
}