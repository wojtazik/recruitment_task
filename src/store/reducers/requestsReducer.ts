import {
  SET_FETCH_COMPANIES_DATA_REQUEST_STATUS,
  SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS,
  SetRequestStatus,
} from '../actions/actionTypes';
import { RequestState } from '../../types/common';
import { RequestsState } from '../../types/store';

type RequestsReducerActions = SetRequestStatus;

const requestsReducer = (
  state: RequestsState = {
    FETCH_COMPANIES_DATA: RequestState.IDLE,
    FETCH_COMPANY_DETAILS: RequestState.IDLE,
  },
  action: RequestsReducerActions
): RequestsState => {
  switch (action.type) {
    case SET_FETCH_COMPANIES_DATA_REQUEST_STATUS:
      return {
        ...state,
        FETCH_COMPANIES_DATA: action.payload,
      };
    case SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS:
      return {
        ...state,
        FETCH_COMPANY_DETAILS: action.payload,
      };
    default:
      return state;
  }
};

export default requestsReducer;
