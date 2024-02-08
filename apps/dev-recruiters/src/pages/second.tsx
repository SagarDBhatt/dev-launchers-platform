import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import TalcommunityPage from '../components/modules/TalcommunityPage';

const SecondPage = () => (
  <>
    <TalcommunityPage></TalcommunityPage>
    <SignUpForm />
  </>
);

export default SecondPage;
