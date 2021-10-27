import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
  TableBody,
  Button,
} from '@mui/material';
import { useHistory } from 'react-router';
import { selectSelectedCompanies } from '../../store/selectors/selectedCompaniesSelectors';
import { CELL_SIZE, colors, fontSizes } from '../../config/styles';
import { removeSelectedCompany } from '../../store/actions/selectedCompaniesListActions';
import { apiGetCompanyDetails } from '../../store/actions/companyDetailsActions';

const SelectedCompaniesList: React.FC = () => {
  const selectedCompanies = useSelector(selectSelectedCompanies);

  const dispatch = useDispatch();
  const history = useHistory();

  const onRemoveSelectedCompany = (
    event: React.MouseEvent<HTMLButtonElement>,
    companySymbol: string
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeSelectedCompany(companySymbol));
  };

  const onOpenCompanyDetails = (companySymbol: string) => {
    history.push(`/stock/${companySymbol}`);
  };

  const renderTableRows = () =>
    selectedCompanies.map((selectedCompany) => (
      <StyledTableRow
        key={selectedCompany.symbol}
        onClick={() => onOpenCompanyDetails(selectedCompany.symbol)}
      >
        <StyledTableCell>{selectedCompany.name}</StyledTableCell>
        <StyledTableCell>{selectedCompany.symbol}</StyledTableCell>
        <StyledTableCell>
          <Button
            style={{ zIndex: 100 }}
            variant="text"
            onClick={(event) =>
              onRemoveSelectedCompany(event, selectedCompany.symbol)
            }
          >
            Remove
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    ));

  return selectedCompanies.length ? (
    <SelectedCompaniesWrapper>
      <SelectedCompaniesLabel>Your portfolio</SelectedCompaniesLabel>
      <Table>
        <TableHead>
          <TableHeadRow>
            <StyledTableCell>Company name</StyledTableCell>
            <StyledTableCell>Symbol</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
    </SelectedCompaniesWrapper>
  ) : (
    <SelectedCompaniesWrapper>
      <SelectedCompaniesLabel>No companies added</SelectedCompaniesLabel>
    </SelectedCompaniesWrapper>
  );
};

const SelectedCompaniesWrapper = styled.div`
  margin-top: ${CELL_SIZE * 4}px;
  margin-bottom: ${CELL_SIZE * 4}px;
`;

const SelectedCompaniesLabel = styled.span`
  color: ${colors.BASE_GREY};
  font-weight: 700;
  margin-left: ${3 * CELL_SIZE}px;
  margin-bottom: ${2 * CELL_SIZE}px;
  font-size: ${fontSizes.LABEL_SIZE};
  display: block;
`;

const TableHeadRow = styled(TableRow)`
  background: ${colors.MEDIUM_NAVY};
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: 'white',
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: fontSizes.LABEL_SIZE,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: colors.BASE_NAVY,
  },
  '&:nth-of-type(even)': {
    backgroundColor: colors.LIGHT_NAVY,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default SelectedCompaniesList;
