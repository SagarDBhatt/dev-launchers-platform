import Layer from "@devlaunchers/components/components/atoms/Layer/Layer";
import styled from "styled-components";
import React from 'react';
export const OnboardingCardLayer = styled.div`
    display: flex;
    justify-content: space-between;
    radius: 10px;
    width: 686px;
    height: auto;
    position: relative;
    border-radius: 10px;
    border: 1px solid #000000;
    background: ${props => props.checked ? '#F2F2F2' : 'white'};

`;

export const PicWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 18px;
`;

export const TextWrapper = styled.div`
    padding-left: 34px;
`;
export const CheckedWrapper = styled.div`
    align-self: center;
    padding-right: 34px;
`;
// export const  circle_checked

export const CheckedSVG = ({ checked }) => (
    checked ? (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 0.5C12.2833 0.5 9.38319 1.37973 6.91645 3.02796C4.44971 4.67618 2.52713 7.01886 1.39181 9.75975C0.256499 12.5006 -0.0405507 15.5166 0.538227 18.4264C1.11701 21.3361 2.54562 24.0088 4.6434 26.1066C6.74119 28.2044 9.41393 29.633 12.3236 30.2118C15.2334 30.7906 18.2494 30.4935 20.9903 29.3582C23.7311 28.2229 26.0738 26.3003 27.722 23.8335C29.3703 21.3668 30.25 18.4667 30.25 15.5C30.2458 11.523 28.6641 7.71017 25.852 4.89804C23.0398 2.0859 19.227 0.5042 15.25 0.5ZM21.8356 12.8548L13.7587 20.9317C13.6515 21.039 13.5242 21.1241 13.3842 21.1822C13.2441 21.2402 13.0939 21.2701 12.9423 21.2701C12.7907 21.2701 12.6405 21.2402 12.5005 21.1822C12.3604 21.1241 12.2331 21.039 12.126 20.9317L8.66443 17.4702C8.44792 17.2537 8.32629 16.96 8.32629 16.6538C8.32629 16.3477 8.44792 16.054 8.66443 15.8375C8.88094 15.621 9.17458 15.4994 9.48077 15.4994C9.78696 15.4994 10.0806 15.621 10.2971 15.8375L12.9423 18.4841L20.2029 11.2221C20.3101 11.1149 20.4374 11.0299 20.5774 10.9719C20.7175 10.9138 20.8676 10.884 21.0192 10.884C21.1708 10.884 21.321 10.9138 21.461 10.9719C21.6011 11.0299 21.7284 11.1149 21.8356 11.2221C21.9428 11.3293 22.0278 11.4566 22.0858 11.5967C22.1439 11.7367 22.1737 11.8868 22.1737 12.0385C22.1737 12.1901 22.1439 12.3402 22.0858 12.4803C22.0278 12.6203 21.9428 12.7476 21.8356 12.8548Z" fill="#3A7CA5" />
        </svg>
    ) : (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.25" cy="15.5" r="13" stroke="#DFDCDC" stroke-width="4" />
        </svg>
    )
)

export const IconImg = ({iconImg}) => {
    console.log("style");
    console.log(iconImg);
    switch (iconImg) {
        case 'Login':
            return (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5625 17.125C25.5625 18.6207 25.119 20.0829 24.288 21.3265C23.457 22.5701 22.2759 23.5394 20.8941 24.1118C19.5122 24.6842 17.9916 24.834 16.5246 24.5422C15.0577 24.2504 13.7101 23.5301 12.6525 22.4725C11.5949 21.4149 10.8746 20.0674 10.5828 18.6004C10.291 17.1334 10.4408 15.6128 11.0132 14.231C11.5856 12.8491 12.5549 11.668 13.7985 10.837C15.0422 10.006 16.5043 9.5625 18 9.5625C20.005 9.56477 21.9272 10.3623 23.345 11.78C24.7627 13.1978 25.5602 15.12 25.5625 17.125ZM35.875 18.5C35.875 22.0353 34.8267 25.4913 32.8625 28.4308C30.8984 31.3703 28.1067 33.6614 24.8405 35.0143C21.5742 36.3673 17.9802 36.7212 14.5128 36.0315C11.0454 35.3418 7.86034 33.6394 5.36047 31.1395C2.86061 28.6397 1.15818 25.4547 0.468471 21.9872C-0.22124 18.5198 0.132745 14.9258 1.48566 11.6595C2.83858 8.3933 5.12966 5.60161 8.06919 3.63748C11.0087 1.67335 14.4647 0.625 18 0.625C22.7392 0.630005 27.2829 2.51487 30.634 5.86599C33.9851 9.21712 35.87 13.7608 35.875 18.5ZM33.125 18.5C33.1228 16.4642 32.7101 14.4497 31.9115 12.5771C31.1129 10.7045 29.9448 9.01214 28.4772 7.60129C27.0095 6.19044 25.2724 5.09006 23.3697 4.36596C21.4671 3.64187 19.4379 3.30892 17.4036 3.38703C9.30829 3.69984 2.85266 10.4425 2.87501 18.543C2.88277 22.2306 4.24283 25.7873 6.69751 28.5392C7.69717 27.0893 8.96701 25.8457 10.4375 24.8766C10.5629 24.7938 10.7119 24.7543 10.8619 24.7642C11.0118 24.7742 11.1543 24.8329 11.2677 24.9316C13.1363 26.5478 15.5243 27.4373 17.9949 27.4373C20.4654 27.4373 22.8535 26.5478 24.722 24.9316C24.8354 24.8329 24.9779 24.7742 25.1279 24.7642C25.2778 24.7543 25.4268 24.7938 25.5522 24.8766C27.0245 25.8452 28.2962 27.0888 29.2974 28.5392C31.7642 25.7772 33.1268 22.2032 33.125 18.5Z" fill="black"/>
            </svg>
            )            

        case 'Onboarding':
            return (<svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8906 0.779297H7.64062C7.04389 0.779297 6.47159 1.01635 6.04963 1.43831C5.62768 1.86026 5.39062 2.43256 5.39062 3.0293V5.2793H3.14062C2.54389 5.2793 1.97159 5.51635 1.54963 5.93831C1.12768 6.36026 0.890625 6.93256 0.890625 7.5293V23.2793C0.890625 23.876 1.12768 24.4483 1.54963 24.8703C1.97159 25.2922 2.54389 25.5293 3.14062 25.5293H23.3906C23.9874 25.5293 24.5597 25.2922 24.9816 24.8703C25.4036 24.4483 25.6406 23.876 25.6406 23.2793V21.0293H27.8906C28.4874 21.0293 29.0597 20.7922 29.4816 20.3703C29.9036 19.9483 30.1406 19.376 30.1406 18.7793V3.0293C30.1406 2.43256 29.9036 1.86026 29.4816 1.43831C29.0597 1.01635 28.4874 0.779297 27.8906 0.779297ZM23.3906 7.5293V9.7793H3.14062V7.5293H23.3906ZM27.8906 18.7793H25.6406V7.5293C25.6406 6.93256 25.4036 6.36026 24.9816 5.93831C24.5597 5.51635 23.9874 5.2793 23.3906 5.2793H7.64062V3.0293H27.8906V18.7793Z" fill="black"/>
            </svg>
            )

        case 'Zenhub':
            (<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0C8.05481 0 0 8.17765 0 18.2745C0 26.8627 5.80442 33.9906 13.6356 36C13.5452 35.7714 13.5008 35.451 13.5008 35.1322V32.0247H11.2504C10.0356 32.0247 8.90962 31.4773 8.41481 30.471C7.82962 29.3745 7.73923 27.6839 6.25481 26.6326C5.80443 26.2671 6.16443 25.9016 6.65923 25.9467C7.60443 26.2204 8.36885 26.8612 9.08885 27.8192C9.80885 28.7788 10.1244 29.0075 11.474 29.0075C12.1037 29.0075 13.0933 28.9624 13.994 28.824C14.4889 27.544 15.3437 26.4024 16.3792 25.8549C10.3496 25.1239 7.46962 22.1083 7.46962 17.9961C7.46962 16.2138 8.23404 14.5232 9.49481 13.0612C9.09038 11.6444 8.54962 8.72044 9.67557 7.57887C12.3763 7.57887 13.9956 9.36121 14.4 9.81691C15.7496 9.35966 17.2356 9.08593 18.7644 9.08593C20.3392 9.08593 21.7792 9.35966 23.1289 9.81691C23.5333 9.35966 25.154 7.57887 27.8533 7.57887C28.9333 8.67534 28.4385 11.6444 27.9881 13.0612C29.2489 14.4781 29.9689 16.2138 29.9689 17.9961C29.9689 22.1083 27.1333 25.1239 21.1496 25.7632C22.8148 26.631 23.9852 29.0977 23.9852 30.9251V35.0871C23.9852 35.2239 23.9408 35.3608 23.9408 35.4976C30.96 33.031 36 26.2702 36 18.2745C36 8.17765 27.9452 0 18 0Z" fill="black"/>
            </svg>
            )
          
        case 'Discord':
            (<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5224 2.28034C30.5124 2.26125 30.4958 2.2463 30.4756 2.23815C28.1415 1.18398 25.6784 0.432274 23.1479 0.00184382C23.1249 -0.00236355 23.1011 0.000671698 23.08 0.0105179C23.0589 0.0203641 23.0414 0.0365199 23.0302 0.0566877C22.6948 0.655926 22.3903 1.27144 22.1179 1.90089C19.3901 1.49329 16.6155 1.49329 13.8877 1.90089C13.6135 1.26984 13.3042 0.654174 12.9611 0.0566877C12.9493 0.0369582 12.9318 0.0211744 12.9108 0.0113922C12.8898 0.00160999 12.8662 -0.00171732 12.8433 0.00184382C10.3125 0.43137 7.8492 1.18313 5.51542 2.23821C5.49544 2.24655 5.47858 2.26078 5.46717 2.27895C0.800076 9.13974 -0.478418 15.8318 0.148768 22.4411C0.150532 22.4573 0.155588 22.473 0.163634 22.4872C0.17168 22.5014 0.182552 22.5139 0.195604 22.5239C2.91321 24.5047 5.95289 26.0166 9.18492 26.9952C9.20768 27.0019 9.23199 27.0016 9.25457 26.9943C9.27715 26.987 9.29692 26.9731 9.31123 26.9544C10.0054 26.0247 10.6205 25.0401 11.1502 24.0108C11.1575 23.9967 11.1617 23.9812 11.1624 23.9654C11.1632 23.9496 11.1605 23.9338 11.1546 23.919C11.1487 23.9043 11.1397 23.891 11.1282 23.8799C11.1167 23.8688 11.103 23.8603 11.0878 23.8548C10.1179 23.4895 9.17888 23.0491 8.27959 22.5378C8.26326 22.5284 8.24954 22.5151 8.23965 22.4992C8.22975 22.4833 8.22399 22.4652 8.22287 22.4466C8.22175 22.428 8.22531 22.4094 8.23323 22.3924C8.24114 22.3755 8.25318 22.3607 8.26827 22.3494C8.45696 22.2103 8.64578 22.0655 8.82596 21.9193C8.84197 21.9063 8.86134 21.898 8.88189 21.8953C8.90244 21.8925 8.92336 21.8955 8.94229 21.9038C14.8339 24.5506 21.2123 24.5506 27.0342 21.9038C27.0532 21.895 27.0743 21.8916 27.0952 21.8941C27.116 21.8965 27.1357 21.9048 27.152 21.9179C27.3322 22.0641 27.521 22.2103 27.7111 22.3494C27.7263 22.3606 27.7384 22.3753 27.7464 22.3921C27.7545 22.409 27.7582 22.4276 27.7572 22.4462C27.7562 22.4648 27.7506 22.4829 27.7408 22.4989C27.7311 22.5149 27.7174 22.5282 27.7012 22.5378C26.8039 23.0534 25.8641 23.4935 24.8916 23.8535C24.8765 23.8591 24.8628 23.8678 24.8513 23.8791C24.8399 23.8903 24.831 23.9038 24.8252 23.9187C24.8194 23.9335 24.8169 23.9494 24.8178 23.9653C24.8187 23.9812 24.8229 23.9967 24.8303 24.0108C25.369 25.0344 25.9831 26.0177 26.6679 26.9528C26.6818 26.972 26.7015 26.9864 26.7242 26.994C26.7468 27.0015 26.7714 27.0019 26.7942 26.995C30.0321 26.0197 33.0771 24.5077 35.7981 22.5239C35.8113 22.5144 35.8224 22.5022 35.8304 22.4882C35.8385 22.4741 35.8435 22.4585 35.8449 22.4425C36.5958 14.8015 34.5878 8.16424 30.5224 2.28034ZM12.0301 18.4167C10.2563 18.4167 8.79474 16.8144 8.79474 14.8465C8.79474 12.8787 10.2279 11.2762 12.0301 11.2762C13.8463 11.2762 15.2937 12.8926 15.2654 14.8464C15.2654 16.8144 13.8321 18.4167 12.0301 18.4167ZM23.9922 18.4167C22.2184 18.4167 20.7569 16.8144 20.7569 14.8465C20.7569 12.8787 22.1901 11.2762 23.9922 11.2762C25.8085 11.2762 27.2559 12.8926 27.2275 14.8464C27.2275 16.8144 25.8085 18.4167 23.9922 18.4167Z" fill="black"/>
            </svg>
            )
        default:
            (<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5625 17.125C25.5625 18.6207 25.119 20.0829 24.288 21.3265C23.457 22.5701 22.2759 23.5394 20.8941 24.1118C19.5122 24.6842 17.9916 24.834 16.5246 24.5422C15.0577 24.2504 13.7101 23.5301 12.6525 22.4725C11.5949 21.4149 10.8746 20.0674 10.5828 18.6004C10.291 17.1334 10.4408 15.6128 11.0132 14.231C11.5856 12.8491 12.5549 11.668 13.7985 10.837C15.0422 10.006 16.5043 9.5625 18 9.5625C20.005 9.56477 21.9272 10.3623 23.345 11.78C24.7627 13.1978 25.5602 15.12 25.5625 17.125ZM35.875 18.5C35.875 22.0353 34.8267 25.4913 32.8625 28.4308C30.8984 31.3703 28.1067 33.6614 24.8405 35.0143C21.5742 36.3673 17.9802 36.7212 14.5128 36.0315C11.0454 35.3418 7.86034 33.6394 5.36047 31.1395C2.86061 28.6397 1.15818 25.4547 0.468471 21.9872C-0.22124 18.5198 0.132745 14.9258 1.48566 11.6595C2.83858 8.3933 5.12966 5.60161 8.06919 3.63748C11.0087 1.67335 14.4647 0.625 18 0.625C22.7392 0.630005 27.2829 2.51487 30.634 5.86599C33.9851 9.21712 35.87 13.7608 35.875 18.5ZM33.125 18.5C33.1228 16.4642 32.7101 14.4497 31.9115 12.5771C31.1129 10.7045 29.9448 9.01214 28.4772 7.60129C27.0095 6.19044 25.2724 5.09006 23.3697 4.36596C21.4671 3.64187 19.4379 3.30892 17.4036 3.38703C9.30829 3.69984 2.85266 10.4425 2.87501 18.543C2.88277 22.2306 4.24283 25.7873 6.69751 28.5392C7.69717 27.0893 8.96701 25.8457 10.4375 24.8766C10.5629 24.7938 10.7119 24.7543 10.8619 24.7642C11.0118 24.7742 11.1543 24.8329 11.2677 24.9316C13.1363 26.5478 15.5243 27.4373 17.9949 27.4373C20.4654 27.4373 22.8535 26.5478 24.722 24.9316C24.8354 24.8329 24.9779 24.7742 25.1279 24.7642C25.2778 24.7543 25.4268 24.7938 25.5522 24.8766C27.0245 25.8452 28.2962 27.0888 29.2974 28.5392C31.7642 25.7772 33.1268 22.2032 33.125 18.5Z" fill="black"/>
            </svg> 
            )  
      }
}


