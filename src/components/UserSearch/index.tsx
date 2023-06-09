import {
  ButtonHeader,
  ButtonSearch,
  Communications,
  CommunicationsElements,
  CommunicationsIcons,
  CommunicationsResults,
  Container,
  Content,
  ContentHeader,
  ContentImg,
  ContentInfo,
  DayJoin,
  FirstResult,
  Header,
  InputSearch,
  MainContent,
  Name,
  Profile,
  RepositoryContent,
  RepositoryResult,
  RepositoryTitle,
  SecondResult,
  TitleHeader,
  UserName,
  Wrapper,
} from "../StyledComponent";
import iconMoon from "../../assets/images/iconMoon.svg";
import iconSun from "../../assets/images/iconSun.svg";
import iconMoonWhite from "../../assets/images/iconMoonWhite.svg";
import iconLocation from "../../assets/images/iconLocation.svg";
import iconLocationWhite from "../../assets/images/iconLocationWhite.svg";
import iconLink from "../../assets/images/iconLink.svg";
import iconLinkWhite from "../../assets/images/iconLinkWhite.svg";
import iconTwitter from "../../assets/images/iconTwitter.svg";
import iconTwitterWhite from "../../assets/images/iconTwitterWhite.svg";
import iconGithub from "../../assets/images/iconGithub.svg";
import iconGithubWhite from "../../assets/images/iconGithubWhite.svg";
import iconSearch from "../../assets/images/iconSearch.svg";
import iconClose from "../../assets/images/iconClose.svg";

import { useState, useEffect } from "react";
import axios from "axios";
type UserData = {
  name: string;
  login: string;
  avatar_url: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  html_url: string;
  twitter_username: string | null;
};
const UserSearch = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode ? "true" : "false");
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedTheme === "true");
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/baonguyen2711"
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      console.log("a", response.data);

      setShowError(false);
    } catch (error) {
      console.error(error);
      setShowError(true);
    }
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <Wrapper isDarkMode={isDarkMode}>
        <Header>
          <TitleHeader isDarkMode={isDarkMode}>devfinder</TitleHeader>
          <ButtonHeader onClick={handleToggleTheme} isDarkMode={isDarkMode}>
            {isDarkMode ? (
              <>
                LIGHT
                <img src={iconSun} alt="" style={{ marginLeft: "28px" }} />
              </>
            ) : (
              <>
                DARK
                <img src={iconMoon} alt="" style={{ marginLeft: "28px" }} />
              </>
            )}
          </ButtonHeader>
        </Header>
        <InputSearch
          value={username}
          isDarkMode={isDarkMode}
          placeholder="Search Github username..."
          enterButton={<ButtonSearch>Search</ButtonSearch>}
          prefix={
            <img
              src={iconSearch}
              alt=""
              style={{ marginRight: "11px" }}
              onClick={handleSearch}
            ></img>
          }
          suffix={
            showError && (
              <span
                style={{
                  color: "#FF0000",
                  marginRight: "31px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconClose}
                  alt=""
                  style={{ marginRight: "12px" }}
                  onClick={() => {
                    setUsername("");
                    setShowError(false);
                  }}
                />
                No results
              </span>
            )
          }
          onSearch={handleSearch}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Content
          isDarkMode={isDarkMode}
          style={{ display: showError ? "none" : "flex" }}
        >
          {userData && (
            <>
              <div>
                <ContentImg src={userData.avatar_url} alt={userData.name} />
              </div>
              <MainContent>
                <ContentHeader>
                  <Name isDarkMode={isDarkMode}>
                    {userData.name ?? userData.login}
                    <UserName>@{userData.login}</UserName>
                  </Name>
                  <DayJoin isDarkMode={isDarkMode}>
                    Joined {new Date(userData.created_at).toLocaleDateString()}
                  </DayJoin>
                </ContentHeader>
                <ContentInfo>
                  <Profile isDarkMode={isDarkMode}>
                    {userData.bio ?? "This profile has no bio"}
                  </Profile>
                  <RepositoryContent isDarkMode={isDarkMode}>
                    <FirstResult>
                      <RepositoryTitle isDarkMode={isDarkMode}>
                        Repos
                      </RepositoryTitle>
                      <RepositoryResult isDarkMode={isDarkMode}>
                        {userData.public_repos}
                      </RepositoryResult>
                    </FirstResult>
                    <SecondResult>
                      <RepositoryTitle isDarkMode={isDarkMode}>
                        Followers
                      </RepositoryTitle>
                      <RepositoryResult isDarkMode={isDarkMode}>
                        {userData.followers}
                      </RepositoryResult>
                    </SecondResult>
                    <div>
                      <RepositoryTitle isDarkMode={isDarkMode}>
                        Following
                      </RepositoryTitle>
                      <RepositoryResult isDarkMode={isDarkMode}>
                        {userData.following}
                      </RepositoryResult>
                    </div>
                  </RepositoryContent>
                  <Communications>
                    <div style={{ marginRight: "101px" }}>
                      <CommunicationsElements>
                        <CommunicationsIcons>
                          {isDarkMode ? (
                            <>
                              <img
                                src={iconLocationWhite}
                                alt=""
                                style={{ marginRight: "6px" }}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src={iconLocation}
                                alt=""
                                style={{ marginRight: "6px" }}
                              />
                            </>
                          )}
                        </CommunicationsIcons>
                        <CommunicationsResults isDarkMode={isDarkMode}>
                          {userData.location ?? "Not available"}
                        </CommunicationsResults>
                      </CommunicationsElements>
                      <CommunicationsElements>
                        <CommunicationsIcons>
                          {isDarkMode ? (
                            <>
                              <img src={iconTwitterWhite} alt="" />
                            </>
                          ) : (
                            <>
                              <img src={iconTwitter} alt="" />
                            </>
                          )}
                        </CommunicationsIcons>
                        <CommunicationsResults isDarkMode={isDarkMode}>
                          {userData.twitter_username ?? "Not available"}
                        </CommunicationsResults>
                      </CommunicationsElements>
                    </div>
                    <div>
                      <CommunicationsElements>
                        <CommunicationsIcons>
                          {isDarkMode ? (
                            <>
                              <img src={iconLinkWhite} alt="" />
                            </>
                          ) : (
                            <>
                              <img src={iconLink} alt="" />
                            </>
                          )}
                        </CommunicationsIcons>
                        <CommunicationsResults isDarkMode={isDarkMode}>
                          {userData.html_url ?? "Not available"}
                        </CommunicationsResults>
                      </CommunicationsElements>
                      <CommunicationsElements>
                        <CommunicationsIcons>
                          {isDarkMode ? (
                            <>
                              <img src={iconGithubWhite} alt="" />
                            </>
                          ) : (
                            <>
                              <img src={iconGithub} alt="" />
                            </>
                          )}
                        </CommunicationsIcons>
                        <CommunicationsResults isDarkMode={isDarkMode}>
                          @{userData.login}
                        </CommunicationsResults>
                      </CommunicationsElements>
                    </div>
                  </Communications>
                </ContentInfo>
              </MainContent>
            </>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default UserSearch;
