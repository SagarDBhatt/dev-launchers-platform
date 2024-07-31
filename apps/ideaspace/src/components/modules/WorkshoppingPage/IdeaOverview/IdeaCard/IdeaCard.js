import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {
  StyledCard,
  TopView,
  LeftView,
  RightView,
  StyledDiv,
  IdeaName,
  IdeaTagLine,
  BottomView,
  Button,
  StyledText,
} from './StyledIdeaCard';

export const IdeaCard = ({ ideaImage, ideaName, ideaTagLine }) => {
  // a function to keep track of the number of upvotes and when the user clicks the upvote button for this idea
  function handleUpvoteClick(event) {
    if (liked) {
      // if there's a like object corresponding to this user and idea, delete it

      // Refresh the page so that the new number of upvotes is displayed
      setState(true);

      setLiked(false);
    } else {
      // create a like object using the Like collection from the strapiv4 repo, storing the user ID, the idea ID, and the "IdeaCard" object type
      var likeData = {
        objectId: this.id,
        objectType: 'IdeaCard',
        users_permission_user: userData.userId,
      };

      try {
        const res = agent.Likes.post(likeData);
      } catch (error) {
        console.error(error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }

      // Refresh the page so that the new number of upvotes is displayed
      setState(true);

      setLiked(true);
    }
  }

  return (
    <StyledCard>
      <TopView>
        <LeftView>
          {ideaImage ? <img src={ideaImage} /> : <StyledDiv></StyledDiv>}
        </LeftView>
        <RightView>
          <IdeaName>{ideaName}</IdeaName>
          <IdeaTagLine>{ideaTagLine}</IdeaTagLine>
        </RightView>
      </TopView>

      {/* <BottomView>
        <Button>
          <BookmarkBorderOutlinedIcon />
          <StyledText>FOLLOW</StyledText>
        </Button>
        <Button onClick={handleUpvoteClick}>
          <StarBorderOutlinedIcon />
          <StyledText>UPVOTE</StyledText>
        </Button>
        <Button>
          <ShareOutlinedIcon />
          <StyledText>SHARE</StyledText>
        </Button>
      </BottomView> */}
    </StyledCard>
  );
};
