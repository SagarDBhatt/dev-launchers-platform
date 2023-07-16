import React from "react";
import { useRouter } from 'next/router'

import { useUserDataContext } from '../../context/UserDataContext';

import Head from 'next/head';
import UserProfile from "../../components/modules/UserProfile";
import UserOnboardingModal from "../../components/modules/UserOnboardingModal"
import IntroductionModal from "./../../components/modules/IntroductionModal"

/**
 * @drescription This component renders the User Profile Component. 
 * A Modal is opened when user has not fully completed their onboarding.
 */
export default function UserProfilePage(props) {
  const { userData } = useUserDataContext();
  const router = useRouter();


  /**
   * @description Open modal when user is coming from the onbaording page. 
   * More conditions will be applied when modal should be opened in the future.
   */
  const openUserOnboardingModal = () => {
    return true//(router.query?.onboarding)
  }

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <div>
        {openUserOnboardingModal() && <IntroductionModal/>}
        <UserProfile isPublic={false}/>
      </div>
    </>
  );
}
