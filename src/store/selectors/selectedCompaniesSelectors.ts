import { IState } from '../../types/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const selectSelectedCompanies = (state: IState) => state.selectedCompaniesList;

export { selectSelectedCompanies };
