import { SET_COMPANY_DETAILS, SetCompanyDetails } from '../actions/actionTypes';
import { CompaniesDetails, CompanyFullData } from '../../types/store';

type CompanyDetailsReducerActions = SetCompanyDetails;

const companyDetailsReducer = (
  state: CompaniesDetails = {},
  action: CompanyDetailsReducerActions
): { [key: string]: CompanyFullData } => {
  switch (action.type) {
    case SET_COMPANY_DETAILS:
      return {
        ...state,
        [action.payload.symbol]: action.payload,
      };
    default:
      return state;
  }
};

export default companyDetailsReducer;
