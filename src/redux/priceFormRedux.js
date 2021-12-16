import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getRequest = ({priceForm}) => priceForm.request;

/* action name creator */
const reducerName = 'priceForm';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const REQUEST_START = createActionName('REQUEST_START');
const REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');

/* action creators */
export const requestStart = () => ({ type: REQUEST_START });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS });
export const requestError = () => ({ type: REQUEST_ERROR });

/* thunk creators */

export const submitRequest = (priceInfo) => {
  
  return async (dispatch) => {  
    dispatch(requestStart());
    try {
      await axios.post(API_URL, priceInfo);
      dispatch(requestSuccess());      
    } 
    catch(err) {
      dispatch(requestError());
    }        
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case REQUEST_START : {
      return {
        ...statePart, request: {active: true, error: false},
      };  
    }
    case REQUEST_SUCCESS : {
      return {
        ...statePart, request: {active: false, error: false},
      };
    }
    case REQUEST_ERROR : {
      return {
       ...statePart, request: {active: false, error: true},
      };
    }
    default:
      return statePart;
  }
};