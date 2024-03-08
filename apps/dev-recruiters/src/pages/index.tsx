import Head from 'next/head';
import SignUpForm from '../components/modules/FormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import { Wrapper } from '@components/modules/OpportunitiesAggregator/StyledOpportunitiesAggregator';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import NewJoinPageComponent from '../components/modules/NewJoinPageComponent';
import { GetStaticProps } from 'next';
import { Project } from '@devlaunchers/models/project';
import { Opportunity } from '@devlaunchers/models/opportunity';
import agent from '@devlaunchers/utility/agent';
import { useRouter } from 'next/router';
import { OpportunitiesProvider } from '../contexts/SelectRoleContext';

export const getStaticProps: GetStaticProps = async (context) => {
  let projects: Project[] = [];
  let opportunities: Opportunity[] = [];
  try {
    const result = await agent.Projects.list(
      new URLSearchParams({'_publicationState': 'live', populate: 'opportunities'})
    );
    projects = result.filter((p: Project) => p.attributes.opportunities.length > 0);
    projects.map((project) => {
      const commitments = project.opportunities.map(
        (opp) => opp.commitmentHoursPerWeek
      );
      // console.log(commitments);
      const maxCommitment = Math.max(...commitments);
      const minCommitment = Math.min(...commitments);
      project.commitmentLevel = `${minCommitment} - ${maxCommitment}`;
      return project;
    });
  } catch (error) {
    console.error('An error occurred while fetching Projects', error);
  }

  try {
    const result = await agent.Opportunities.list();
    opportunities = result.filter((o: Opportunity) => o.attributes.projects.length > 0);
  } catch (error) {
    console.error('An error occurred while fetching Opportunities', error);
  }

  return {
    props: {
      projects,
      opportunities,
    },
    revalidate: 10,
  };
};

interface Props {
  projects: Project[];
  opportunities: Opportunity[];
}

const NewJoinPage = ({ projects, opportunities }: Props) => {
  const router = useRouter();
  const { format } = router.query;

  return (
    <>
      <Head>
        <title>Join</title>
        <meta name="title" content="Dev Discovery"></meta>
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://devlaunchers.org/projects"
        ></meta>
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="og:title" content="Dev Discovery"></meta>
        <meta
          property="og:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://devlaunchers.org/projects"
        ></meta>
        <meta property="twitter:title" content="Dev Discovery"></meta>
        <meta
          property="twitter:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>

      <ThemeProvider theme={theme}>
        <OpportunitiesProvider>
          <NewJoinPageComponent
            projects={projects}
            opportunities={opportunities}
          />
        </OpportunitiesProvider>
      </ThemeProvider>
    </>
  );
};

export default NewJoinPage;
