import { IState } from '../../types/store';
import { RequestState } from '../../types/common';

const selectFetchCompaniesListRequestStatus = (state: IState): RequestState =>
  state.requests.FETCH_COMPANIES_DATA;
const selectFetchCompanyDetailsRequestStatus = (state: IState): RequestState =>
  state.requests.FETCH_COMPANY_DETAILS;

export {
  selectFetchCompaniesListRequestStatus,
  selectFetchCompanyDetailsRequestStatus,
};
