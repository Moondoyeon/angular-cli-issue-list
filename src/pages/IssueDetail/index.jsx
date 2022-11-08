/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { flexBox, responsive } from '../../styles/mixin';
import useAxios from '../../hooks/useAxios';
import IssueItem from '../IssueList/IssueItem';
import Loading from '../../components/Loading';

import issueAPI from '../../api/api';

function IssueDetail() {
  const getIssueDetailAPI = useAxios(issueAPI.getIssueDetail);
  const params = useParams();
  const [postDetail, setPostDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const isDetail = true;
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getIssueDetailAPI(
      [params.id],
      {},
      {
        onSuccess: data => {
          setPostDetail(data);
          setIsLoading(false);
        },
        onError: state => {
          navigate('/error', { state });
        },
      }
    );
  }, []);

  return (
    <Container>
      {postDetail && <IssueItem data={postDetail} isDetail={isDetail} />}
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}
export default IssueDetail;
const Container = styled.div`
  margin: 20px 0;
  width: 80%;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 6px;
  ${responsive('phone')} {
    width: 100%;
  }
`;
const LoadingContainer = styled.div`
  ${flexBox()};
  min-height: 90vh;
`;
