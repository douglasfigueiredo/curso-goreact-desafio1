import React from 'react';

import PropTypes from 'prop-types';

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

Post.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
