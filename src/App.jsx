import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import IssueDetail from './pages/IssueDetail';
import IssueList from './pages/IssueList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/:id" element={<IssueDetail />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
