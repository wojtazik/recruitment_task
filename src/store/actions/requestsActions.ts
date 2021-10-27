import { RequestState } from '../../types/common';
import {
  SET_FETCH_COMPANIES_DATA_REQUEST_STATUS,
  SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS,
  SetRequestStatus,
} from './actionTypes';

export const setFetchCompaniesRequestStatus = (
  payload: RequestState
): SetRequestStatus => ({
  type: SET_FETCH_COMPANIES_DATA_REQUEST_STATUS,
  payload,
});

export const setFetchCompanyDetailsRequestStatus = (
  payload: RequestState
): SetRequestStatus => ({
  type: SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS,
  payload,
});
