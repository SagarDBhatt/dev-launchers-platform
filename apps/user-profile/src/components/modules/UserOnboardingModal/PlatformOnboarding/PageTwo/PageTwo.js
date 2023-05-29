import React from 'react';
import {
  PageTwoContainer,
  ProjectImage,
  ImageContainer,
  NetworkImage,
  LevelUpImage,
} from './StyledPageTwo';
import { Typography } from '@devlaunchers/components/components/atoms';

export default function PageTwo() {
  return (
    <>
      <Typography type="h2" textAlign="center">
        Here are some of the things you can do at Devlaunchers
      </Typography>
      <PageTwoContainer>
        <ImageContainer>
          <ProjectImage></ProjectImage>
          <div>
            <Typography>Find Open Source Projects</Typography>
            <Typography>
              We have have upcoming projects that need your help
            </Typography>
          </div>
        </ImageContainer>
        <ImageContainer>
          <NetworkImage></NetworkImage>
          <div>
            <Typography>Connect with Experienced People</Typography>
            <Typography>
              Work on agile teams to improve aspects of our software
            </Typography>
          </div>
        </ImageContainer>
        <ImageContainer>
          <LevelUpImage></LevelUpImage>
          <div>
            <Typography>Gain Industry Experience</Typography>
            <Typography>
              We’ll support your learning and leadership experience along the
              way
            </Typography>
          </div>
        </ImageContainer>
      </PageTwoContainer>
    </>
  );
}
