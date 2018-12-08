import { combineReducers } from 'redux';
import bookingPart from './BookingPart.js';
import servicePart from './ServicePart.js';

export default combineReducers({
  bookingPart,
  servicePart
});
