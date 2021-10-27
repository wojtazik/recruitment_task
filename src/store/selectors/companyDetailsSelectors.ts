import { CompanyFullData, IState } from '../../types/store';

const selectCompanyDetailsBySymbol = (
  state: IState,
  symbol: string
): CompanyFullData => state.companiesDetails[symbol];

export { selectCompanyDetailsBySymbol };
