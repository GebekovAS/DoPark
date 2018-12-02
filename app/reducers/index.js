import { SET_BOOKING_STAGE, GET_LIST_MARKERS, GET_MARKERS_SUCCESS, GET_MARKERS_FAILED } from '../constants/Redux';

export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case SET_BOOKING_STAGE:
    break;
    case GET_LIST_MARKERS:
      return { ...state, loading: true };
    case GET_MARKERS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_MARKERS_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}