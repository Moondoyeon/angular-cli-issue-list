/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoChatboxOutline } from 'react-icons/io5';
import MarkdownRender from '../../lib/Markdown';

function ListItem({ data, isDetail }) {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate(`/${data.number}`);
  };
  const createdAt = new Date(data.created_at).toLocaleDateString().slice(0, -1);
  return (
    <Container>
      <Top>
        {isDetail && (
          <ImgWrapper>
            <img src={data.user.avatar_url} alt="profile" />
          </ImgWrapper>
        )}
        <TopLeft>
          <Title>
            <div>#{data.number}</div>
            <div className="title" onClick={isDetail ? null : goDetailPage}>
              {data.title}
            </div>
          </Title>
          <Info>
            <div>{data.user.login}</div>
            <div>opened on {createdAt}</div>
          </Info>
        </TopLeft>
        <TopRight>
          <IoChatboxOutline className="chat-icon" />
          <div>{data.comments}</div>
        </TopRight>
      </Top>
      {isDetail && (
        <Bottom>
          <MarkdownRender>{data.body}</MarkdownRender>
        </Bottom>
      )}
    </Container>
  );
}
export default ListItem;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  align-items: center;
`;
const Bottom = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.darkGrayColor};
`;

const ImgWrapper = styled.div`
  padding: 5px;
  img {
    width: 60px;
    border-radius: 100%;
  }
`;
const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const TopRight = styled.div`
  width: 10%;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${({ theme }) => theme.grayColor};
  .chat-icon {
    white-space: nowrap;
    font-size: 14px;
  }
  div {
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Title = styled.div`
  display: flex;
  .title {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;
const Info = styled.div`
  display: flex;
  div {
    margin-right: 5px;
    color: ${({ theme }) => theme.grayColor};
    font-size: 14px;
  }
`;
