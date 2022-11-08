/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIssueList } from '../../context/IssueListContext';

import Advertisement from '../../components/Advertisement';
import Loading from '../../components/Loading';
import useAxios from '../../hooks/useAxios';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import IssueItem from './IssueItem';
import issueAPI from '../../api/api';
import { responsive, flexBox } from '../../styles/mixin';

function IssueList() {
  const getIssueListAPI = useAxios(issueAPI.getIssueList);
  const { issueList, initIssueList, addMoreIssueList } = useIssueList();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const target = useRef(null);
  const { count } = useInfiniteScroll({
    target,
    targetArray: issueList,
    pageSize: 20,
  });

  useEffect(() => {
    setIsLoading(true);
    getIssueListAPI(
      [],
      {
        state: 'open',
        sort: 'comments',
        per_page: 20,
        page: count,
      },
      {
        onSuccess: data => {
          if (count === 1) initIssueList(data);
          else addMoreIssueList(data);
          setIsLoading(false);
        },
        onError: state => {
          navigate('/error', { state });
        },
      }
    );
    setIsLoading(true);
  }, [count]);
  const AD_EXPOSURE_INDEX = 4;
  return (
    <Container ref={target}>
      {issueList.map((el, idx) => (
        <React.Fragment key={el.id - idx}>
          {idx === AD_EXPOSURE_INDEX && <Advertisement />}
          <IssueItem data={el} />
        </React.Fragment>
      ))}
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}
export default IssueList;
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
  min-height: 300px;
`;
