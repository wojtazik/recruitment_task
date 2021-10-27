import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import { selectCompaniesList } from '../../store/selectors/companiesListSelectors';
import { CELL_SIZE, colors, fontSizes } from '../../config/styles';
import { CompanyShortData } from '../../types/store';
import { selectSelectedCompanies } from '../../store/selectors/selectedCompaniesSelectors';
import { setSelectedCompany } from '../../store/actions/selectedCompaniesListActions';
import { selectFetchCompaniesListRequestStatus } from '../../store/selectors/requestStatusSelectors';
import { RequestState } from '../../types/common';

const tableStyles = {
  width: '100%',
  bgcolor: colors.BASE_NAVY,
  border: `1px solid ${colors.BASE_NAVY}`,
  borderRadius: `${CELL_SIZE * 2}px`,
};

const ResultsList: React.FC = () => {
  const companies: Array<CompanyShortData> = useSelector(selectCompaniesList);
  const apiListRequestState = useSelector(
    selectFetchCompaniesListRequestStatus
  );

  const selectedCompanies: Array<CompanyShortData> = useSelector(
    selectSelectedCompanies
  );

  const dispatch = useDispatch();

  const onSelectCompany = (company: CompanyShortData) => {
    const isCompanySelected = selectedCompanies.some(
      (companyFromAll) => companyFromAll.symbol === company.symbol
    );

    if (!isCompanySelected) {
      dispatch(setSelectedCompany(company));
    }
  };

  const renderPlaceholcerContent = () => {
    if (apiListRequestState === RequestState.ONGOING) {
      <ListWrapper>Loading...</ListWrapper>;
    }
    if (
      apiListRequestState === RequestState.SUCCESS &&
      companies.length === 0
    ) {
      <ListWrapper>No results</ListWrapper>;
    }
    if (apiListRequestState === RequestState.ERROR && companies.length === 0) {
      <ListWrapper>Error while fetching companies data</ListWrapper>;
    }

    return null;
  };

  const renderCompanies = () =>
    companies.map((company: CompanyShortData) => (
      <ListItem key={company?.symbol}>
        <ListItemText
          primary={company?.name}
          sx={{ color: colors.MEDIUM_NAVY }}
        />
        <StyledButton onClick={() => onSelectCompany(company)}>+</StyledButton>
      </ListItem>
    ));

  return companies.length ? (
    <ListWrapper>
      <ResultsListLabel>Search results</ResultsListLabel>
      <List sx={tableStyles}>{renderCompanies()}</List>
    </ListWrapper>
  ) : (
    renderPlaceholcerContent()
  );
};

const ListWrapper = styled.div`
  margin-top: ${6 * CELL_SIZE}px;
`;

const ResultsListLabel = styled.span`
  color: ${colors.BASE_GREY};
  font-weight: 700;
  margin-left: ${3 * CELL_SIZE}px;
  margin-bottom: ${2 * CELL_SIZE}px;
  font-size: ${fontSizes.LABEL_SIZE};
  display: block;
`;

const StyledButton = styled.button`
  color: ${colors.MEDIUM_NAVY};
  height: ${CELL_SIZE * 5}px;
  width: ${CELL_SIZE * 5}px;
  text-align: center;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.NORMAL_SIZE};
  font-weight: 700;
  border: 1px solid ${colors.MEDIUM_NAVY};
  background: white;
  border-radius: ${CELL_SIZE}px;
  cursor: pointer;
  transition: all 0.15s linear;

  &:hover {
    background: ${colors.LIGHT_NAVY};
  }
`;

export default ResultsList;
