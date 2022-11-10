import { Children } from "react";
import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/componets/CSSReset";
import Menu from "../src/componets/Menu.js";
import { StyledTimeline } from "../src/componets/Timeline";

const HomePage = () => {
  const styleOfPage = { 
    // backgroundColor: "red" 
  };

  return (
    <>
      <CSSReset />
      <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <TimeLine playlist={config.playlists}>{Children}</TimeLine>
      </div>
    </>
  );
};

// const Menu = () => {
//   return <div>Menu</div>;
// };

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
};

const TimeLine = (props) => {
  const playlistVideos = Object.keys(props.playlist);
  //Statment
  //Retorno pro expressão
  return (
    <StyledTimeline>
      {playlistVideos.map((playlistNames) => {
        const videos = props.playlist[playlistNames];
        return (
          <section>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
};

export default HomePage;
