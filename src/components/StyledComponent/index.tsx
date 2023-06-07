import styled from "styled-components";
import { Input, Button } from "antd";
interface DarkModeProps {
  isDarkMode: boolean;
}
const Container = styled.div<DarkModeProps>`
  background-color: ${(props) => (props.isDarkMode ? "#141D2F" : "#ffffff")};
`;
const Wrapper = styled.div<DarkModeProps>`
  width: 730px;
  font-family: "Space Mono", monospace;
  font-style: normal;
  margin: 0 auto;
  font-weight: 400;
  padding-bottom: 105px;
  height: 100vh;
  background-color: ${(props) => (props.isDarkMode ? "#141D2F" : "#ffffff")};
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    width: 327px;
  }
`;
const Header = styled.div`
  padding-top: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;
const TitleHeader = styled.div<DarkModeProps>`
  font-size: 26px;
  line-height: 39px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#4b6a9b")};
`;
const ButtonHeader = styled.button<DarkModeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#4b6a9b")};

  cursor: pointer;
`;
const InputSearch = styled(Input.Search)<DarkModeProps>`
  box-shadow: 0px 16px 30px rgba(70, 96, 187, 0.2);
  border-radius: 15px;
  padding: 0 10px;
  margin-bottom: 24px;
  background-color: ${(props) => (props.isDarkMode ? "#1E2A47" : "#fefefe")};
  .ant-input::placeholder {
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2b3442")};
  }
  .ant-input-group .ant-input-group-addon {
    background-color: ${(props) => (props.isDarkMode ? "#1E2A47" : "#fefefe")};
  }
  .ant-input:focus,
  .ant-input:hover,
  .ant-input-focused,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:hover,
  .ant-input-affix-wrapper-focused {
    border-color: transparent !important;
    box-shadow: none !important;
  }
  .ant-btn {
    padding: 14px 28px;
    height: 52px;
    color: #ffffff !important;
    border-radius: 10px !important;
    font-size: 16px !important;
    line-height: 24px !important;
    text-align: center;
    border: none;
  }
  .ant-input-affix-wrapper {
    padding: 0;
    border: none;
    background-color: ${(props) => (props.isDarkMode ? "#1E2A47" : "#fefefe")};
  }
  .ant-input-group .ant-input {
    background-color: ${(props) => (props.isDarkMode ? "#1E2A47" : "#fefefe")};
    font-family: "Space Mono";
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2b3442")};
    padding: 19px 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    margin-bottom: 16px;
    .ant-input-affix-wrapper {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ant-btn {
      padding: 12px 16px;
    }
    .ant-input::placeholder {
      font-size: 13px;
      line-height: 19px;
    }
    img {
      margin-right: 1px !important;
      width: 17px;
      height: 17px;
    }
  }
`;
const ButtonSearch = styled(Button)`
  background: #0079ff;
`;
const Content = styled.div<DarkModeProps>`
  background-color: ${(props) => (props.isDarkMode ? "#1E2A47" : "#fefefe")};
  box-shadow: 0px 16px 30px rgba(70, 96, 187, 0.2);
  border-radius: 15px;
  padding: 40px 40px 22px 40px;
  position: relative;
  z-index: 99999;
  display: flex;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    padding: 24px;
    height: 455px;
  }
`;
const MainContent = styled.div`
  width: 100%;
`;
const ContentHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    flex-direction: column;
  }
`;
const ContentInfo = styled.div`
@media only screen and (min-width: 320px) and (max-width: 598px) {
    position: absolute;
    left: 0;
    padding: 35px 24px 30px;
    max-width: 279px
  }
}
`;
const ContentImg = styled.img`
  margin-right: 53px;
  width: 117px;
  height: 117px;
  border-radius: 90px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
`;
const Name = styled.div<DarkModeProps>`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 26px;
  line-height: 39px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2b3442")};
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 150px;
  }
`;
const DayJoin = styled.div<DarkModeProps>`
  margin-block-start: 10px;
  margin-block-end: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => (props.isDarkMode ? "#FEFEFE" : "#4b6a9b")};
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    font-size: 13px;
    line-height: 19px;
    margin-block-start: 7px;
  }
`;
const UserName = styled.div`
  margin-block-start: 1px;
  margin-block-end: 0;
  font-size: 16px;
  line-height: 24px;
  color: #0079ff;
  margin-bottom: 16px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 0;
  }
`;
const Profile = styled.div<DarkModeProps>`
  font-size: 14px;
  line-height: 25px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#4b6a9b"};
  margin-bottom: 36px;
`;
const RepositoryContent = styled.div<DarkModeProps>`
  padding: 18px 32px;
  background-color: ${(props) => (props.isDarkMode ? "#141D2F" : "#f6f8ff")};
  border-radius: 10px;
  display: flex;
  margin-bottom: 36px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    padding: 18px 20px 18px 0;
    margin-bottom: 24px;
  }
`;

const RepositoryTitle = styled.div<DarkModeProps>`
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#4b6a9b")};
  margin-bottom: 9px;
`;
const RepositoryResult = styled.div<DarkModeProps>`
  font-size: 22px;
  line-height: 33px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#2b3442"};
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    text-align: center;
  }
`;
const FirstResult = styled.div`
  margin-right: 99px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    margin-right: 32px;
    margin-left: 41px;
  }
`;
const SecondResult = styled.div`
  margin-right: 66px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    margin-right: 18px;
  }
`;
const Communications = styled.div`
  display: flex;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    flex-direction: column;
  }
`;
const CommunicationsElements = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    margin-bottom: 22px;
  }
`;

const CommunicationsIcons = styled.div`
  margin-right: 14px;
`;
const CommunicationsResults = styled.div<DarkModeProps>`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#4B6A9B"};
  @media only screen and (min-width: 320px) and (max-width: 598px) {
    font-size: 13px;
    line-height: 19px;
    max-width: 150px;
  }
`;

export {
  Container,
  Wrapper,
  Header,
  TitleHeader,
  ButtonHeader,
  InputSearch,
  ButtonSearch,
  Content,
  Name,
  DayJoin,
  ContentInfo,
  ContentImg,
  ContentHeader,
  UserName,
  MainContent,
  Profile,
  RepositoryContent,
  RepositoryTitle,
  RepositoryResult,
  FirstResult,
  SecondResult,
  Communications,
  CommunicationsIcons,
  CommunicationsResults,
  CommunicationsElements,
};
