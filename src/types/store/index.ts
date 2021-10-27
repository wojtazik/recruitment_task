import { RequestState } from '../common';

export interface RequestsState {
  FETCH_COMPANIES_DATA: RequestState;
  FETCH_COMPANY_DETAILS: RequestState;
}

export interface CompaniesDetails {
  [id: string]: CompanyFullData;
}

export interface CompanyShortData {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface CompanyFullData {
  name: string;
  description: string;
  symbol: string;
  marketCapitalization: number;
  address: string;
}

export interface IState {
  requests: RequestsState;
  companiesDetails: CompaniesDetails;
  companiesList: Array<CompanyShortData>;
  selectedCompaniesList: Array<CompanyShortData>;
}
