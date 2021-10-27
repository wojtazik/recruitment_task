import {
  REMOVE_SELECTED_COMPANY,
  RemoveSelectedCompany,
  SET_SELECTED_COMPANY,
  SetSelectedCompany,
} from '../actions/actionTypes';
import { CompanyShortData } from '../../types/store';

type SelectedCompaniesReducerActions =
  | SetSelectedCompany
  | RemoveSelectedCompany;

const selectedCompaniesReducer = (
  state: Array<CompanyShortData> = [],
  action: SelectedCompaniesReducerActions
): Array<CompanyShortData> => {
  switch (action.type) {
    case SET_SELECTED_COMPANY:
      return [...state, (action as SetSelectedCompany).payload];
    case REMOVE_SELECTED_COMPANY: {
      const newState = state.filter(
        (companyData) =>
          companyData.symbol !== (action as RemoveSelectedCompany).payload
      );

      return newState ?? [];
    }
    default:
      return state;
  }
};

export default selectedCompaniesReducer;
