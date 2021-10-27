import React from 'react';
import { Container } from '@mui/material';
import PageTop from '../../components/PageTop';

export type PageWrapperProps = {
  children: JSX.Element | string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <>
    <PageTop />
    <Container maxWidth="xl">{children}</Container>
  </>
);

export default PageWrapper;
