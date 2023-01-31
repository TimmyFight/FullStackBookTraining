import React, {useRef} from 'react';
import {AppState} from './store/AppState';
import {useSelector} from 'react-redux';

const PostDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log("Printing component PostDisplay", renderCount.current++);
  const post = useSelector((state: AppState) => state.post);

  if (post) {
    return (
      <>
        <div>
          <label>Title:</label>
          &nbsp;{post.title}
        </div>
        <div>
          <label>Content:</label>
          &nbsp;{post.body}
        </div>
      </>
    )
  } else {
    return null;
  }
});

export default PostDisplay;
