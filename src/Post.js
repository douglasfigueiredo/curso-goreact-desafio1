import React from 'react';

import PostHeader from './PostHeader';

const Post = ({
  avatar, name, time, text,
}) => (
  <div className="post">
    <PostHeader avatar={avatar} name={name} time={time} />
    <div className="text">
      {text}
    </div>
  </div>
);

export default Post;
