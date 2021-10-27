import { SET_COMPANIES_LIST, SetCompaniesList } from '../actions/actionTypes';
import { CompanyShortData } from '../../types/store';

type CompaniesListReducerActions = SetCompaniesList;

const companiesListReducer = (
  state = [],
  action: CompaniesListReducerActions
): Array<CompanyShortData> => {
  switch (action.type) {
    case SET_COMPANIES_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default companiesListReducer;
