import React from 'react';
import PropTypes from 'prop-types';

export const SelectOption = ({value, label}) => (
  <option value={value}>{label}</option> 
);
SelectOption.propTypes = {  
  value: PropTypes.string, 
  label: PropTypes.string, 
}
            