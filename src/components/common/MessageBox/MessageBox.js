import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageBox.module.scss';

export const MessageBox = ({type, message}) => {
  const typeClass = type === 'success' ? 'success' : 'error';
  const headerText = type === 'success' ? 'Success' : 'Error';
  return (
  <div className={styles.component + " " + styles[typeClass]}>
    <h1 className={styles.header + " " + styles[typeClass]}>{headerText}</h1> 
    <p className={styles.message + " " + styles[typeClass]}>{message}</p>
  </div>
  )
};
MessageBox.propTypes = {
  type: PropTypes.string, 
  message: PropTypes.string, 
}
            