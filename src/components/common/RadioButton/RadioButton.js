import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

export const RadioButton = ({onChange, id, value, name, checked, label}) => (
  <div className={styles.component}>    
    <input onChange={onChange} type="radio" id={id} name={name} value={value} checked={checked}></input>
    <label className={styles.label} htmlFor={id}>{label}</label>      
</div>
);
RadioButton.propTypes = {
  onChange: PropTypes.func, 
  id: PropTypes.string,
  value: PropTypes.string, 
  name: PropTypes.string, 
  label: PropTypes.string, 
}
            