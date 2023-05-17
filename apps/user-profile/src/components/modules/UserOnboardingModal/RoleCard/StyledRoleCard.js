import styled from "styled-components";
import { Typography } from '@devlaunchers/components/components/atoms'
import React from 'react';


export const IconImg = ({iconImg}) => {
    switch (iconImg) {
        case 'Onboarding':
            return (<svg width="80" height="80" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8906 0.779297H7.64062C7.04389 0.779297 6.47159 1.01635 6.04963 1.43831C5.62768 1.86026 5.39062 2.43256 5.39062 3.0293V5.2793H3.14062C2.54389 5.2793 1.97159 5.51635 1.54963 5.93831C1.12768 6.36026 0.890625 6.93256 0.890625 7.5293V23.2793C0.890625 23.876 1.12768 24.4483 1.54963 24.8703C1.97159 25.2922 2.54389 25.5293 3.14062 25.5293H23.3906C23.9874 25.5293 24.5597 25.2922 24.9816 24.8703C25.4036 24.4483 25.6406 23.876 25.6406 23.2793V21.0293H27.8906C28.4874 21.0293 29.0597 20.7922 29.4816 20.3703C29.9036 19.9483 30.1406 19.376 30.1406 18.7793V3.0293C30.1406 2.43256 29.9036 1.86026 29.4816 1.43831C29.0597 1.01635 28.4874 0.779297 27.8906 0.779297ZM23.3906 7.5293V9.7793H3.14062V7.5293H23.3906ZM27.8906 18.7793H25.6406V7.5293C25.6406 6.93256 25.4036 6.36026 24.9816 5.93831C24.5597 5.51635 23.9874 5.2793 23.3906 5.2793H7.64062V3.0293H27.8906V18.7793Z" fill="black"/>
            </svg>
            )

        default:
            return (<svg width="80" height="80" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5625 17.125C25.5625 18.6207 25.119 20.0829 24.288 21.3265C23.457 22.5701 22.2759 23.5394 20.8941 24.1118C19.5122 24.6842 17.9916 24.834 16.5246 24.5422C15.0577 24.2504 13.7101 23.5301 12.6525 22.4725C11.5949 21.4149 10.8746 20.0674 10.5828 18.6004C10.291 17.1334 10.4408 15.6128 11.0132 14.231C11.5856 12.8491 12.5549 11.668 13.7985 10.837C15.0422 10.006 16.5043 9.5625 18 9.5625C20.005 9.56477 21.9272 10.3623 23.345 11.78C24.7627 13.1978 25.5602 15.12 25.5625 17.125ZM35.875 18.5C35.875 22.0353 34.8267 25.4913 32.8625 28.4308C30.8984 31.3703 28.1067 33.6614 24.8405 35.0143C21.5742 36.3673 17.9802 36.7212 14.5128 36.0315C11.0454 35.3418 7.86034 33.6394 5.36047 31.1395C2.86061 28.6397 1.15818 25.4547 0.468471 21.9872C-0.22124 18.5198 0.132745 14.9258 1.48566 11.6595C2.83858 8.3933 5.12966 5.60161 8.06919 3.63748C11.0087 1.67335 14.4647 0.625 18 0.625C22.7392 0.630005 27.2829 2.51487 30.634 5.86599C33.9851 9.21712 35.87 13.7608 35.875 18.5ZM33.125 18.5C33.1228 16.4642 32.7101 14.4497 31.9115 12.5771C31.1129 10.7045 29.9448 9.01214 28.4772 7.60129C27.0095 6.19044 25.2724 5.09006 23.3697 4.36596C21.4671 3.64187 19.4379 3.30892 17.4036 3.38703C9.30829 3.69984 2.85266 10.4425 2.87501 18.543C2.88277 22.2306 4.24283 25.7873 6.69751 28.5392C7.69717 27.0893 8.96701 25.8457 10.4375 24.8766C10.5629 24.7938 10.7119 24.7543 10.8619 24.7642C11.0118 24.7742 11.1543 24.8329 11.2677 24.9316C13.1363 26.5478 15.5243 27.4373 17.9949 27.4373C20.4654 27.4373 22.8535 26.5478 24.722 24.9316C24.8354 24.8329 24.9779 24.7742 25.1279 24.7642C25.2778 24.7543 25.4268 24.7938 25.5522 24.8766C27.0245 25.8452 28.2962 27.0888 29.2974 28.5392C31.7642 25.7772 33.1268 22.2032 33.125 18.5Z" fill="black"/>
            </svg> 
            )  
      }
}

export const RoleCardContainer = styled.div`
    margin-top: 50px;
    /* Components */
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    gap: 10px;
    width: 220px;
    height: 250px;
    border: 1px solid #7F7E7F;
    border-radius: 10px;
`;

export const PicWrapper = styled.div`
    width: 50%;
`;


export const TextWrapper = styled.div`
    text-align: center;
    width: 100%;
`;

export const TextContents = (props) => {
    switch (props.theme) {
        case 'theme1':
            return (
                <TextWrapper>
                    <Typography type="pLarge" style={{color: "#295774"}}>{props.title}</Typography>
                    <Typography type="pSmall">{props.subtitle}</Typography>
                </TextWrapper>
            )

        case 'theme2':
            return (
                <TextWrapper>
                    <Typography type="pLarge" style={{color: "#3A7CA5"}}>{props.title}</Typography>
                    <Typography type="pSmall">{props.subtitle}</Typography>
                </TextWrapper>
            )
        
        case 'theme3':
            return (
                <TextWrapper>
                    <Typography type="pLarge" style={{color: "#FF7F0E"}}>{props.title}</Typography>
                    <Typography type="pSmall">{props.subtitle}</Typography>
                </TextWrapper>
            )

        default:
            return (
                <TextWrapper>
                    <Typography type="pLarge">{title}</Typography>
                    <Typography type="pSmall">{subtitle}</Typography>
                </TextWrapper>
            )  
      }
}

