import React from 'react'
import styled from 'styled-components'
import CDDescription from './CDDescription'


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
  align-items: center;
  margin-top: 25px;
`
const StoreLnk = styled.a`
  margin: 0 20px;
`
const StoreLogo = styled.img`
  border-radius: 10px;
  width: 200px;
  transition: transform .5s;

  &:hover{
    transform: scale(1.25)
  }
`
const ListingSection = styled.section`
  margin: 1em 0 8em 0;
  border-radius: 10px;
  padding: 5px;
`
const ToolBelt = styled.div`
  display: flex;
  
`
const CDCover = styled.img`
  width: 300px
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
          <MusicTitle>Listen to the "Appreciated" EP</MusicTitle>
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
                <StoreLogo src="https://imgur.com/6XTu30o.png" alt="google play" />
              </StoreLnk>
              <StoreLnk href='https://amzn.to/2YMeF6p' target='_blank' rel='noopener noreferrer'>
                <StoreLogo src="https://imgur.com/GJpA6K5.png" alt="amazon music" />
              </StoreLnk>     
            </StoreSection>

          </AppreciatedEP>

        </ArtSection>
        <Divider />
        <ListingSection>
          <Header>Appreciated Track Listing</Header>
          <ToolBelt>
            <CDCover src='https://imgur.com/AhVFued.png' alt='appreciated front cover' />
            <CDCover src='https://imgur.com/9LVYiwt.png' alt='appreciated back cover' /> 
            <CDDescription />
          </ToolBelt>
        </ListingSection>

      </ArtContainer>
    </div>
  )
}
