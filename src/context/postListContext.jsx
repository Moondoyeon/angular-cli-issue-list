/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const PostListContext = createContext({
  postList: [],
  setPostList: () => {},
});

function PostListProvider({ children }) {
  const [postList, setPostList] = useState([]);

  return <PostListContext.Provider value={{ postList, setPostList }}>{children}</PostListContext.Provider>;
}

export default PostListProvider;
