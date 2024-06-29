import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { useRouter } from 'next/router';

import Loader from './../../common/Loader';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SideBar from './SideBar';
import Overview from './Overview';
import EditProfileModal from './EditProfileModal';
import Modal from './../../../components/common/Modal'
import { editProfileDataContext } from '../../../context/EditProfileDataContext';
// State management component
/**
 * This component has been broken down into two,
 * 1. State management component (UserProfile) – initialising states, getting data from backeend.
 * 2. The view component (UserProfileView) – rendering the UI elements.
 * @export
 * @param {*} { publicUserData, isPublic }
 * @return {*}
 */
export default function UserProfile({ publicUserData, isPublic }) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { editProfileState } = editProfileDataContext();

  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = React.useState([]);
  const [myProjects, setMyProjects] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [ideas, setIdeas] = React.useState([]);
  const [people, setPeople] = React.useState([]);
  const [interests, setInterests] = React.useState([]);

  // If user hasn't set a username, redirect them to the signup form
  const router = useRouter();
  React.useEffect(() => {
    if (isAuthenticated && userData.name === '') router.push('/signup');
  }, [isAuthenticated]);

  // Start Projects/Opportunities
  React.useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
      .then(({ data }) => {
        if (data) {
          setProjects(data);
          const tempOpportunities = [];
          data.map((project) => {
            project.opportunities.map((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
          });
          setOpportunities(tempOpportunities);
        }
      })
      .catch(() => {
        console.error('Could not fetch project data');
      });
  };

  // React.useEffect(() => {
  //   const myProjects = [];
  //   projects.map((project) => {
  //     [...project.team.leaders, ...project.team.members].map((member) => {
  //       if (member.id == userData.id) myProjects.push(project);
  //     });
  //   });
  //   setMyProjects(myProjects);
  // }, [projects, userData]);
  // End Projects/Opportunities

  // Start Ideas
  React.useEffect(() => {
    getIdeaData();
  }, []);
  const getIdeaData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
      .then(({ data }) => {
        if (data) {
          setIdeas(data);
        }
      })
      .catch(() => {
        console.error('Could not fetch idea data');
      });
  };
  // End Ideas

  // Start People
  React.useEffect(() => {
    getPeopleData().catch(() => {
      console.error(`Could not fetch People's data`);
    });
  }, []);
  const getPeopleData = async () => {
    const userCount = (
      await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count`)
    ).data;
    let randomUserIds = [
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
    ];

    let usersData = await Promise.all(
      randomUserIds.map(
        async (userId) =>
          (
            await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`)
          ).data
      )
    );

    setPeople(usersData);
  };
  // End People

  // Start Interests
  React.useEffect(() => {
    getInterests();
  }, []);

  const getInterests = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`)
      .then(({ data }) => {
        data && setInterests(data);
      })
      .catch(() => {
        console.error('Could not fetch interest data');
      });
  };
  // End Interests

  useEffect(() => {
    setLoading(userData?.id === -1 || publicUserData?.id === -1);
  }, [publicUserData, userData]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-row bg-[#f9f9f9] h-screen">
      <div className="w-72">
        <SideBar
          isPublic={isPublic}
          profilePictureUrl={
            isPublic
              ? publicUserData?.profile?.profilePictureUrl
              : userData.profilePictureUrl
          }
          displayName={
            isPublic ? publicUserData?.profile?.displayName : userData.name
          }
          title={isPublic ? publicUserData?.profile?.bio : userData.bio}
        />
      </div>
      <div className="px-20 pb-20">
        <Overview />
        {editProfileState.showEditProfileModal ? <EditProfileModal /> : null}
      </div>
    </div>
  );
}
