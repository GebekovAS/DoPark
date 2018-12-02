import { GET_LIST_MARKERS, SET_BOOKING_STAGE } from "../constants/Redux";

export function getListMarkers() {
  return {
    type: GET_LIST_MARKERS,
    payload: {
      request: {
        url: `/users/user/repos`
      }
    }
  };
}

export function setBookingStage(stage) {
  return {
    type: SET_BOOKING_STAGE,
    payload: stage
  };
}