import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectField.module.scss';

export const SelectField = ({onChange, label, error, children, name, id}) => (
  <div className={styles.component}>
    <p className={styles.label}>{label}</p>
    <div className={styles.select}>
      <select onChange={onChange} name={name} id={id}>
        {children}
      </select>   
    </div>     
    {error && <p className={styles.error}>{error}</p>}
  </div>
);
SelectField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string, 
  error: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
}
            