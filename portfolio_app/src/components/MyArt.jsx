import React from 'react'
import styled from 'styled-components'


const ArtContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Ubuntu Condensed', sans-serif;
`
const ArtSection = styled.section`
  width: 600px;
  padding: 10px 15px 0 15px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`
export const Header = styled.h1`
  margin: 15px 0px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  line-height: 1.6;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: rgb(82,150,250)
`
const MusicTitle = styled.h2`
  margin: 15px 0px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 3px;
  line-height: 1.6;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: rgb(82,150,250)
`
const AppreciatedEP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  color: #e8eddf
`
const EPArt = styled.img`
  width: 400px;
`
const StoreSection = styled.div`
  display: flex;
  flex-wrapper: wrap;
  justify-content: center;
  margin-top: 25px;
`
const StoreLnk = styled.a`
  margin: 0 20px;
`
const StoreLogo = styled.img`
  border-radius: 10px;
  width: 200px;
`
const TechSection = styled.section`
  margin: 1em 0 8em 0;
  border-radius: 10px;
  padding: 5px;
  background: #e8eddf;
  // z-index: 1
`
const ToolBelt = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 35px;
`
const Icon = styled.i`
  font-size: 3.25em;
  padding: 10px;

  &:hover{
    border-radius: 10px;
    background-image: radial-gradient(rgb(100,150,250), rgba(100,150,250,.7), rgba(100,150,250,.2225));
    box-shadow: 0px 0px 50px rgb(100,150,250);
  }
`
const Divider = styled.hr`
  margin: 15px;
  width: 8%
`
export default function MyArt() {
  return (
    <div>
      <ArtContainer>

        <ArtSection>
          <Header>My Art</Header>
          <MusicTitle>Download the "Appreciated" EP</MusicTitle>
          <AppreciatedEP>
            <EPArt src='https://i.imgur.com/chpYvXn.png' alt='appreciated ep' />

            <StoreSection>
              <StoreLnk href='https://itunes.apple.com/us/album/appreciated-ep/id1238965226' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/jeQ6reJ.png" alt="itunes" />
              </StoreLnk>
              <StoreLnk href='https://listen.tidal.com/album/74248583' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/DoMBglI.png" alt="tidal" />
              </StoreLnk>
              <StoreLnk href='https://open.spotify.com/album/7zEyKnrn9ZbcL08pWDRavb' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/k3G2C5e.png" alt="spotify" />
              </StoreLnk>
              <StoreLnk href='https://play.google.com/store/music/album/Stefon_Simmons_Appreciated?id=Bi6k4veuseh4xvacyfia2smp45e' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/4cqzvFh.png" alt="google play" />
              </StoreLnk>
              <StoreLnk href='https://amzn.to/2YMeF6p' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/GJpA6K5.png" alt="amazon music" />
              </StoreLnk>     
            </StoreSection>

          </AppreciatedEP>

        </ArtSection>
        <Divider />
        <TechSection>
          <Header>Technical Utility Belt</Header>
          <ToolBelt>
            <Icon className="devicon-react-plain-wordmark"></Icon>
            <Icon className="devicon-javascript-plain"></Icon>
            <Icon className="devicon-python-plain-wordmark"></Icon>
            <Icon className="devicon-html5-plain-wordmark"></Icon>
            <Icon className="devicon-css3-plain-wordmark"></Icon>
            <Icon className="devicon-nodejs-plain-wordmark"></Icon>
            <Icon className="devicon-express-original-wordmark"></Icon>
            <Icon className="devicon-postgresql-plain-wordmark"></Icon>
            <Icon className="devicon-mongodb-plain-wordmark"></Icon>
            <Icon className="devicon-visualstudio-plain-wordmark"></Icon>
            <Icon className="devicon-git-plain-wordmark"></Icon>
            <Icon className="devicon-github-plain-wordmark"></Icon>
          </ToolBelt>
        </TechSection>

      </ArtContainer>
    </div>
  )
}
