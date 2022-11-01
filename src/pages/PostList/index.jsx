/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { PostListContext } from '../../context/postListContext';
import useAxios from '../../hooks/useAxios';
import Loading from '../../lib/Loading';
import ListItem from './ListItem';

function PostList() {
  const axios = useAxios();
  const { postList, setPostList } = useContext(PostListContext);
  const [isLoading, setIsLoading] = useState(true);
  const getPostList = async () => {
    try {
      const response = await axios.get('', {
        params: {
          state: 'open',
          sort: 'comments',
        },
      });
      setPostList(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getPostList();
  }, []);
  if (isLoading) return <Loading />; // 로딩표시!

  return (
    <Container>
      {postList && <Header />}
      {postList && postList.map(el => <ListItem data={el} key={el.id} />)}
    </Container>
  );
}
export default PostList;
const Container = styled.div``;
