import React, { useState } from 'react';
import Comment from './SingleComment';
import { cleanData } from '../../../../utils/StrapiHelper';

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

function DisplayComments(props) {
  const commentNodes = props.comments.map((comment) => {
    const commentUser = cleanData(comment.user?.data);
    return (
      <Comment
        user={commentUser}
        key={comment.id}
        id={comment.id}
        createdAt={comment.createdAt}
        publishedAt={comment.publishedAt}
        updatedAt={comment.updatedAt}
        forIdea={props.selectedCard}
      >
        {comment.text}
      </Comment>
    );
  });

  return (
    <div>
      {props.comments.length ? (
        commentNodes
      ) : (
        <div style={{ padding: '2rem' }}>No comments yet!</div>
      )}
    </div>
  );
}

export default DisplayComments;
