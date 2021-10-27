import { CompanyShortData } from '../../types/store';
import {
  REMOVE_SELECTED_COMPANY,
  RemoveSelectedCompany,
  SET_SELECTED_COMPANY,
  SetSelectedCompany,
} from './actionTypes';

export const setSelectedCompany = (
  payload: CompanyShortData
): SetSelectedCompany => ({
  type: SET_SELECTED_COMPANY,
  payload,
});

export const removeSelectedCompany = (
  payload: string
): RemoveSelectedCompany => ({
  type: REMOVE_SELECTED_COMPANY,
  payload,
});
