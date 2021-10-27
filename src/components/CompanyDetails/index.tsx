import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetCompanyDetails } from '../../store/actions/companyDetailsActions';
import { CompanyFullData, IState } from '../../types/store';
import { selectCompanyDetailsBySymbol } from '../../store/selectors/companyDetailsSelectors';
import { selectFetchCompanyDetailsRequestStatus } from '../../store/selectors/requestStatusSelectors';
import { RequestState } from '../../types/common';
import { CELL_SIZE, colors, fontSizes } from '../../config/styles';
import shortenNumber from '../../utils/shortenNumber';

const CompanyDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { code } = useParams<{ code: string }>();

  const companyDetailsRequestStatus: RequestState = useSelector(
    selectFetchCompanyDetailsRequestStatus
  );

  const companyDetails: CompanyFullData = useSelector(
    (state: IState): CompanyFullData =>
      selectCompanyDetailsBySymbol(state, code)
  );

  useEffect(() => {
    if (!companyDetails) {
      dispatch(apiGetCompanyDetails(code));
    }
  }, [code, companyDetails, dispatch]);

  const renderPlaceholderContent = () => {
    if (companyDetailsRequestStatus === RequestState.ONGOING) {
      return <div>Loading....</div>;
    }

    if (companyDetailsRequestStatus === RequestState.ERROR) {
      return <div>Error while loading data</div>;
    }

    if (!companyDetails) {
      return <div>Cannot find company informations</div>; // This state is often occured due to API limitations - only 5 calls for each minute : )
    }

    return <div>Unknown error occured</div>;
  };

  return (
    <>
      <StyledLink to="/">Go back</StyledLink>
      {companyDetailsRequestStatus === RequestState.SUCCESS &&
      companyDetails ? (
        <>
          <CompanyName>{companyDetails.name || '-'}</CompanyName>
          {companyDetails.address ? (
            <LabelValue>
              <DetailLabel>Market Capitalization:</DetailLabel>
              <DetailValue>
                {shortenNumber(companyDetails.marketCapitalization)}
              </DetailValue>
            </LabelValue>
          ) : null}
          {companyDetails.marketCapitalization ? (
            <LabelValue>
              <DetailLabel>Address:</DetailLabel>
              <DetailValue>{companyDetails.address}</DetailValue>
            </LabelValue>
          ) : null}
          {companyDetails.description ? (
            <CompanyDescription>
              {companyDetails.description}
            </CompanyDescription>
          ) : null}
        </>
      ) : (
        renderPlaceholderContent()
      )}
    </>
  );
};

const CompanyName = styled.h2`
  font-size: ${fontSizes.HEADING_SIZE};
  font-weight: 700;
  margin-bottom: ${CELL_SIZE * 2}px;
`;

const LabelValue = styled.div`
  display: flex;
  margin-bottom: ${CELL_SIZE}px;
`;

const DetailLabel = styled.span`
  font-weight: 700;
  font-size: ${fontSizes.LABEL_SIZE};
`;

const DetailValue = styled.span`
  font-size: ${fontSizes.LABEL_SIZE};
  margin-left: ${2 * CELL_SIZE}px;
`;

const CompanyDescription = styled.p`
  margin-top: ${CELL_SIZE * 4}px;
  text-align: justify;
  font-size: ${fontSizes.LABEL_SIZE};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: ${CELL_SIZE * 2}px ${CELL_SIZE * 3}px;
  border: 1px solid ${colors.MEDIUM_NAVY};
  margin-bottom: ${CELL_SIZE * 4}px;
  border-radius: ${CELL_SIZE}px;
  text-decoration: none;
  color: ${colors.MEDIUM_NAVY};
  transition: all 0.15s;

  &:hover,
  &:active,
  &:visited,
  &:focus {
    color: ${colors.MEDIUM_NAVY};
  }

  &:hover {
    background: ${colors.LIGHT_NAVY};
  }
`;

export default CompanyDetails;
