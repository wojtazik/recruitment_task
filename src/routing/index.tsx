import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import PageWrapper from '../containers/PageWrapper';
import Dashboard from '../components/Dashboard';
import CompanyDetails from '../components/CompanyDetails';

const AppRouting: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PageWrapper>
          <Dashboard />
        </PageWrapper>
      </Route>
      <Route path="/stock/:code">
        <PageWrapper>
          <CompanyDetails />
        </PageWrapper>
      </Route>
      <Route path="*">
        <PageWrapper>Error page</PageWrapper>
      </Route>
    </Switch>
  </Router>
);

export default AppRouting;
