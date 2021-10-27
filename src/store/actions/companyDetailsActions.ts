import { Dispatch } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_URL_DETAILS } from '../../config/api';
import { RequestState } from '../../types/common';
import { CompanyFullData, IState } from '../../types/store';
import { setFetchCompanyDetailsRequestStatus } from './requestsActions';
import { SET_COMPANY_DETAILS, SetCompanyDetails } from './actionTypes';

export const apiGetCompanyDetails =
  (payload: string) =>
  (dispatch: Dispatch<any>, getState: () => IState): void => {
    const isCompanyDataFetched = Boolean(getState().companiesDetails[payload]);

    if (!isCompanyDataFetched) {
      if (getState().requests.FETCH_COMPANIES_DATA !== RequestState.ONGOING) {
        dispatch(setFetchCompanyDetailsRequestStatus(RequestState.ONGOING));
        axios
          .get(`${API_URL_DETAILS}&symbol=${payload}&apikey=${API_KEY}`)
          .then(
            (
              resp: AxiosResponse<{
                Name: string;
                Description: string;
                Symbol: string;
                MarketCapitalization: number;
                Address: string;
              }>
            ) => {
              const companyApiData = resp.data; // There is no method to get only some specific fields from api? details object is laaarge : )
              const companyData: CompanyFullData = {
                name: companyApiData?.Name,
                description: companyApiData?.Description,
                symbol: companyApiData?.Symbol,
                marketCapitalization: companyApiData?.MarketCapitalization,
                address: companyApiData?.Address,
              };

              dispatch(setCompanyDetails(companyData));
              dispatch(
                setFetchCompanyDetailsRequestStatus(RequestState.SUCCESS)
              );
              return null;
            }
          )
          .catch(() => {
            dispatch(setFetchCompanyDetailsRequestStatus(RequestState.ERROR));
          });
      }
    }
  };

export const setCompanyDetails = (
  payload: CompanyFullData
): SetCompanyDetails => ({
  type: SET_COMPANY_DETAILS,
  payload,
});
