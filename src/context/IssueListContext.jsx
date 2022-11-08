/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import { createContext, useState, useContext } from 'react';

export const IssueListContext = createContext({
  issueList: [],
  setIssueList: () => {},
});
export const useIssueList = () => useContext(IssueListContext);
function IssueListProvider({ children }) {
  const [issueList, setIssueList] = useState([]);
  const initIssueList = issueList => {
    setIssueList(issueList);
  };
  const addMoreIssueList = nextIssues => {
    setIssueList(prev => [...prev, ...nextIssues]);
  };
  return (
    <IssueListContext.Provider value={{ issueList, initIssueList, addMoreIssueList }}>
      {children}
    </IssueListContext.Provider>
  );
}

export default IssueListProvider;
