// @flow
import { SET_BOOKING_STAGE, CHOOSE_MARKER } from 'Constants/Redux/BookingPart/index';

export function setBookingStage(stage: string) {
  return {
    type: SET_BOOKING_STAGE,
    payload: stage
  };
}

export function showMap() {
  return {
    type: SET_BOOKING_STAGE,
    payload: 'map'
  };
}

export function chooseMarker(key: string) {
  return {
    type: CHOOSE_MARKER,
    payload: key
  };
}
export default {
  setBookingStage,
  showMap,
  chooseMarker
};
