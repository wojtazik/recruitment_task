import { CompanyShortData, IState } from '../../types/store';

const selectCompaniesList = (state: IState): Array<CompanyShortData> =>
  state.companiesList;

export { selectCompaniesList };
