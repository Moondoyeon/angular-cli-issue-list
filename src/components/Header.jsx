/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Header({ isDetail }) {
  const navigate = useNavigate();
  const goPreviousPage = () => {
    navigate(-1);
  };
  return (
    <CustomHeader>
      {isDetail ? (
        <BtnWrapper>
          <IoChevronBackOutline className="button" onClick={goPreviousPage} />
        </BtnWrapper>
      ) : (
        <div className="side" />
      )}
      <div className="center">
        <span>Angular</span> / <span className="repo">Angular-cli</span>
      </div>
      <div className="side" />
    </CustomHeader>
  );
}
export default Header;
const CustomHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};

  .side {
    width: 15%;
  }
  .center {
    width: 70%;
    text-align: center;
    span {
      color: ${({ theme }) => theme.pointColor};
      font-size: 18px;
    }
    .repo {
      font-weight: 700;
    }
  }
`;
const BtnWrapper = styled.div`
  width: 15%;
  padding-left: 10px;
  .button {
    font-size: 30px;
    cursor: pointer;
  }
`;
