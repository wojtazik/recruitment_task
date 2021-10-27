import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { CELL_SIZE } from '../../config/styles';
import SearchInput from '../SearchInput';
import ResultsList from '../ResultsList';
import SelectedCompaniesList from '../SelectedCompaniesList';

const Dashboard: React.FC = () => (
  <Grid container spacing={3}>
    <GridWithBar item xs={12} md={6}>
      <SearchInput />
      <ResultsList />
    </GridWithBar>
    <Grid item xs={12} md={6}>
      <SelectedCompaniesList />
    </Grid>
  </Grid>
);

const GridWithBar = styled(Grid)`
  position: relative;
  padding-right: ${5 * CELL_SIZE}px;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: ${3 * CELL_SIZE}px;
    height: calc(100% - ${3 * CELL_SIZE}px);
    width: 2px;
    background: black;
  }
`;

export default Dashboard;
