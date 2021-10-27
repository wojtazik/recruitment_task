import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import OneLineInput from '../common/OneLineInput';
import { CELL_SIZE } from '../../config/styles';
import {
  apiGetCompaniesList,
  setCompaniesList,
} from '../../store/actions/companiesListActions';

const SearchInput: React.FC = () => {
  const [queryString, setQueryString] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQueryString(event.target.value);
  };

  useEffect(() => {
    if (queryString) {
      dispatch(apiGetCompaniesList(queryString));
    } else {
      dispatch(setCompaniesList([]));
    }
  }, [dispatch, queryString]);

  return (
    <SearchInputWrapper>
      <OneLineInput
        Icon={SearchIcon}
        label="Company name"
        value={queryString}
        onChange={handleInputChange}
        name="company_name"
        placeholder="Example: Apple"
      />
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled.div`
  margin-right: 20%;
  margin-top: ${4 * CELL_SIZE}px;
`;

export default SearchInput;
