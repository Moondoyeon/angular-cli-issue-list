/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import useAxios from '../../hooks/useAxios';
import ListItem from '../PostList/ListItem';
import Loading from '../../lib/Loading';

function PostDetail() {
  const axios = useAxios();
  const params = useParams();
  const [postDetail, setPostDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const isDetail = true;

  const getPostDetail = async () => {
    try {
      const response = await axios.get(`${params.id}`);
      console.log(response.data);
      setPostDetail(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, []);
  if (isLoading) return <Loading />; // 로딩표시!

  return (
    <Container>
      <Header isDetail={isDetail} />
      <ListItem data={postDetail} isDetail={isDetail} />
    </Container>
  );
}
export default PostDetail;
const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;
