import { CompanyFullData, CompanyShortData } from '../../types/store';
import { RequestState } from '../../types/common';

export interface SetCompaniesList {
  type: string;
  payload: Array<CompanyShortData>;
}

export interface ApiGetCompaniesList {
  payload: string;
}

export interface SetRequestStatus {
  type: string;
  payload: RequestState;
}

export interface SetSelectedCompany {
  type: string;
  payload: CompanyShortData;
}

export interface RemoveSelectedCompany {
  type: string;
  payload: string;
}

export interface SetCompanyDetails {
  type: string;
  payload: CompanyFullData;
}

export const SET_COMPANIES_LIST = 'SET_COMPANIES_LIST';
export const GET_COMPANIES_DATA = 'GET_COMPANIES_DATA';

export const SET_FETCH_COMPANIES_DATA_REQUEST_STATUS =
  'SET_FETCH_COMPANIES_DATA_REQUEST_STATUS';
export const SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS =
  'SET_FETCH_COMPANY_DETAILS_REQUEST_STATUS';

export const SET_SELECTED_COMPANY = 'SET_SELECTED_COMPANY';
export const REMOVE_SELECTED_COMPANY = 'REMOVE_SELECTED_COMPANY';

export const SET_COMPANY_DETAILS = 'SET_COMPANY_DETAILS';
