import React from 'react';
import './WelcomePage.css';
import Grid from '@mui/material/Grid';

import RainbowBar from '../../../../../site-projects/src/components/common/RainbowBar';

import handWithLightbulbImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';
import bulletinBoardPostItImage from '../../../images/bulletin-board-postit.png';
import rocketImage from '../../../images/logo-monogram.png';
import AppIdeaGeneratorButton from '../IdeaGeneratorButton/AppIdeaGeneratorButton';
import IdeaspaceNavCard from '../IdeaspaceNavCard';

import {
  Description,
  ButtonArea,
  StyledLink,
  WelcomeNavigationButtonImage,
  Header,
  ButtonWrapper,
  WelcomeMessage,
  Subheader,
  GetStartedDiv,
  RocketImage,
} from './StyledWelcomePage';

const submitIdeaCardBackgroundColor = `rgba(255,127,14, 0.9), rgba(255,127,14, 0.9))`;
const submitIdeaCardTitle = `Submit Your Idea`;
const submitIdeaCardDescription = `Have an idea for development? Turn your idea into a product through community.`;

const helpExistingIdeaCardBackgroundColor = `rgba(255,171,0, 0.9), rgba(255,171,0, 0.9))`;
const helpExistingIdeaCardTitle = `Help Existing Idea`;
const helpExistingIdeaCardDescription = ` Want to help developing an idea? Check out ideas submitted by other Dev Launchers!`;

function WelcomePage() {
  return (
    <Grid container direction="row" alignItems="center" spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          background:
            'linear-gradient(0deg, rgba(222,222,222,1) 50%, rgba(240,237,238,1) 50%)',
        }}
      >
        <Header>
          <h1>IdeaSpace (Beta)</h1>
          <RainbowBar />
        </Header>

        <Description>
          <WelcomeMessage>WELCOME TO THE IDEA PLATFORM!</WelcomeMessage>
          <Subheader>
            Have an idea for a development project? Want to help develop an
            idea? Want to generate an idea?
          </Subheader>
          <GetStartedDiv>
            LET'S GET STARTED
            <RocketImage src={rocketImage} />
          </GetStartedDiv>
        </Description>

        <ButtonArea>
          <ButtonWrapper
            style={{
              backgroundColor: '#FF7F0E'
            }}
          >
            <StyledLink href="/ideaspace/submit">
              <IdeaspaceNavCard
                cardBackgroundColor={submitIdeaCardBackgroundColor}
                cardBackgroundImage={bulletinBoardPostItImage}
                cardTitle={submitIdeaCardTitle}
                cardDescription={submitIdeaCardDescription}
              />
            </StyledLink>
          </ButtonWrapper>

          <ButtonWrapper
            style={{
              backgroundColor: '#FFAB00',
            }}
          >
            <StyledLink href="/ideaspace/browse">
              <IdeaspaceNavCard
                cardBackgroundColor={helpExistingIdeaCardBackgroundColor}
                cardBackgroundImage={helpButtonImage}
                cardTitle={helpExistingIdeaCardTitle}
                cardDescription={helpExistingIdeaCardDescription}
                cssClass="help-nav-button"
              />
            </StyledLink>
          </ButtonWrapper>

          <ButtonWrapper
            style={{
              background: '#3A7CA5',
              display: 'inline-flex',
            }}
          >
            <AppIdeaGeneratorButton
              style={{
                background: '#FFAB00',
                height: '100%',
                width: '100%',
                minHeight: '300px',
                maxHeight: '300px',
                background: `linear-gradient(rgba(58,124,165, 0.9), rgba(58,124,165, 0.9)), url(${handWithLightbulbImage})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
              }}
              showExtendedContent
            ></AppIdeaGeneratorButton>
          </ButtonWrapper>
        </ButtonArea>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
