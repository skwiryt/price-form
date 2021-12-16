
import PriceForm from './PriceForm';
import {connect} from 'react-redux';
import { submitRequest, getRequest } from '../../../redux/priceFormRedux';

const mapStateToProps = (state) => (
  {
    request: getRequest(state),
  });

const mapDispatcherToProps = (dispatcher) => (
  {
    submit: payload => dispatcher(submitRequest(payload)),
  }
);

export default connect(mapStateToProps, mapDispatcherToProps)(PriceForm);
