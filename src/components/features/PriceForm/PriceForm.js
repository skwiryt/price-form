import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceForm.module.scss';
import { TextField } from '../../common/TextField/TextField';
import { TextAreaField } from '../../common/TextAreaField/TextAreaField';
import { VerticalForm } from '../../common/VerticalForm/VerticalForm';
import { RadioField } from '../../common/RadioField/RadioField';
import { RadioButton } from '../../common/RadioButton/RadioButton';
import { SelectField } from '../../common/SelectField/SelectField';
import { SelectOption } from '../../common/SelectOption/SelectOption';
import { SubmitBtn } from '../../common/SubmitBtn/SubmitBtn';
import { MessageBox } from '../../common/MessageBox/MessageBox';

class PriceForm extends React.Component {
  state = {
    fields: {
      description: '',
      confirmation: '',
      vatRate: '',
      priceNetto: '',
    },
    errors: {
      description: null,
      confirmation: null,
      vatRate: null,
      priceNetto: null,
    },
    sent: false,
  }
  priceBrutto = () => {
    const { priceNetto, vatRate } = this.state.fields;
    const { errors } = this.state;
    const priceNetNum = Number(priceNetto.replace(/,/, '.'));
    return errors.priceNetto || !priceNetto ? '' : (priceNetNum * Number(vatRate/100) + priceNetNum).toFixed(2);
  }
  handleChange = ({ target }) => {   
    const { name, value } = target;
    const { errors, fields } = this.state;
    if ( (name === 'confirmation' && !errors.confirmation)) { 
      this.setState({...this.state, fields: { ...fields, [name]: value}});
    } else if (name === 'vatRate' && !errors.vatRate) {
      this.setState({...this.state, fields: { ...fields, [name]: value}});
    }else {
      this.setState({...this.state, fields: { ...fields, [name]: value}}, () => {
        this.setState({...this.state, errors: {...errors, [name]: this.fieldError(name)}}) 
      });
    } 
  };
  fieldError = (field) => {
    let message = null;
    const { fields } = this.state;
    switch(field) {
      case 'description' :     
        if (!fields.description) {
          message = 'Text is required';
        }else if (fields.description.length > 255) {
          message = 'You can\'t enter more than 255 characters';
        }
      break;
      case 'confirmation' :
        if (!fields.confirmation) {
          message = 'Text is required';
        }
      break;
      case 'vatRate' :
        if (!fields.vatRate) {
          message = 'Text is required';
        }
      break;
      case 'priceNetto' :
        if (fields.vatRate) {
          if (!fields.priceNetto) {
            message = 'Please, input number';
          } else if (isNaN(Number(fields.priceNetto.replace(/,/, '.')))) {
            message = 'Please, input number';
          }
        }  
      break;
      default :
      break;
    }
    return message;
  }
  formValidation = () => {
    const errors = {};
    Object.keys(this.state.fields).forEach(field => errors[field] = this.fieldError(field));
    this.setState({...this.state, errors: errors});
    return Object.keys(errors).every(field => errors[field] === null);
  }   
  handleSubmit = (e) => {
    e.preventDefault();
    const { submit } = this.props;
    const { fields } = this.state;
    if (this.formValidation()) {
      this.setState({...this.state, sent: true });
      submit(fields)
    }
  }
  render = () => {
    const { request } = this.props;
    const { errors, sent } = this.state;
    const { description, confirmation, vatRate, priceNetto } = this.state.fields;
    const priceBrutto = this.priceBrutto();
    return (
      <div>
        { (sent && !request.active && !request.error) && <MessageBox type="success" message="Your information has been successfully submited."/> }
        { (sent && request.error) && <MessageBox type="error" message="An error occured"/> }       
        { !sent && (
          <div className={styles.formWrapper}>
              <VerticalForm>
              <h1 className={styles.header}>Price Form</h1>
              <h2 className={styles.subheader}>Small React app.<br/>No style framework.</h2>
              <TextAreaField 
                onChange={this.handleChange} 
                id="description" 
                value={description} 
                name="description" 
                label="Description" 
                error={errors.description}
              />
              <RadioField label="Send Confirmation" error={errors.confirmation}>
                <RadioButton onChange={this.handleChange} label="YES" id="yes" name="confirmation" value="yes" checked={confirmation === 'yes'} />
                <RadioButton onChange={this.handleChange} label="NO" id="no" name="confirmation" value="no" checked={confirmation === 'no'} />
              </RadioField > 
              <SelectField onChange={this.handleChange} name="vatRate" id="vatRate" label="VAT" error={errors.vatRate}>
                <SelectOption value="" label="Choose VAT"/>
                <SelectOption value="19" label="19%"/>
                <SelectOption value="21" label="21%"/>
                <SelectOption value="23" label="23%"/>
                <SelectOption value="25" label="25%"/>
              </SelectField>
              <TextField 
                onChange={this.handleChange} 
                id="priceNetto" 
                value={priceNetto} 
                name="priceNetto" 
                label="Price Netto"
                disabled={!vatRate}
                error={errors.priceNetto}
              />
              <TextField 
                onChange={this.handleChange} 
                id="priceBrutto" 
                value={priceBrutto} 
                name="priceBrutto" 
                label="Price Brutto"
                disabled={true}
                error={errors.priceBrutto}
              /> 
              <SubmitBtn onClick={this.handleSubmit} disabled={sent && request.active} label="Submit"/>  
            </VerticalForm>
          </div>
        )}
      </div>
    )
  }  
}

PriceForm.propTypes = {
  submit: PropTypes.func,
  request: PropTypes.object,
};

export default PriceForm;
