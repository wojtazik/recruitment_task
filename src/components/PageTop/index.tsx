import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, CELL_SIZE } from '../../config/styles';

const PageTop: React.FC = () => (
  <PageTopWrapper>
    <PageTopHeading>SDH Frontend Homework</PageTopHeading>
  </PageTopWrapper>
);

const PageTopWrapper = styled.div`
  padding: ${CELL_SIZE * 3}px;
  background: ${colors.BASE_NAVY};
  height: ${CELL_SIZE * 10}px;
  margin-bottom: ${4 * CELL_SIZE}px;
  display: flex;
  align-items: center;
`;

const PageTopHeading = styled.h1`
  font-size: ${fontSizes.HEADING_SIZE};
  color: ${colors.MEDIUM_NAVY};
  font-weight: 700;
`;

export default PageTop;
