import styled from 'styled-components';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { flexBox, positionCenterY } from '../../styles/mixin';

function NotFound() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClick = () => navigate('/');
  if (!state) return <Navigate to="/" />;

  return (
    <Container>
      <span>{state?.status}</span> {state?.errorMsg}
      <div>요청하신 페이지를 찾을 수 없습니다..!</div>
      <Button type="button" onClick={onClick}>
        go to Issues
      </Button>
    </Container>
  );
}
export default NotFound;
const Container = styled.main`
  ${positionCenterY()};
  ${flexBox('column')};
  width: 100%;
  padding: 10px;
  font-size: 35px;
  font-weight: 600;
  div {
    font-size: 25px;
  }
  > span {
    color: ${({ theme }) => theme.blue};
    margin-right: 10px;
    font-size: 25px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 3vh;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.gray};
  }
`;
