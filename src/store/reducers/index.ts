import { combineReducers } from 'redux';
import companiesListReducer from './companiesListReducer';
import requestsReducer from './requestsReducer';
import selectedCompaniesReducer from './selectedCompaniesReducer';
import companyDetailsReducer from './companyDetailsReducer';

export default combineReducers({
  companiesList: companiesListReducer,
  selectedCompaniesList: selectedCompaniesReducer,
  companiesDetails: companyDetailsReducer,
  requests: requestsReducer,
});
