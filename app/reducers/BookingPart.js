// @flow
import { SET_BOOKING_STAGE, CHOOSE_MARKER } from 'Constants/Redux/BookingPart/index';

type StoreType = {
  bookingStage: string,
  choosenMarkerKey: string
};
type Action = {
  type: string,
  payload: any
};
const initialState = {
  bookingStage: 'map',
  choosenMarkerKey: '0'
};

export default function reducer(state: StoreType = initialState, action: Action) {
  switch (action.type) {
    case SET_BOOKING_STAGE:
      return { ...state, bookingStage: action.payload };
    case CHOOSE_MARKER:
      return { ...state, bookingStage: 'booking', choosenMarkerKey: action.payload };
    default:
      return state;
  }
}
