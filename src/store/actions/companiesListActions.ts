import { Dispatch } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_URL_LIST_SEARCH } from '../../config/api';
import { RequestState } from '../../types/common';
import { CompanyShortData, IState } from '../../types/store';
import parseOrderedKeys from '../../utils/parseOrderedKeys';
import { setFetchCompaniesRequestStatus } from './requestsActions';
import { SET_COMPANIES_LIST, SetCompaniesList } from './actionTypes';

export const apiGetCompaniesList =
  (payload: string) =>
  (dispatch: Dispatch<any>, getState: () => IState): void => {
    if (getState().requests.FETCH_COMPANIES_DATA !== RequestState.ONGOING) {
      dispatch(setFetchCompaniesRequestStatus(RequestState.ONGOING));
      axios
        .get(`${API_URL_LIST_SEARCH}&keywords=${payload}&apikey=${API_KEY}`)
        .then(
          (resp: AxiosResponse<{ bestMatches: Array<CompanyShortData> }>) => {
            dispatch(
              setCompaniesList(
                resp.data.bestMatches.map(
                  parseOrderedKeys
                ) as Array<CompanyShortData>
              )
            );
            dispatch(setFetchCompaniesRequestStatus(RequestState.SUCCESS));
            return null;
          }
        )
        .catch(() => {
          dispatch(setFetchCompaniesRequestStatus(RequestState.ERROR));
        });
    }
  };

export const setCompaniesList = (
  payload: Array<CompanyShortData>
): SetCompaniesList => ({
  type: SET_COMPANIES_LIST,
  payload,
});
