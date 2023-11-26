import { Typography } from "@devlaunchers/components/components/atoms";
import LogoMonogram from '../../../../../images/logo-monogram.png'
import {
    PageSixContainer,CongratulationsTitle, CongratulationsBody, AnimationContainer,
    RocketAnamation, CongratulationsShadow, CongratulationsImg, CircleAnamation
} from "./StyledPageSix";

export default function PageSix() {
    return (
        <PageSixContainer>

            <CongratulationsTitle>
                <Typography type="h2">
                    Congratulations!
                </Typography>
            </CongratulationsTitle>

            <CongratulationsBody>
                <Typography type="pLarge" >
                    Thank you for taking the time to complete onboarding.
                    Next, view the ongoing projects and if you find one that you like, contact the project lead.
                </Typography>
            </CongratulationsBody>

            <AnimationContainer>
                <RocketAnamation>
                    <CongratulationsImg src={LogoMonogram} alt="" />
                </RocketAnamation>
                <CircleAnamation>
                    <CongratulationsShadow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CongratulationsShadow>
                </CircleAnamation>
            </AnimationContainer>

        </PageSixContainer>
    );
}