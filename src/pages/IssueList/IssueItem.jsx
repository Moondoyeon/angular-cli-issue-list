/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoChatboxOutline } from 'react-icons/io5';
import MarkdownPreview from '@uiw/react-markdown-preview';
import parseDate from '../../utils/parseDate';
import { ReactComponent as Circle } from '../../assets/circle-dot.svg';
import { flexBox, responsive } from '../../styles/mixin';

function IssueItem({ data, isDetail }) {
  const navigate = useNavigate();
  const createdAt = parseDate(data.created_at);
  const goDetailPage = () => {
    navigate(`/${data.number}`);
  };
  return (
    <Container>
      <Top>
        {isDetail && (
          <ImgWrapper>
            <img src={data.user.avatar_url} alt="profile" />
          </ImgWrapper>
        )}
        <SVGWrapper>
          <CircleSVG />
        </SVGWrapper>
        <TopLeft>
          <Title>
            <div className="title" onClick={isDetail ? null : goDetailPage}>
              {data.title}
            </div>
          </Title>
          <Info>
            <div>#{data.number}</div>
            <div>opened on {createdAt}</div>
            <div>by {data.user.login}</div>
          </Info>
        </TopLeft>
        <TopRight>
          <IoChatboxOutline className="chat-icon" />
          <div>{data.comments}</div>
        </TopRight>
      </Top>
      {isDetail && (
        <Bottom>
          <MarkdownPreview source={data.body} />
        </Bottom>
      )}
    </Container>
  );
}
export default IssueItem;
const Container = styled.div`
  width: 100%;
`;
const Top = styled.div`
  ${flexBox('row', '', 'center')};
  padding: 15px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.lightGray};
`;
const SVGWrapper = styled.div`
  ${flexBox('row', '', 'flex-start')};
  height: 46px;
`;
const CircleSVG = styled(Circle)`
  width: 15px;
  padding-bottom: 4px;
`;
const Bottom = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.darkGray};
`;

const ImgWrapper = styled.div`
  margin-right: 10px;
  img {
    width: 40px;
    border-radius: 100%;
  }
`;
const TopLeft = styled.div`
  ${flexBox('column', '', '')};
  width: 90%;
  ${responsive('phone')} {
    width: 100%;
  }
`;
const TopRight = styled.div`
  width: 10%;
  white-space: nowrap;
  ${flexBox('row', 'flex-end', 'flex-start')};
  color: ${({ theme }) => theme.mediumGray};
  .chat-icon {
    white-space: nowrap;
    font-size: 14px;
  }
  div {
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
  }
  ${responsive('phone')} {
    display: none;
    width: 0%;
  }
`;

const Title = styled.div`
  ${flexBox('row', '', '')};
  .title {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;
const Info = styled.div`
  ${flexBox('row', '', '')};
  white-space: nowrap;
  div {
    margin-right: 5px;
    color: ${({ theme }) => theme.mediumGray};
    font-size: 14px;
  }
`;
