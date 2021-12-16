import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitBtn.module.scss';

export const SubmitBtn = ({onClick, label, disabled}) => (
  <button className={styles.btn} type="submit" onClick={onClick} disabled={disabled}>{label}</button>
);
SubmitBtn.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}
            